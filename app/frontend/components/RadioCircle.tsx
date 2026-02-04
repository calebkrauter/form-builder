import { UseFormRegisterReturn } from 'react-hook-form';
import { SurveyQuestion } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

interface Props {
  id: string;
  option: string;
  register: UseFormRegisterReturn;
}

export function RadioCircle({ id, option, register }: Props) {
  return (
    <label className='subject row spaceAbove'>
      <input
        type='radio'
        id={id}
        value={option}
        {...register}
        defaultChecked={false} // string comparison
      />

      <FontAwesomeIcon icon={faCircleDot} className='circle' />

      <div className='selectionText'>{option}</div>
    </label>
  );
}
