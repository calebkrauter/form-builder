import {
  Control,
  FieldValues,
  GetValuesConfig,
  UseFormGetValues,
  UseFormRegisterReturn,
  useController,
} from 'react-hook-form';
import { KeyValue, SurveyQuestion } from '../types';
import { CheckBox } from './CheckBox';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  question: SurveyQuestion;
  options: string[];
  error: string;
  register: UseFormRegisterReturn;
  submitAction: {
    submitted: boolean;
    setSubmitted: Dispatch<SetStateAction<boolean>>;
  };
}
export function CheckBoxes({
  question,
  options,
  error,
  register,
  submitAction,
}: Props) {
  return (
    <div
      className={`col ratingGroup radioGroup ${error ? 'error errorBorder' : ''}`}
      key={question.id}
    >
      <label className='subject'>{question.label}</label>
      {options.map((option, i) => {
        return (
          <div key={i}>
            <CheckBox
              option={option}
              register={register}
              submitAction={submitAction}
            ></CheckBox>
          </div>
        );
      })}
    </div>
  );
}
