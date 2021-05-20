import React, { FC } from 'react';
import { useForm, SubmitHandler, UseFormRegister, Path } from 'react-hook-form';

interface IFormValues {
    "First Name": string;
    Age: number;
}

type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
}

// 下面组件是现有输入组件的示例
const Input: FC<InputProps> = ({ label, register, required }) => {

    return (
        <>
            <label>{label}</label>
            <input {...register(label, { required })} />
        </>
    );
};

// 你也可以通过使用React.forwardRef来传递ref
const Select = React.forwardRef<HTMLSelectElement, { label: string } & ReturnType<UseFormRegister<IFormValues>>>((
    { onChange, onBlur, name, label }, ref
) => {

    return (
        <>
            <label>{label}</label>
            <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </>
    )
});

// 自定义表单组件
function Demo3() {
    const { register, handleSubmit } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="First Name" register={register} required />
            <Select label="Age" {...register("Age")} />
            <input type="submit" />
        </form>
    );
};

export default Demo3;