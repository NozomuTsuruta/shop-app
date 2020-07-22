import React, { ReactNode, FC } from 'react';

import './custom-button.styles.scss';

type Props = {
  children: ReactNode;
  onClick?: () => Promise<firebase.auth.UserCredential> | any;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
};

const CustomButton: FC<Props> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
