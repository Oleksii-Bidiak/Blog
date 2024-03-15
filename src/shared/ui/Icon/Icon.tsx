import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './icon.module.scss'

interface IconProps {
    className?: string
    Svg: React.FunctionComponent<React.SVGProps<SVGElement>>
    inverted?: boolean
}

export const Icon = memo(({ className, Svg, inverted }: IconProps) => {
    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.icon, {}, [
                className,
            ])}
        />
    )
})
