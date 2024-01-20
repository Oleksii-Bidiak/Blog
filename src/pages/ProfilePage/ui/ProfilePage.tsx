import { FC, ReactNode, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadOnly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

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

    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)
    const readonly = useSelector(getProfileReadOnly)

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value }))
        },
        [dispatch],
    )

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value }))
        },
        [dispatch],
    )

    const onChangeAge = useCallback(
        (value?: string) => {
            const pattern = /^\d+$/
            dispatch(
                profileActions.updateProfile({
                    age:
                        value === undefined || !pattern.test(value)
                            ? 0
                            : +value,
                }),
            )
        },
        [dispatch],
    )

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value }))
        },
        [dispatch],
    )

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value }))
        },
        [dispatch],
    )

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value }))
        },
        [dispatch],
    )

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }))
        },
        [dispatch],
    )

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }))
        },
        [dispatch],
    )

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
