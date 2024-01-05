import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
    const { className, text, title, theme } = props
    return (
        <div className={classNames(cls.textBlock, {}, [className, theme])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
