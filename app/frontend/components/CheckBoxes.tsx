import { Control, UseFormRegisterReturn, useController } from 'react-hook-form';
import { SurveyQuestion } from '../types';
import { CheckBox } from './CheckBox';

interface Props {
  question: SurveyQuestion;
  options: string[];
  error: string;
  register: UseFormRegisterReturn;
}
export function CheckBoxes({ question, options, error, register }: Props) {
  return (
    <div
      className={`col ratingGroup radioGroup ${error ? 'error errorOutline' : ''}`}
      key={question.id}
    >
      <label className='subject r'>{question.label}</label>
      {options.map((option, i) => {
        return (
          <div key={i}>
            <CheckBox option={option} register={register}></CheckBox>
          </div>
        );
      })}
    </div>
  );
}
