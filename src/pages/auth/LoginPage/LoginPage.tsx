// import LoginLayout from '../../../components/login-layout/LoginLayout.jsx';
// import Field from '../../../components/ui/field/Field.jsx';
// import { useLoginPage } from './useLoginPage.js';
// import Button from '../../../components/ui/button/Button.js';
import cl from './LoginPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
// import CaptchaInput from '../../../components/ui/field/CaptchaInput.jsx';
import { useHideSidebar, useShowHeader } from '../../../hooks/useLayout.ts';
import { Button } from '@/components/UI/Button/Button.tsx';
import { AuthFormLayout } from '@/components/layout/AuthFormLayout/AuthFormLayout.tsx';
import { useLoginPage } from './useLoginPage.ts';
import { TextFieldController } from '@/components/UI/TextFieldController/TextFieldController.tsx';

const LoginPage = () => {
   const navigate = useNavigate();

   const { errors, handleSubmit, onSubmit, control } = useLoginPage();

   // const {
   //    handleSubmit,
   //    formState: { errors },
   //    control,
   //    setFocus,
   // } = useForm<ILoginInputs>();
   useShowHeader();

   // const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
   //    console.log(data);
   // };
   return (
      <AuthFormLayout>
         <form className={cl.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={cl.title}>Авторизация</h3>
            <TextFieldController
               control={control}
               errors={errors}
               label="Ваша почта"
               name="email"
               fieldType="input"
               rules={{ required: 'Введите почту' }}
            />
            <TextFieldController
               control={control}
               errors={errors}
               label="Ваш пароль"
               name="password"
               fieldType="input"
               rules={{ required: 'Введите пароль' }}
            />
            <Button type="submit" title="Login">
               Войти
            </Button>
            <div className={cl.control}>
               <Link to={'/recover'} className={cl.link}>
                  Восстановить пароль
               </Link>
               <Link to={'/signup'} className={cl.link}>
                  Регистрация
               </Link>
            </div>
         </form>
      </AuthFormLayout>
   );
};

export default LoginPage;
