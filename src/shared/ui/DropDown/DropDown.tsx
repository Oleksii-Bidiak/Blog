import { Fragment, ReactNode, memo, useCallback } from 'react'
import { Menu } from '@headlessui/react'
import { Additionals, classNames } from 'shared/lib/classNames/classNames'
import { DropDownDirection } from 'shared/types/ui'
import cls from './dropDown.module.scss'
import { AppLink } from '../AppLink'

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

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
}

export const DropDown = memo((props: DropDownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props

    const menuClasses: Additionals = [mapDirectionClass[direction]]

    const onClickHandler = useCallback((item: DropDownItem) => {
        item.onClick?.()
    }, [])

    return (
        <Menu as="nav" className={classNames(cls.dropDown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <nav className={classNames(cls.menu, {}, menuClasses)}>
                <Menu.Items className={classNames(cls.items, {}, [])}>
                    {items.map(item => {
                        const content = ({ active }: { active: boolean }) => (
                            <button
                                onClick={item.onClick}
                                disabled={item.disabled}
                                className={classNames(
                                    cls.item,
                                    { [cls.active]: active },
                                    [],
                                )}>
                                {item.content}
                            </button>
                        )

                        if (item.href) {
                            return (
                                <Menu.Item
                                    disabled={item.disabled}
                                    as={AppLink}
                                    to={item.href}
                                    onClick={item.onClick}>
                                    {content}
                                </Menu.Item>
                            )
                        }
                        return (
                            <Menu.Item disabled={item.disabled} as={Fragment}>
                                {content}
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </nav>
        </Menu>
    )
})
