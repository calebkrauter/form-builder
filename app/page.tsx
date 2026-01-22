'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Dropdown } from './components/Dropdown';
import * as z from 'zod';
import { useQueryState } from 'nuqs';

import { Stars } from './components/Stars';
import { Form } from './form/Form';

// const Survey = z.object({
//   tail_number: z.string().refine((value) => {
//     (/^[A-Z0-9-]{1,7}$/.test(value ?? ''), 'Must be a valid tail number.');
//   }),
// });

export default function Home() {
  const [user] = useQueryState('user', { defaultValue: 'guest' });

  const [rating, setRating] = useState(0);
  useEffect(() => {
    console.log(rating);
    if (user === 'admin') {
      console.log('admin');
    }
  }, [rating, user]);
  return (
    <main className='main'>
      {user === 'admin' && <Form />}
      <Form />
    </main>
  );
}
