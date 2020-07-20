import React, { useState, FormEvent, ChangeEvent } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sigin in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          value={email}
          required
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          label='email'
          type='email'
        />
        <FormInput
          value={password}
          required
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          label='password'
          type='password'
        />

        <CustomButton handleSubmit={handleSubmit} type='submit'> Sign In </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
