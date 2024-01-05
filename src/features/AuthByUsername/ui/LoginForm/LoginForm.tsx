import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './loginForm.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props
    const { t } = useTranslation()

    const dispatch = useDispatch()

    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback(
        value => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        value => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизіції')} />
            {error && (
                <Text
                    text={t('Неправильний логін або пароль')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                autofocus
                placeholder={t('Введіть username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Введіть пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}>
                {t('Вхід')}
            </Button>
        </form>
    )
})
