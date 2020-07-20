import React, { ReactNode, FC, FormEvent } from 'react';

import './custom-button.styles.scss';

type Props = {
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
  type: 'button' | 'submit' | 'reset' | undefined;
};

const CustomButton: FC<Props> = ({ children, handleSubmit, type }) => {
  return (
    <button className='custom-button' type={type} onSubmit={handleSubmit}>
      {children}
    </button>
  );
};

export default CustomButton;
