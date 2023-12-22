import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './loginFrom.module.scss'

interface LoginFromProps {
    className?: string
}

export const LoginFrom: FC<LoginFromProps> = props => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <form className={classNames(cls.loginFrom, {}, [className])}>
            <Input />
            <Input />
            <Button className={cls.loginBtn}>{t('Вхід')}</Button>
        </form>
    )
}
