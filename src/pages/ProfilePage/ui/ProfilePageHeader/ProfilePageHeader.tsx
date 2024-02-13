import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getAuthUserData } from 'entities/User'
import {
    getProfileData,
    getProfileReadOnly,
    profileActions,
    updateProfileData,
} from 'entities/Profile'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { HStack } from 'shared/ui/Stack/HStack/HStack'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

    const readOnly = useSelector(getProfileReadOnly)
    const authData = useSelector(getAuthUserData)
    const profileData = useSelector(getProfileData)

    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCanselEdit = useCallback(() => {
        dispatch(profileActions.canselEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <HStack
            max
            justify="between"
            className={classNames('', {}, [className])}>
            <Text title={t('Профіль')} />
            {canEdit && (
                <HStack gap="16">
                    {readOnly ? (
                        <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                            {t('Редагувати')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}>
                                {t('Зберегти')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCanselEdit}>
                                {t('Відміна')}
                            </Button>
                        </>
                    )}
                </HStack>
            )}
        </HStack>
    )
})
