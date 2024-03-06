import { Fragment, ReactNode } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import { Button, ButtonTheme } from '../../../Button'
import { HStack } from '../../../Stack'
import { Additionals, classNames } from 'shared/lib/classNames/classNames'
import { DropDownDirection } from 'shared/types/ui'
import popoverCls from '../../styles/popup.module.scss'
import { mapDirectionClass } from '../../styles/const'

export interface listBoxItem<T extends string> {
    value: T
    content: ReactNode
    disablet?: boolean
}

interface listBoxProps<T extends string> {
    className?: string
    items?: listBoxItem<T>[]
    value?: T
    defaultValue?: T
    onChange: (value: T) => void
    readonly?: boolean
    direction?: DropDownDirection
    label?: string
}

export const ListBox = <T extends string>(props: listBoxProps<T>) => {
    const {
        className,
        items,
        value,
        onChange,
        defaultValue,
        readonly,
        label,
        direction = 'bottom left',
    } = props

    const adiitionals: Additionals = [className]
    const optionClasses: Additionals = [mapDirectionClass[direction]]

    return (
        <HStack>
            {label && <span>{`${label}>`}</span>}
            <HListbox
                disabled={readonly}
                as="div"
                className={classNames(popoverCls.popup, {}, adiitionals)}
                value={value}
                onChange={onChange}>
                <HListbox.Button>
                    <Button theme={ButtonTheme.OUTLINE} disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(popoverCls.items, {}, optionClasses)}>
                    {items?.map(item => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disablet}
                            as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        popoverCls.item,
                                        {
                                            [popoverCls.active]: active,
                                            [popoverCls.disabled]:
                                                item.disablet,
                                        },
                                        [],
                                    )}>
                                    <HStack>
                                        {selected && <span>{'>'}</span>}
                                        {item.content}
                                    </HStack>
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
}
