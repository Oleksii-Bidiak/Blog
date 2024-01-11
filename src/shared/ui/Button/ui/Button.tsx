import { ButtonHTMLAttributes, memo, ReactNode } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUNG = 'background',
    BACKGROUNG_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        theme = ButtonTheme.CLEAR,
        type,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    }

    return (
        <button
            type={type || 'button'}
            className={classNames(cls.button, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
            disabled={disabled}
            {...otherProps}>
            {children}
        </button>
    )
})
