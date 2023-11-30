import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = props => {
    const { children, className, theme, type, ...otherProps } = props
    return (
        <button
            type={type || 'button'}
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </button>
    )
}
