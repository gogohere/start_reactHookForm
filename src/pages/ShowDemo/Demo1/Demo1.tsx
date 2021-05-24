import { FC } from 'react';
import { Input } from 'maycur-antd';
import { useForm, useWatch, useController, Controller, Control, UseFormRegister, ControllerRenderProps, UseFormRegisterReturn} from 'react-hook-form';

type InputDemoProps = {
    formKey: string;
    register: UseFormRegister<any>;
    control: Control<any>;
}

const colorArr = [
    {
        color: '#ffff00',
        key: 'color1'
    },
    {
        color: '#FFFFFF',
        key: 'color2'
    },
    {
        color: '#FFFF00',
        key: 'color3'
    },
    {
        color: '#FFFACD',
        key: 'color4'
    },
    {
        color: '#FFF0F5',
        key: 'color5'
    },
    {
        color: '#FFEBCD',
        key: 'color6'
    },
    {
        color: '#FFE4C4',
        key: 'color7'
    },
    {
        color: '#FFDEAD',
        key: 'color8'
    },
    {
        color: '#FFC125',
        key: 'color9',
    },
];

const getdefaultValue = () => {
    const _obj: any = {}

    colorArr.forEach((item) => {
        if (!_obj[item.key]) {
            _obj[item.key] = item.color;
        }
    })

    return _obj;
}

// maycur-antd的input - useControl
const MaycurAntdInput: FC<Omit<InputDemoProps, 'register'>> = (props) => {
    const { formKey, control } = props;

    const colorName = useWatch({
        control,
        name: formKey,
    })
    const {
        field,
    } = useController({
        name: formKey,
        control,
    });

    return (
        <div style={{ width: 400, height: 200, background: 'white' }}>
            <Input {...field} style={{ width: 120, lineHeight: "200px", height: '40px' }} />
            {colorName}
        </div>
    );
};

// maycur-antd的input - Control
const MaycurAntdInput2: FC<Omit<InputDemoProps, 'register'>> = (props) => {
    const { formKey, control } = props;

    const colorName = useWatch({
        control,
        name: formKey,
    })

    return (
        <div style={{ width: 400, height: 200, background: 'white' }}>
            <Controller 
                name={formKey}
                control={control}
                render={({ field }) => <Input {...field} style={{ width: 120, lineHeight: "200px", height:'40px' }} /> }
            />
            {colorName}
        </div>
    );
};

// 普通的input
const MaycurInput3: FC<InputDemoProps> = (props) => {
    const { formKey, register, control } = props;

    const colorName = useWatch({
        control,
        name: formKey,
    })

    const _register = register(formKey);

    return (
        <div style={{ width: 400, height: 200, background: 'white' }}>
            <Input {..._register} style={{ width: 120, lineHeight: "200px", height: '40px' }} />
            {colorName}
        </div>
    );
}


// 普通的input
const InputDemo: FC<InputDemoProps> = (props) => {
    const { formKey, register, control } = props;

    const colorName = useWatch({
        control,
        name: formKey,
    })

    return (
        <div style={{ width: 400, height: 200, background: 'white' }}>
            <input {...register(formKey)} style={{ width: 120, lineHeight: "200px", height: '40px' }} />
            {colorName}
        </div>
    );
}

const Demo1 = () => {
    const {
        register,
        control,
        getValues,
    } = useForm<any>({
        defaultValues: { ...getdefaultValue() }
    });

    return (
        colorArr.map(item => (
            <form>
                {/* <InputDemo 
                    key={item.key}
                    formKey={item.key}
                    register={register}
                    control={control}
                /> */}

                <MaycurAntdInput
                    key={item.key}
                    formKey={item.key}
                    control={control}
                />

                {/* <MaycurAntdInput2
                    key={item.key}
                    formKey={item.key}
                    control={control}
                /> */}

                {/* <MaycurInput3
                    key={item.key}
                    formKey={item.key}
                    register={register}
                    control={control}
                />   */}
            </form>
        ))
    );
};

export default Demo1;