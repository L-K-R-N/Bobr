import cl from './RegisterPage.module.scss';
import { Button } from '@/components/UI/Button/Button.tsx';
import { useHideSidebar } from '@/hooks/useLayout';
import { Link, useNavigate } from 'react-router-dom';
import { AuthFormLayout } from '@/components/layout/AuthFormLayout/AuthFormLayout';
import { useRegisterPage } from './useRegisterPage';
import { useState } from 'react';
import { TextFieldController } from '@/components/UI/TextFieldController/TextFieldController';
import { Controller } from 'react-hook-form';

const RegisterPage = () => {
   const navigate = useNavigate();
   const [captchaValue, setCaptchaValue] = useState('');

   const { errors, handleSubmit, onSubmit, control, register } =
      useRegisterPage();

   // const {
   //    handleSubmit,
   //    formState: { errors },
   //    control,
   //    setFocus,
   // } = useForm<IRegisterInputs>();
   useHideSidebar();
   const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      navigate('/forgot-password');
   };

   // const onSubmit: SubmitHandler<IRegisterInputs> = (data) => {
   //    console.log(data);
   // };

   return (
      <AuthFormLayout>
         <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={cl.title}>Регистрация</h3>
            <TextFieldController
               fieldType="input"
               control={control}
               errors={errors}
               label="Ваша почта"
               name="email"
               rules={{ required: 'Введите почту' }}
            />
            <TextFieldController
               fieldType="input"
               control={control}
               errors={errors}
               label="Ваше имя"
               name="name"
               rules={{ required: 'Введите имя' }}
            />
            <TextFieldController
               fieldType="input"
               control={control}
               errors={errors}
               label="Ваш пароль"
               name="password"
               rules={{ required: 'Введите пароль' }}
            />
            <TextFieldController
               fieldType="input"
               control={control}
               errors={errors}
               label="Повторите пароль"
               name="passwordConfirm"
               rules={{ required: 'Повторите пароль' }}
            />
            {/* <Controller
               name="isCompany"
               control={control}
               defaultValue={false}
               render={({ field }) => <input type="checkbox" {...field} />}
            /> */}
            <div className={cl.elem}>
               <input
                  {...register('isCompany')}
                  type="checkbox"
                  value={'true'}
               />
               Войти как продавец
            </div>
            <Button type="submit" title="Registration">
               Регистрация
            </Button>
            <div className={cl.control}>
               <Link to={'/signin'} className={cl.link}>
                  Авторизация
               </Link>
            </div>
         </form>
      </AuthFormLayout>
   );
};

export default RegisterPage;
