import Image from 'next/image';

import * as z from 'zod';
import { Stars } from '../components/Stars';
import { Dropdown } from '../components/Dropdown';

export function Form() {
  return (
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
        <Stars subject='How was our Customer Service?' />
        <textarea
          className='fields outline textarea'
          placeholder='What did you think of our customer service?'
        ></textarea>
        <Stars subject='What did you think of our amenities?' />
        <textarea
          className='fields outline textarea'
          placeholder='Did any amenities stand out to you?'
        ></textarea>
        <Stars subject='How did you like our pricing?' />
        <textarea
          className='fields outline textarea'
          placeholder='How do we compare?'
        ></textarea>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
