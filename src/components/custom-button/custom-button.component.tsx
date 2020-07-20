import React, { ReactNode, FC } from 'react';

import './custom-button.styles.scss';

type Props = {
  children: ReactNode;
  onClick?: () => Promise<firebase.auth.UserCredential>;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isGoogleSignIn?: boolean;
};

const CustomButton: FC<Props> = ({ children,isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn? 'google-sign-in': ''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
