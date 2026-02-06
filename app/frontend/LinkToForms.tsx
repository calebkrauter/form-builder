import { surveys } from './form-templates/registry';

export function LinkToForms() {
  return (
    <div className='row'>
      {Object.keys(surveys).map((surveyKey, i) => {
        return (
          <a key={i} href={`/surveys/${surveyKey}`}>
            <button className='formButton'>
              {surveys[surveyKey].surveyName}
            </button>
          </a>
        );
      })}
    </div>
  );
}
