import { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { getAuthUserData } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { HStack } from 'shared/ui/Stack'
import cls from './header.module.scss'
import { NotificationButton } from 'features/NotificationButton'
import { AvatarDropDown } from 'features/AvatarDropDown'

interface HeaderProps {
    className?: string
}

export const Header = memo(({ className }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { t } = useTranslation()
    const authData = useSelector(getAuthUserData)

    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsOpen(true)
    }, [])

    if (authData) {
        return (
            <header className={classNames(cls.header, {}, [className])}>
                <Text
                    theme={TextTheme.INVERTED}
                    className={cls.appName}
                    title="AppName"
                />
                <HStack gap="32">
                    <AppLink
                        to={RoutePath.articles_create}
                        theme={AppLinkTheme.SECONDARY}>
                        {t('Нова стаття')}
                    </AppLink>
                    <HStack gap="16" className={cls.actions}>
                        <NotificationButton />
                        <AvatarDropDown />
                    </HStack>
                </HStack>
            </header>
        )
    }

    return (
        <header className={classNames(cls.header, {}, [className])}>
            <Text
                theme={TextTheme.INVERTED}
                className={cls.appName}
                title="AppName"
            />
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}>
                {t('Вхід')}
            </Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
        </header>
    )
})
