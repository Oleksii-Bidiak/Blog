import { useTheme } from '@/app/providers/ThemeProvider'
import {
    FC,
    MutableRefObject,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { Portal } from '../../Portal/Portal'
import cls from './modal.module.scss'
import { Overlay } from '../../Overlay/Overlay'
import { useModal } from '@/shared/lib/hooks/useModal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal: FC<ModalProps> = props => {
    const { className, children, isOpen, onClose, lazy } = props
    const { theme } = useTheme()

    const {
        isClosing,
        isMounting,
        close: closeHandler,
    } = useModal({ animationDelay: 300, isOpen, onClose })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    if (lazy && !isMounting) {
        return null
    }

    return (
        <Portal>
            <div
                className={classNames(cls.modal, mods, [
                    className,
                    theme,
                    'app_modal',
                ])}>
                <Overlay onClick={closeHandler} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    )
}
