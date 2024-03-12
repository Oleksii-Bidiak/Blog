import { ReactNode, memo } from 'react'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './drawer.module.scss'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'
import { Overlay } from '../Overlay/Overlay'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
    const { className, children, isOpen, onClose } = props
    const { theme } = useTheme()

    const mods: Mods = {
        [cls.opened]: isOpen,
    }
    const additionals: Additionals = [className, theme, 'app_drawer']

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, additionals)}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    )
})
