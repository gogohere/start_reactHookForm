import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
    firstName: string;
    lastName: string;
}

const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

const Demo7 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName', { required: true })} />
            {errors.firstName && 'First name is required'}
            <input {...register('lastName', { required: true })} />
            {errors.lastName && 'last name is required'}
            <input type="submit" />
        </form>
    );
};

export default Demo7;