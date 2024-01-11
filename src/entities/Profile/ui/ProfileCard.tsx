import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { getProfileData } from '../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading'
import cls from './profileCard.module.scss'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = props => {
    const { t } = useTranslation('profile')
    const { className } = props
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профіль')} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редагувати')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={t("Ваше ім'я")} />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше прізвище')}
                />
            </div>
        </div>
    )
}
