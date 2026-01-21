'use client';
import { useEffect, useState } from 'react';
import { Left } from './components/Left';
import { Prompt } from './components/Prompt';
import { Prompts } from './components/Prompts';
import { Right } from './components/Right';
import { Stars } from './components/Stars';
import { Rating, RatingDisplay } from '@fluentui/react-rating';

export default function Home() {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    console.log(rating);
  }, [rating]);
  return (
    <main className='main'>
      <div className='surveryContainer'>
        <div className='header'>NORTH STAR JET</div>
        <div className='surveyStructure'>
          <Left className='left'>
            <Prompts />
          </Left>
          <Right className='right'>
            <input className='starsRating'></input>
            <Stars subject='Customer Service' />
          </Right>
        </div>
      </div>
    </main>
  );
}
