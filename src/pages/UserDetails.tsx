import React, {useEffect} from "react";
import {Button, Divider, Layout, Space, Table, Typography} from "antd";
import {User, UserDetailProps} from "./types";
import {Link, useHistory, useParams} from "react-router-dom";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {clearUser, deleteUser, getUser, getUsers} from "../redux/actions/usersActions";
import {connect} from "react-redux";
import {CLEAR_USER} from "../redux/types";
import {LayoutComponent} from "../components";

const ACTIVE_FIELDS = ['first_name', 'last_name', 'job', 'birth_date', 'gender', 'biography']

const UserDetails = (props: UserDetailProps) => {
    const { id } = useParams<{id: string}>()
    const { user, getUser, clearUser, deleteUser } = props
    const history = useHistory()

    useEffect(() => {
        getUser(id)

        return clearUser
    }, [])

    const formatText = (text: string) => text.split('_').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')

    if (!user) return null

    return (
        <LayoutComponent text={`Hello, ${user?.first_name || ''}`}>
            <Space direction={"vertical"}>
                {Object.keys(user).filter(el => ACTIVE_FIELDS.includes(el)).map((el) => {
                    return (
                        <Space direction={"horizontal"}>
                            <Typography.Text strong> {formatText(el)}: </Typography.Text>
                            <Typography.Text> {user[el]} </Typography.Text>
                        </Space>
                    )
                })}
                <Space direction={"horizontal"}>
                    <Typography.Text strong> Status: </Typography.Text>
                    <Typography.Text> {user.is_active ? 'Enabled' : 'Disabled'} </Typography.Text>
                </Space>
                <Space direction={"horizontal"}>
                    <Button
                        type="default"
                        icon={<EditOutlined /> }
                        onClick={() => console.log('Edit click')}
                    >
                        Edit
                    </Button>
                    <Button
                        type="default"
                        icon={<DeleteOutlined /> }
                        danger
                        ghost
                        onClick={() => deleteUser(user.id, () => history.replace('/users'))}
                    >
                        Delete
                    </Button>
                </Space>
            </Space>
        </LayoutComponent>
    )
}

const mapStateToProps = (state: any) => ({user: state.users.user})
const mapDispatchToProps = (dispatch: any) => ({
    getUser: (id: string) => dispatch(getUser(id)),
    deleteUser: (id: number, callback?: () => void) => dispatch(deleteUser(id, callback)),
    clearUser: () => dispatch(clearUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)