'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Dropdown } from './components/Dropdown';

import { Stars } from './components/Stars';
import { Rating, RatingDisplay } from '@fluentui/react-rating';

export default function Home() {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    console.log(rating);
  }, [rating]);
  return (
    <main className='main'>
      <form
        className='surveryContainer'
        onSubmit={() => {
          console.log('SUBMIT');
        }}
      >
        <Image
          src='/nsj-logo.jpg'
          width={125}
          height={125}
          alt='North Star Jet Logo'
          className='logo'
        ></Image>

        <div className='surveyStructure'>
          <div className='tailInputContainer col'>
            <div className='subject'>Tail Number</div>
            <input placeholder='Tail Number' className='fields border'></input>
          </div>

          <Dropdown
            title={'What brought you to North Star Jet?'}
            values={[
              'CAA',
              'World Fuel',
              'Prices',
              'Customer Service',
              'Word of Mouth',
              'Other',
            ]}
          />
          <Dropdown
            title='What is your favorite amenity?'
            values={['Pop Corn', 'Merch', 'Coffee']}
          />
          <Dropdown title='Would you return?' values={['Yes', 'No']} />
          <Stars subject='Customer Service' />
          <textarea
            className='fields border'
            placeholder='Tell us why'
          ></textarea>
          <Stars subject='Amenities' />
          <textarea
            className='fields border'
            placeholder='Tell us why'
          ></textarea>
          <Stars subject='Price' />
          <textarea
            className='fields border'
            placeholder='Tell us why'
          ></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
}
