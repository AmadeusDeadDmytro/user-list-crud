import React, {useEffect, useState} from "react";
import {deleteUser, getUsers} from "../redux/actions/usersActions";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Button, Divider, Layout, List, Table, Typography} from "antd";
import {DeleteOutlined, UserAddOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {User, UserListProps} from "./types";


const UserList = (props: UserListProps) => {
    const {users, deleteUser} = props

    useEffect(() => {
        props.getUsers()
    }, [])

    return (
        <Layout>
            <Layout.Content className="site-layout" style={{ width: 700, marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <Divider orientation="left">Users</Divider>
                    <Button
                        type="text"
                        icon={<UserAddOutlined /> }
                        onClick={() => console.log('Delete click')}
                    >
                        <Link to={'/user/create'} style={{color: '#000'}}>
                            Add new user
                        </Link>
                    </Button>
                    <Table
                        dataSource={users.map((el: User) => {
                            el.name = el.first_name + ' ' + el.last_name
                            return el
                        })}
                        columns={[
                            {
                                title: "Name",
                                dataIndex: 'name',
                                key: 'name',
                                render: (text, user) => (
                                    <Link to={`/user/${user.id}`} >{text}</Link>
                                )
                            },
                            {
                                title: "Job",
                                dataIndex: 'job',
                                key: 'job'
                            },
                            {
                                title: "Sex",
                                dataIndex: 'gender',
                                key: 'gender',
                                render: (text) => (
                                    <span style={{textTransform: 'capitalize'}}>{text}</span>
                                )
                            },
                            {
                                title: "Actions",
                                dataIndex: 'actions',
                                render: (text, user) => (
                                    <Button
                                        type="ghost"
                                        icon={<DeleteOutlined />}
                                        size={'small'}
                                        onClick={() => deleteUser(user.id)}
                                    />
                                )
                            }
                        ]}
                    />
                </div>
            </Layout.Content>
        </Layout>
    )
}

const mapStateToProps = (state: any) => ({users: state.users.users})
const mapDispatchToProps = (dispatch: any) => ({
    getUsers: () => dispatch(getUsers()),
    deleteUser: (id: number, callback?: () => void) => dispatch(deleteUser(id, callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)