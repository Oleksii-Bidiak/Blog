import { Fragment, ReactNode, memo } from 'react'
import { Menu } from '@headlessui/react'
import { Additionals, classNames } from 'shared/lib/classNames/classNames'
import { DropDownDirection } from 'shared/types/ui'
import { AppLink } from '../../../AppLink'
import { mapDirectionClass } from '../../styles/const'
import cls from './dropDown.module.scss'
import popoverCls from '../../styles/popup.module.scss'

interface DropDownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropDownProps {
    className?: string
    items: DropDownItem[]
    trigger: ReactNode
    direction?: DropDownDirection
}

export const DropDown = memo((props: DropDownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props

    const menuClasses: Additionals = [mapDirectionClass[direction]]

    return (
        <Menu
            as="nav"
            className={classNames(popoverCls.popup, {}, [className])}>
            <Menu.Button>{trigger}</Menu.Button>
            <Menu.Items
                as="ul"
                className={classNames(popoverCls.items, {}, menuClasses)}>
                {items.map((item, index) => {
                    return (
                        <Menu.Item
                            as={AppLink}
                            to={item.href ? item.href : '#'}
                            key={index}
                            disabled={item.disabled}
                            onClick={item.onClick}>
                            {({ active }) => (
                                <div
                                    className={classNames(
                                        cls.item,
                                        { [popoverCls.active]: active },
                                        [],
                                    )}>
                                    {item.content}
                                </div>
                                //   <button
                                //       onClick={item.onClick}
                                //       disabled={item.disabled}
                                //       className={classNames(
                                //           '',
                                //           { [popoverCls.active]: active },
                                //           [],
                                //       )}>
                                //       {item.content}
                                //   </button>
                            )}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
})
