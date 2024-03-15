import { CSSProperties, memo, useMemo } from 'react'
import {
    Additionals,
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames'
import cls from './sceleton.module.scss'

interface SceletonProps {
    className?: string
    height: number | string
    width: number | string
    borderRadius?: string
}

export const Sceleton = memo((props: SceletonProps) => {
    const { className, height, width, borderRadius } = props

    const mods: Mods = {}
    const additionals: Additionals = [className]

    const styles = useMemo<CSSProperties>(() => {
        return {
            height,
            width,
            borderRadius,
        }
    }, [borderRadius, height, width])

    return (
        <div
            style={styles}
            className={classNames(cls.sceleton, mods, additionals)}
        />
    )
})
