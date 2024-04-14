import styles from './CreateTicket.module.scss'
import { useId, useState } from 'react'
import closeSvg from './assets/close.svg'
import sendSvg from './assets/send.svg'
import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
export const CreateTicket = () => {
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const navigate = useNavigate()
	const [titleId, messageId] = useId()
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

	const onSubmit = data => {
		console.log(data)
		navigate(`/tickets/${}`)
		reset()
	}

	const handleCancel = () => {
		reset()

		navigate('/tickets')
	}

	return (
		<div className={styles.createTicketHolder}>
			<h4 className={styles.title}>New Ticket</h4>
			<form action='' onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='title'
					control={control}
					rules={{ required: 'Please enter this field' }}
					render={({ field }) => (
						<div className={styles.formElem}>
							<label className={styles.label} htmlFor={titleId}>
								{errors.title && errors?.title?.message}
							</label>
							<input
								type='text'
								className={styles.input}
								placeholder='Title Ticket'
								value={field.value}
								onChange={field.onChange}
								id={titleId}
							/>
						</div>
					)}
				/>

				<Controller
					name='message'
					control={control}
					rules={{
						required: 'Please enter this field',
						minLength: { value: 10, message: 'Message too short' }
					}}
					render={({ field }) => (
						<div className={styles.formElem}>
							<label className={styles.label} htmlFor={messageId}>
								{errors.message && errors?.message?.message}
							</label>
							<textarea
								className={styles.input}
								placeholder='Message ticket'
								value={field.value}
								height={300}
								onChange={field.onChange}
								id={messageId}
							></textarea>
						</div>
					)}
				/>

				<div className={styles.actionsHolder}>
					<button
						type='submit'
						className={[styles.sendBtn, styles.fill].join(' ')}
					>
						<img src={sendSvg} alt='' />
						Create Ticket
					</button>

					<button className={styles.closeBtn} onClick={handleCancel}>
						<img src={closeSvg} alt='' />
						Cancel
					</button>
				</div>
			</form>
		</div>
	)
}
