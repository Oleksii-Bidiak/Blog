import { ReactNode, memo } from 'react'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from 'shared/lib/hooks/useModal'
import cls from './drawer.module.scss'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy } = props
    const { theme } = useTheme()

    const {
        isClosing,
        isMounting,
        close: closeHandler,
    } = useModal({ animationDelay: 200, isOpen, onClose })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    const additionals: Additionals = [className, theme, 'app_drawer']

    if (lazy && !isMounting) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, additionals)}>
                <Overlay onClick={closeHandler} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    )
})
