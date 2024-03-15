import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Profile } from '../model/types/profile'
import { Country, CountrySelect } from '@/entities/Country'
import { Currency, CurrencySelect } from '@/entities/Currency'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input/Input'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { Loader } from '@/shared/ui/Loader'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { HStack, VStack } from '@/shared/ui/Stack'
import cls from './profileCard.module.scss'

interface ProfileCardProps {
    className?: string
    data: Profile | undefined
    isLoading: boolean | undefined
    error: string | undefined
    readonly: boolean | undefined
    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        data,
        className,
        error,
        isLoading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
    } = props
    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                justify="center"
                align="center"
                className={classNames(
                    cls.profileCard,
                    { [cls.loading]: isLoading },
                    [className],
                )}>
                <Loader />
            </VStack>
        )
    }

    if (error) {
        return (
            <VStack
                gap="4"
                className={classNames('', {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Виникла помилка')}
                    text={t('Спробуйте перезавантажити сторінку')}
                />
            </VStack>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.profileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data.avatar} alt="avatar" />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t("Ім'я")}
                onChange={onChangeFirstName}
                readOnly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Прізвище')}
                onChange={onChangeLastName}
                readOnly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t('Вік')}
                onChange={onChangeAge}
                readOnly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Місто')}
                onChange={onChangeCity}
                readOnly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t("Ім'я користувача")}
                onChange={onChangeUsername}
                readOnly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Посилання на аватар')}
                onChange={onChangeAvatar}
                readOnly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    )
})
