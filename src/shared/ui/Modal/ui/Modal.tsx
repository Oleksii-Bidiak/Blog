/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTheme } from 'app/providers/ThemeProvider'
import {
    FC,
    MouseEvent,
    MutableRefObject,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Portal } from '../../Portal/Portal'
import cls from './modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = props => {
    const { className, children, isOpen, onClose, lazy } = props

    const { theme } = useTheme()

    const [isClosing, setIsClosing] = useState<boolean>(false)
    const [isMounting, setIsMounting] = useState(false)
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    useEffect(() => {
        if (isOpen) {
            setIsMounting(true)
        }
    }, [isOpen])

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler()
            }
        },
        [closeHandler],
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    const onContetntClick = (e: MouseEvent) => {
        e.stopPropagation()
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
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContetntClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
