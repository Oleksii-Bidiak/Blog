import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './loginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = props => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus placeholder={t('Введіть username')} />
            <Input placeholder={t('Введіть пароль')} />
            <Button className={cls.loginBtn}>{t('Вхід')}</Button>
        </form>
    )
}
