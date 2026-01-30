'use client';
import Image from 'next/image';

import * as z from 'zod';
import { Stars } from '../components/Stars';
import { Dropdown } from '../components/Dropdown';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { InputField } from '../components/InputField';
import { TextBox } from '../components/TextBox';

const regex = {
  tail_number: /^[A-Za-z0-9-]{1,7}$/,
};

const tailNumberSchema = z.object({
  inputTailNumber: z.string().nonempty().regex(regex.tail_number),
});

const textNonEmptySchema = z.object({
  inputTailNumber: z.string().nonempty(),
});

const selectOneOptionSchema = z.object({
  selectOneOption: z.string().refine((val) => val !== ''),
});

const starRatingSchema = z.object({
  starRating: z.number().gt(0),
});

const schemas = {
  tailNumber: tailNumberSchema,
  textNonEmpty: textNonEmptySchema,
  selectOneOption: selectOneOptionSchema,
  starRating: starRatingSchema,
};

const schema = z.object({
  tail_number: z
    .string()
    .nonempty('Tail Number Required')
    .regex(/^[A-Za-z0-9-]{1,7}$/, {
      message: 'Enter a valid Tail Number e.g. N1234',
    }),
  select1: z
    .string()
    .refine((val) => val !== '', { message: 'Select an option' }),
  select2: z
    .string()
    .refine((val) => val !== '', { message: 'Select an option' }),
  select3: z
    .string()
    .refine((val) => val !== '', { message: 'Select an option' }),
  rating1: z.number().gt(0, 'Select rating'),
  rating2: z.number().gt(0, 'Select rating'),
  rating3: z.number().gt(0, 'Select rating'),
  rating1Textbox: z.string().min(1, { message: 'Required response' }),
  rating2Textbox: z.string().min(1, { message: 'Required response' }),
  rating3Textbox: z.string().min(1, { message: 'Required response' }),
});

export function Form() {
  type FormValues = z.infer<typeof schema>;
  const [starRating, setStarRating] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      tail_number: '',
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating1Textbox: '',
      rating2Textbox: '',
      rating3Textbox: '',
    },
    mode: 'onChange', // validate as soon as values change
  });
  const handleRating1Change = (value: number) => {
    setStarRating(0);
    setValue('rating1', value, { shouldValidate: true });
  };
  const handleRating2Change = (value: number) => {
    setStarRating(0);
    setValue('rating2', value, { shouldValidate: true });
  };
  const handleRating3Change = (value: number) => {
    setStarRating(0);
    setValue('rating3', value, { shouldValidate: true });
  };
  const onSubmit: SubmitHandler<FormValues> = async () => {
    toast.success("We've received your feedback!");
    const submissionData = getValues();

    reset();
    setStarRating(-1);

    try {
      const response = await fetch('api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': 'mock-API-Key',
        },
        body: JSON.stringify(submissionData),
      });
      if (!response.ok) throw new Error("Data didn't fetch");
      console.log(response.json());
    } catch (error) {
      console.log(error);
    }

    // TODO GET
    // try {
    //   const response = await fetch('api/get', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'API-Key': process.env.DATA_API_KEY ?? 'temp-key-fallback',
    //     },
    //   });
    //   if (!response.ok) throw new Error("Data didn't fetch");
    //   console.log(response.json());
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const onInvalid: SubmitErrorHandler<FormValues> = () => {};
  return (
    <form
      className='surveryContainer'
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <Toaster position='top-center' reverseOrder={false} />
      <Image
        src='/nsj-logo.jpg'
        width={125}
        height={125}
        alt='North Star Jet Logo'
        className='logo'
      ></Image>

      <div className='surveyStructure' id='surveyStructure'>
        <InputField
          title={'Tail Number'}
          placeholder={'N1234'}
          error={errors.tail_number?.message as string}
          register={{ ...register('tail_number') }}
        />

        <Dropdown
          title={'What brought you to North Star Jet?'}
          options={[
            'CAA',
            'World Fuel',
            'Prices',
            'Customer Service',
            'Word of Mouth',
            'Other',
          ]}
          error={errors.select1?.message as string}
          register={{ ...register('select1') }}
        />
        <Dropdown
          title='What is your favorite amenity?'
          options={['Pop Corn', 'Merch', 'Coffee']}
          error={errors.select2?.message as string}
          register={{ ...register('select2') }}
        />
        <Dropdown
          title='Would you return?'
          options={['Yes', 'No']}
          error={errors.select3?.message as string}
          register={{ ...register('select3') }}
        />

        <Stars
          title={'How was our Customer Service?'}
          error={errors.rating1?.message as string}
          updateRating={handleRating1Change}
          reset={{ getRating: starRating, setRating: setStarRating }}
        />
        <TextBox
          placeholder={'What about us stood out to you?'}
          error={errors.rating1Textbox?.message as string}
          register={{ ...register('rating1Textbox') }}
        />

        <Stars
          title={'How were the amenities?'}
          error={errors.rating2?.message as string}
          updateRating={handleRating2Change}
          reset={{ getRating: starRating, setRating: setStarRating }}
        />

        <TextBox
          placeholder={'Did any amenities stand out to you?'}
          error={errors.rating2Textbox?.message as string}
          register={{ ...register('rating2Textbox') }}
        />

        <Stars
          title={'How do our prices compare?'}
          error={errors.rating3?.message as string}
          updateRating={handleRating3Change}
          reset={{ getRating: starRating, setRating: setStarRating }}
        />
        <TextBox
          placeholder={'How do we compare?'}
          error={errors.rating3Textbox?.message as string}
          register={{ ...register('rating3Textbox') }}
        />
      </div>
      <button type='submit' className='submitButton'>
        Submit
      </button>
    </form>
  );
}
