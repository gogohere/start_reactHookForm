import { useForm, useController } from 'react-hook-form';

export function Input(props: any) {
    const { field, fieldState } = useController(props);

    return (
        <div>
            <input {...field} placeholder={props.name} />
            <p>{fieldState.isTouched && 'Touched'}</p>
            <p>{fieldState.isDirty && 'Dirty'}</p>
            <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>
        </div>
    )
}


function Demo5() {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            FirstName: '',
        },
        mode: 'onChange'
    })
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name="FirstName" rules={{ require: true }} />
            <input type="submit" />
        </form>
    )
};

export default Demo5;