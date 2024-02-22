/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import {
    getAuthUserData,
    isUserAdmin,
    isUserManager,
    userActions,
} from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { HStack } from 'shared/ui/Stack'
import { DropDown } from 'shared/ui/DropDown/DropDown'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import cls from './header.module.scss'

interface HeaderProps {
    className?: string
}

export const Header = memo(({ className }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { t } = useTranslation()
    const authData = useSelector(getAuthUserData)
    const dispatch = useDispatch()
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager
    console.log(isAdmin, isManager)

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
                    <DropDown
                        trigger={
                            <Avatar
                                size={30}
                                alt="avatar"
                                src={authData.avatar}
                            />
                        }
                        items={[
                            ...(isAdminPanelAvailable
                                ? [
                                      {
                                          content: t('Адмінка'),
                                          href: `${RoutePath.admin_panel}`,
                                      },
                                  ]
                                : []),
                            {
                                content: t('Профіль'),
                                href: `${RoutePath.profile}${authData.id}`,
                            },
                            { content: t('Вихід'), onClick: onLogout },
                        ]}
                    />
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
