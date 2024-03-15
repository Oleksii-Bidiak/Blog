import { memo } from 'react'
import { Additionals, classNames } from '@/shared/lib/classNames/classNames'
import cls from './overlay.module.scss'

interface OverlayProps {
    className?: string
    onClick?: () => void
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props

    const additionals: Additionals = [className]

    return (
        <div
            role="presentation"
            onClick={onClick}
            onKeyDown={onClick}
            className={classNames(cls.overlay, {}, additionals)}
        />
    )
})
