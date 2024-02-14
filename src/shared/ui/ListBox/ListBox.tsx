import { Fragment, ReactNode } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import { Button, ButtonTheme } from '../Button'
import { HStack } from '../Stack'
import { Additionals, classNames } from 'shared/lib/classNames/classNames'
import { DropDownDirection } from 'shared/types/ui'
import cls from './listBox.module.scss'

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

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
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
                className={classNames(cls.listBox, {}, adiitionals)}
                value={value}
                onChange={onChange}>
                <HListbox.Button>
                    <Button theme={ButtonTheme.OUTLINE} disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, optionClasses)}>
                    {items?.map(item => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disablet}
                            as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.option,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disablet,
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
