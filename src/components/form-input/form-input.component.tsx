import React, { FC, ChangeEvent } from 'react';

import './form-input.styles.scss';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  required?: boolean;
  type: string;
};

const FormInput: FC<Props> = ({ label,...otherProps }) => {
  return (
    <div className='group'>
      <input
        className='form-input'
        {...otherProps}
      />
      {label ? (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
