import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquare } from '@fortawesome/free-regular-svg-icons';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useState } from 'react';

interface Props {
  option: string;
  register: UseFormRegisterReturn;
}

export function CheckBox({ option, register }: Props) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <label className='row spaceAbove'>
      <input
        type='checkbox'
        checked={checked}
        id={option}
        {...register}
        onChange={(e) => {
          setChecked(e.target.checked);
          register.onChange(e);
        }}
      />
      {checked && (
        <FontAwesomeIcon icon={faSquareCheck} className='checkmark' />
      )}
      {!checked && <FontAwesomeIcon icon={faSquare} className='square' />}

      <div className='subject selectionText'>{option}</div>
    </label>
  );
}
