import { CSSProperties, memo, useMemo } from 'react'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, alt, size } = props

    const styles = useMemo<CSSProperties>(() => {
        return {
            height: size || 100,
            width: size || 100,
        }
    }, [size])

    const mods: Mods = {}
    const additionals: Additionals = [className]

    return (
        <img
            className={classNames(cls.avatar, mods, additionals)}
            style={styles}
            src={src}
            alt={alt}
        />
    )
})
