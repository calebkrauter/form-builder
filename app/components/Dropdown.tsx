'use client';

import { useEffect, useId, useState } from 'react';

interface Props {
  title: string;
  values: string[];
}
export function Dropdown({ title, values }: Props) {
  const [selection, setSelection] = useState('caa');
  const suervey_options_id = useId();
  useEffect(() => {
    console.log(selection);
  }, [selection]);

  return (
    <div className='prompt'>
      <label className='subject' htmlFor={suervey_options_id}>
        {title}
      </label>
      <select
        className='dropdown fields border'
        id={suervey_options_id}
        onChange={(e) => {
          setSelection(e.currentTarget.value);
        }}
      >
        {values.map((value, i) => {
          return (
            <option value={value} key={i}>
              &nbsp;&nbsp;&nbsp;{value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
