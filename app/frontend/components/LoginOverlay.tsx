'use client';
import { useEffect, useState } from 'react';
import { LoginButton } from './LoginButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import { useQueryState } from 'nuqs';
import { authenticateUser } from '../requests/authenticateUser';
import { createUser } from '../requests/createUser';
export function LoginOverlay({}) {
  const [username] = useQueryState('username');
  const [pressedSubmit, setPressedSubmit] = useState(false);
  const schema = z.object({
    password: z.string().min(5),
  });
  const [openModal, setOpenModal] = useState(true);
  type FormValues = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onSubmit', // validate as soon as values change
  });
  const onSubmit: SubmitHandler<FormValues> = async () => {
    if (username) {
      await createUser({ username: username, password: getValues().password });
    }
    const password = getValues().password;
    const isAuthenticated = await authenticateUser({
      password: password,
    });
    if (isAuthenticated) {
      setOpenModal(false);
    } else if (isAuthenticated === false) {
      setPressedSubmit(true);
      setOpenModal(true);
    }
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
                    className={`inputLogin ${errors.password?.message || pressedSubmit ? 'error errorColor errorOutline inputPlaceholderError' : ''}`}
                    type={'password'}
                    {...register('password', {
                      onChange: () => {
                        setPressedSubmit(false);
                      },
                    })}
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
