'use client';
import { Prompt } from './components/Prompt';

export default function Home() {
  return (
    <main className='main'>
      <div className='surveryContainer'>
        <div className='header'>NORTH STAR JET</div>
        <Prompt
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
        <Prompt
          title='What is your favorite amenity?'
          values={['Pop Corn', 'Merch', 'Coffee']}
        />
        <Prompt title='Would you return?' values={['Yes', 'No']} />
      </div>
    </main>
  );
}
