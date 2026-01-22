'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Dropdown } from './components/Dropdown';
import * as z from 'zod';
import { Stars } from './components/Stars';

// const Survey = z.object({
//   tail_number: z.string().refine((value) => {
//     (/^[A-Z0-9-]{1,7}$/.test(value ?? ''), 'Must be a valid tail number.');
//   }),
// });

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

        <div className='surveyStructure' id='surveyStructure'>
          <div className='tailInputContainer col'>
            <label className='subject' htmlFor='tail_number'>
              Tail Number
            </label>
            <input
              placeholder='Tail Number'
              className='fields outline '
              id='tail_number'
            ></input>
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
            className='fields outline textarea'
            placeholder='Tell us why'
          ></textarea>
          <Stars subject='Amenities' />
          <textarea
            className='fields outline textarea'
            placeholder='Tell us why'
          ></textarea>
          <Stars subject='Price' />
          <textarea
            className='fields outline textarea'
            placeholder='Tell us why'
          ></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
}
