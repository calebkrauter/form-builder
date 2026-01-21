import { useEffect, useState } from 'react';

interface Props {
  subject: string;
}
export function Stars({ subject }: Props) {
  const [getRating, setRating] = useState(0);
  const [getSubjectRating, setSubjectRating] = useState({
    subject: '',
    rating: 0,
  });
  function handleRating(rating: number) {
    const curRating = getRating === rating ? 0 : rating;
    setRating(curRating);
    setSubjectRating({ subject: subject, rating: curRating });
  }
  useEffect(() => {
    console.log(getSubjectRating);
  }, [getRating, getSubjectRating]);
  return (
    <div id='ratingGroup' className='ratingGroup'>
      <div className='subject'>{subject}</div>
      <div className='stars'>
        {[1, 2, 3, 4, 5].map((rating) => {
          return (
            <svg
              id={`star${rating}`}
              key={rating}
              height='25px'
              width='25px'
              version='1.1'
              className={`subject ${getRating === rating ? 'toggleStars' : ''}`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 473.486 473.486'
              onClick={() => {
                handleRating(rating);
              }}
            >
              <polygon
                points='473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
	237.732,386.042 384.416,460.829 357.032,298.473 '
              />
            </svg>
          );
        })}
      </div>
    </div>
  );
}
