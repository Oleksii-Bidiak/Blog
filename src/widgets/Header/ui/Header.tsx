/* eslint-disable i18next/no-literal-string */
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

    const onToggleModal = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    return (
        <header className={classNames(cls.header, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}>
                {t('Вхід')}
            </Button>
            <Modal isOpen={isOpen} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad
                possimus autem! Error fugiat officia ab iure! Nobis unde fugiat
                in cupiditate explicabo nemo autem, beatae ducimus, iste, soluta
                pariatur!
            </Modal>
        </header>
    )
}
