import { UseFormRegisterReturn } from 'react-hook-form';
import { SurveyQuestion } from '../types';
import { RadioCircle } from './RadioCircle';

interface Props {
  question: SurveyQuestion;
  id: string;
  options: string[];
  error: string;
  register: UseFormRegisterReturn;
}
export function RadioGroup({ question, id, options, error, register }: Props) {
  return (
    <div
      className={`col ratingGroup radioGroup ${error ? 'error errorBorder' : ''}`}
      key={question.id}
    >
      <label className='subject multiSelectText'>{question.label}</label>
      {options.map((option, i) => {
        return (
          <div key={i}>
            <RadioCircle id={id} option={option} register={register} />
          </div>
        );
      })}
    </div>
  );
}
