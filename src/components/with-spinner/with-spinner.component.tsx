import React, { FC } from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

type Props = {
  isLoading: boolean;
};

const WithSpinner = (WrappedComponent: any) => {
  const Spinner: FC<Props>=({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
