'use client';

import { useEffect, useId, useState } from 'react';

interface Props {
  title: string;
  values: string[];
}
export function Prompt({ title, values }: Props) {
  const [selection, setSelection] = useState('caa');
  const suervey_options_id = useId();
  useEffect(() => {
    console.log(selection);
  }, [selection]);

  return (
    <div className='prompt'>
      <label className='label' htmlFor={suervey_options_id}>
        {title}
      </label>
      <select
        className='dropdown'
        id={suervey_options_id}
        onChange={(e) => {
          setSelection(e.currentTarget.value);
        }}
      >
        {values.map((value, i) => {
          return (
            <option value={value} key={i}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
