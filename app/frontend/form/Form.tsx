'use client';

import { Stars } from '../components/Stars';
import { Dropdown } from '../components/Dropdown';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { InputField } from '../components/InputField';
import { TextBox } from '../components/TextBox';
import z, { ZodNumber, ZodString } from 'zod';
// import { schema } from '../validation/schema';
import { postSubmission } from '../requests/postSubmission';
const fields = [
  { name: 'firstName', type: 'text' },
  { name: 'age', type: 'number' },
];

// Create a dynamic Zod schema
const schema = z.object(
  fields.reduce(
    (acc, field) => {
      acc[field.name] =
        field.type === 'number'
          ? z.coerce.number().min(0) // 👈 important
          : z.string().min(1, 'Required');
      return acc;
    },
    {} as Record<string, z.ZodTypeAny>,
  ),
);

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
    postSubmission(submissionData);
  };
  const onInvalid: SubmitErrorHandler<FormValues> = () => {};
  return (
    <form
      className='surveryContainer'
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <Toaster position='top-center' reverseOrder={false} />

      <div className='surveyStructure' id='surveyStructure'>
        <InputField
          name={fields[0].name}
          title={'Tail Number'}
          placeholder={'N1234'}
          error={errors[fields[0].name]?.message as string}
          register={register(fields[0].name)}
          type={fields[0].type}
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
