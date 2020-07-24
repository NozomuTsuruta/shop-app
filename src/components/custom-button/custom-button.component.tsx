import React, { ReactNode, FC } from 'react';

import { CustomButtonContainer } from './custom-button.styles';

type Props = {
  children: ReactNode;
  onClick?: () => Promise<firebase.auth.UserCredential> | any;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
};

const CustomButton: FC<Props> = ({
  children,
  ...otherProps
}) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
