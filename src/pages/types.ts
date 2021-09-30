import {ReactNode} from "react";

enum GENDERS {
    MALE = 'male',
    FEMALE = 'female'
}

export type User = {
    id: number,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender: GENDERS,
    job: string,
    biography: string,
    is_active: boolean,
    name?: string
}

export type DynamicUser = {
    [key: string]: string
}

export interface UserListProps {
    getUsers: () => void,
    deleteUser: (id: number, callback?: () => void) => void,
    users: User[]
}

export interface UserDetailProps {
    getUser: (id: string) => void,
    deleteUser: (id: number, callback?: () => void) => void,
    clearUser: () => void;
    user: any,
}

export interface LayoutComponentProps {
    text: string,
    children: ReactNode,
}

export interface UserCreateProps {
    createUser: (user: User, callback: () => void) => void
}