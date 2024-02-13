import { memo } from 'react'
import { Additionals, classNames } from 'shared/lib/classNames/classNames'
import cls from './text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

type TitleTagType = 'h1' | 'h2' | 'h3'

const mapSizeToTitleTag: Record<TextSize, TitleTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props

    const TitleTag = mapSizeToTitleTag[size]

    const additionas: Additionals = [
        className,
        cls[theme],
        cls[align],
        cls[size],
    ]

    return (
        <div className={classNames(cls.textBlock, {}, additionas)}>
            {title && <TitleTag className={cls.title}>{title}</TitleTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
