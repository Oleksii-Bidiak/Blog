import { HTMLAttributes, ReactNode, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...otherProps } = props

    return (
        <div className={classNames(cls.card, {}, [className])} {...otherProps}>
            {children}
        </div>
    )
})
