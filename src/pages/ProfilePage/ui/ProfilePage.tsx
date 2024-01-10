import { profileReducer } from 'entities/Profile'
import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'

const redusers: ReducersList = {
    profile: profileReducer,
}

interface ProfilePageProps {
    className?: string
    children?: ReactNode
}

const ProfilePage: FC<ProfilePageProps> = props => {
    const { className, children } = props
    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>{children}</div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
