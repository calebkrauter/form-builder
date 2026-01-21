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
    <div id='stars'>
      <svg
        id='star1'
        key={1}
        height='20px'
        width='20px'
        version='1.1'
        className={`starDefault ${getRating === 1 ? 'toggleStars' : ''}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 473.486 473.486'
        onClick={() => {
          handleRating(1);
        }}
      >
        <polygon
          points='473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
	237.732,386.042 384.416,460.829 357.032,298.473 '
        />
      </svg>

      <svg
        id='star2'
        key={2}
        height='20px'
        width='20px'
        version='1.1'
        className={`starDefault ${getRating === 2 ? 'toggleStars' : ''}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 473.486 473.486'
        onClick={() => {
          handleRating(2);
        }}
      >
        <polygon
          points='473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
	237.732,386.042 384.416,460.829 357.032,298.473 '
        />
      </svg>

      <svg
        id='star3'
        key={3}
        height='20px'
        width='20px'
        version='1.1'
        className={`starDefault ${getRating === 3 ? 'toggleStars' : ''}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 473.486 473.486'
        onClick={() => {
          handleRating(3);
        }}
      >
        <polygon
          points='473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
	237.732,386.042 384.416,460.829 357.032,298.473 '
        />
      </svg>

      <svg
        id='star4'
        key={4}
        height='20px'
        width='20px'
        version='1.1'
        className={`starDefault ${getRating === 4 ? 'toggleStars' : ''}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 473.486 473.486'
        onClick={() => {
          handleRating(4);
        }}
      >
        <polygon
          points='473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
	237.732,386.042 384.416,460.829 357.032,298.473 '
        />
      </svg>

      <svg
        id='star5'
        key={5}
        height='20px'
        width='20px'
        version='1.1'
        className={`starDefault ${getRating === 5 ? 'toggleStars' : ''}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 473.486 473.486'
        onClick={() => {
          handleRating(5);
        }}
      >
        <polygon
          points='473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
	237.732,386.042 384.416,460.829 357.032,298.473 '
        />
      </svg>
    </div>
  );
}
