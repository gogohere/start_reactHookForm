import { useForm } from 'react-hook-form';
import { Input } from 'maycur-antd';
import { connect } from 'react-redux';
import nameStore from '../../store/demo6.js';


const Demo6 = (props) => {
    const { register, handleSubmit } = useForm();
    const { dispatch } = props
    // 把数据提交到Redux仓库
    const onSubmit = data => {
        dispatch({
            type:'first',
            payload: data.firstName,
        });
        dispatch({
            type:'last',
            payload: data.firstName,
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('firstName')} defaultValue={props.firstName} />
            <Input {...register('lastName')} defaultValue={props.lastName} />
            <input type="submit" />
        </form>
    );
};

export default connect(({ firstName, lastName })=>({ firstName, lastName }), nameStore)(Demo6);