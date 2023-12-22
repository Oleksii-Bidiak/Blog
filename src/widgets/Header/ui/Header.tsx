/* eslint-disable i18next/no-literal-string */
import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Modal } from 'shared/ui/Modal'
import cls from './header.module.scss'

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { t } = useTranslation()

    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsOpen(true)
    }, [])

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
