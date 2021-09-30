import React, {useState} from "react";
import {LayoutComponent} from "../components";
import {Button, DatePicker, Form, Input, Select, Switch} from "antd";
import {clearUser, createUser, getUser} from "../redux/actions/usersActions";
import {connect} from "react-redux";
import {User, UserCreateProps} from "./types";
import { useHistory } from "react-router-dom";

const INITIAL_DATA = {
    gender: 'male',
    is_active: true
}

const UserCreate = (props: UserCreateProps) => {
    const [form] = Form.useForm();
    const history = useHistory()
    const {createUser} = props

    const onFinish = (values: any) => {
        values.birth_date = new Date(values.birth_date).toISOString().slice(0, 10)

        createUser(values, () => history.push('/users'))
    };

    return (
        <LayoutComponent text={`Creating a new user`}>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={INITIAL_DATA}
                onFinish={onFinish}
                form={form}
            >
                <Form.Item label="First Name" rules={[{required: true, min: 3, max: 256}]} name={"first_name"}>
                    <Input />
                </Form.Item>
                <Form.Item label="Last Name" rules={[{required: true, min: 3, max: 256}]} name={"last_name"}>
                    <Input />
                </Form.Item>
                <Form.Item label="Gender" rules={[{required: true}]} name={"gender"}>
                    <Select>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Birth Date" rules={[{required: true}]} name={"birth_date"}>
                    <DatePicker format={'YYYY-MM-DD'}/>
                </Form.Item>
                <Form.Item label="Job" rules={[{required: true, max: 256}]} name={"job"}>
                    <Input />
                </Form.Item>
                <Form.Item label="Bio" name={"biography"} rules={[{required: true, max: 1024}]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="Is Active" valuePropName="checked" name={"is_active"}>
                    <Switch />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </LayoutComponent>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    createUser: (user: User, callback: () => void) => dispatch(createUser(user, callback))
})

export default connect(null, mapDispatchToProps)(UserCreate)