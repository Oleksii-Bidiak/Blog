/* eslint-disable i18next/no-literal-string */
import { getAuthUserData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import cls from './header.module.scss'

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { t } = useTranslation()
    const authData = useSelector(getAuthUserData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <header className={classNames(cls.header, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}>
                    {t('Вихід')}
                </Button>
            </header>
        )
    }

    return (
        <header className={classNames(cls.header, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}>
                {t('Вхід')}
            </Button>
            <LoginModal isOpen={isOpen} onClose={onCloseModal} />
        </header>
    )
}
