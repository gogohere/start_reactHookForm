import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    example: String;
    exampleRequired: String;
};

function Demo1() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    console.log(watch('example')); // 通过名字观察输入的值

    return (
        // 使用handleSubmit会先检查你的输入框的值，然后才会调用submit方法
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* 通过调用register函数，将input注入到hook当中 */}
            <input defaultValue="test" {...register('example')} />
            {/* 包含验证规则 */}
            <input {...register('exampleRequired', { required: true })} />
            {/* 字段验证失败的时候，会返回错误 */}
            { errors.exampleRequired && <span>This field is required</span> }
            <input type="submit" />
        </form>
    );
};

export default Demo1;