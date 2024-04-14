import cl from './CreateTicketPage.module.scss';
import closeSvg from './assets/close.svg';
import sendSvg from './assets/send.svg';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputController } from '@/components/UI/TextFieldController/TextFieldController';
import { useHideFooter } from '@/hooks/useLayout';

interface ITicketInputs {
   title: string;
   message: string;
}

interface Props {}

const CreateTicketPage: React.FC<Props> = () => {
   const navigate = useNavigate();
   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<ITicketInputs>();

   const onSubmit: SubmitHandler<ITicketInputs> = (data) => {
      console.log(data);
      navigate(`/tickets/${Date.now()}`);
      reset();
   };

   const handleCancel = () => {
      reset();

      navigate('/tickets');
   };

   useHideFooter();

   return (
      <div className={cl.createTicketHolder}>
         <h4 className={cl.title}>New Ticket</h4>
         <form action="" onSubmit={handleSubmit(onSubmit)}>
            <InputController
               fieldType="input"
               name="title"
               control={control}
               rules={{ required: 'Please enter this field' }}
               label="Title ticket"
               errors={errors}
            />
            <InputController
               fieldType="textarea"
               name="message"
               control={control}
               rules={{
                  required: 'Please enter this field',
                  minLength: { value: 10, message: 'Message too short' },
               }}
               label="Title ticket"
               errors={errors}
            />

            <div className={cl.actionsHolder}>
               <button
                  type="submit"
                  className={[cl.sendBtn, cl.fill].join(' ')}
               >
                  <img src={sendSvg} alt="" />
                  Create Ticket
               </button>

               <button
                  className={cl.closeBtn}
                  onClick={handleCancel}
                  type="button"
               >
                  <img src={closeSvg} alt="" />
                  Cancel
               </button>
            </div>
         </form>
      </div>
   );
};

export default CreateTicketPage;
