import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { FC, ReactNode, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const redusers: ReducersList = {
    profile: profileReducer,
}

interface ProfilePageProps {
    className?: string
    children?: ReactNode
}

const ProfilePage: FC<ProfilePageProps> = props => {
    const { className, children } = props
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
