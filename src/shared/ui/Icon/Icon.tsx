import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './icon.module.scss'

interface IconProps {
    className?: string
    Svg: React.FunctionComponent<React.SVGProps<SVGElement>>
}

export const Icon = memo(({ className, Svg }: IconProps) => {
    return <Svg className={classNames(cls.icon, {}, [className])} />
})
