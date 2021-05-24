import { Input, Select, Button } from 'maycur-antd';

import { useForm, SubmitHandler, Controller, useWatch } from 'react-hook-form';

interface IFormInput {
    firstName: string;
    lastName: string;
    iceCreamType: string;
}

const { Option } = Select;

function Demo4() {
    // const { control, handleSubmit, getValues } = useForm<IFormInput>();
    const { control, handleSubmit, getValues } = useForm<IFormInput>({
        defaultValues:{
            // firstName: '222222',
            iceCreamType: 'strawberry',
        }
    });
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    const firstName = useWatch({
        control,
        name: 'firstName',
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* 输入框 */}
            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => <Input {...field} style={{width: 120}} />}
            />
            <Controller
                name="iceCreamType"
                control={control}
                defaultValue="chocolate"
                render={({ field }) => {
                    return (
                        <Select
                            {...field}
                            style={{ width: 120 }}
                        >
                            <Option value="chocolate">Chocolate</Option>
                            <Option value="strawberry">Strawberry</Option>
                            <Option value="vanilla">Vanilla</Option>
                        </Select>
                    )
                }}
            />
            <Button htmlType="submit">提交</Button>
            {/* {getValues('firstName')} */}
            {firstName}
        </form>
    );
};

export default Demo4;