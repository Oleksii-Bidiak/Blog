import { Popover as HPopover } from '@headlessui/react'
import { ReactNode } from 'react'
import { Additionals, classNames } from 'shared/lib/classNames/classNames'
import { DropDownDirection } from 'shared/types/ui'
import { mapDirectionClass } from '../../styles/const'
import popoverCls from '../../styles/popup.module.scss'
import cls from './popover.module.scss'

interface PopoverProps {
    className?: string
    trigger: ReactNode
    direction?: DropDownDirection
    children?: ReactNode
}

export const Popover = (props: PopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props

    const bodyAdditionals: Additionals = [popoverCls.popup, className]
    const menuClasses: Additionals = [mapDirectionClass[direction]]

    return (
        <HPopover className={classNames(cls.popover, {}, bodyAdditionals)}>
            <HPopover.Button>{trigger}</HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}
