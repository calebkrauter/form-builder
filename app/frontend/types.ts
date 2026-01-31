





interface QuestionBase {
  helpText: string,
  id: string,
  label: string,
  required: boolean,
  type: string,
}

interface TextQuestion extends QuestionBase {
  maxLength: number,
  minLength: number,
  placeholder: string,
}

interface StarsQuestion extends QuestionBase {
  max: number,
  min: number,
}

interface DropdownSelect extends QuestionBase {
  placeholder: string,
  options: string[],
}

export type SurveyQuestion = TextQuestion | StarsQuestion | DropdownSelect

export interface SurveyDefinition {
  surveyKey: string,
  surveyName: string,
  surveyPath: string,
  version: number,
  questions: SurveyQuestion[],
}