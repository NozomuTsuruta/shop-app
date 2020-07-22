import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setUser } from './redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from './redux/root-reducer';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: rootState) => state.user.currentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          dispatch(setUser({ id: snapshot.id, ...snapshot.data() }));
        });
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
