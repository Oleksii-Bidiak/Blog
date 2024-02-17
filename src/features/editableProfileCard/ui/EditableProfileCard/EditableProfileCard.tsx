import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import { getValidateProfileErrors } from '../../model/selectors/getValidateProfileErrors/getValidateProfileErrors'
import { ValidateProfileErrors } from '../../model/types/editableProfileCardSchema'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { ProfileCard } from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { VStack } from 'shared/ui/Stack'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'

const redusers: ReducersList = {
    profile: profileReducer,
}

interface EditableProfileCardProps {
    className?: string
    id: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)
    const readonly = useSelector(getProfileReadOnly)
    const validateErrors = useSelector(getValidateProfileErrors)

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

    const ValidateProfileTranslates = useMemo(() => {
        const errors: Record<ValidateProfileErrors, any> = {
            [ValidateProfileErrors.SERVER_ERROR]: t('Помилка при збереженні'),
            [ValidateProfileErrors.INNCORECT_AGE]: t(
                'Некоректний вік (введіть число)',
            ),
            [ValidateProfileErrors.INNCORECT_USER_DATA]: t(
                "Ім'я та прізвище обов'язкові",
            ),
            [ValidateProfileErrors.NO_DATA]: t('Дані не вказані'),
        }

        return errors
    }, [t])

    const validateErrorsList = useMemo(() => {
        return validateErrors?.map(err => (
            <Text
                key={err}
                theme={TextTheme.ERROR}
                text={ValidateProfileTranslates[err]}
                data-testid="EditableProfileCard.Error"
            />
        ))
    }, [ValidateProfileTranslates, validateErrors])

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

    return (
        <DynamicModuleLoader reducers={redusers}>
            <VStack
                max
                align="start"
                className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length && validateErrorsList}
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
            </VStack>
        </DynamicModuleLoader>
    )
})
