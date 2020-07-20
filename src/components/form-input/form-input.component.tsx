import React, { FC, ChangeEvent } from 'react';

import './form-input.styles.scss';

type Props = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  required: boolean;
  type: string;
};

const FormInput: FC<Props> = ({ handleChange, label, value, required, type }) => {
  return (
    <div className='group'>
      <input
        className='form-input'
        onChange={handleChange}
        required={required}
        value={value}
        type={type}
      />
      {label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
