'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { LoginButton } from './LoginButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

export function LoginOverlay({}) {
  const schema = z.object({ login: z.string().nonempty() });
  const [openModal, setOpenModal] = useState(true);
  type FormValues = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onSubmit', // validate as soon as values change
  });
  const onSubmit: SubmitHandler<FormValues> = async () => {
    setOpenModal(false);
  };
  return (
    <div className={`${openModal ? 'wFull hFull fixed' : 'w-0 h-0'}`}>
      {openModal && (
        <div className='wFull hFull fixed'>
          <div className='subject loginOverlay'>
            <div className='loginModal centerX centerY'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`row centerY centerX`}>
                  <input
                    placeholder={`Password`}
                    className={`inputLogin ${errors.login?.message ? 'error errorColor errorOutline inputPlaceholderError' : ''}`}
                    type={'password'}
                    {...register('login')}
                  ></input>
                  <LoginButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
