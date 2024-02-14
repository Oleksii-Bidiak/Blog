import { Fragment, ReactNode } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import { Additionals, classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button'
import cls from './listBox.module.scss'
import { HStack } from '../Stack'

type DropDownDirection = 'top' | 'bottom'

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
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
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
        direction = 'bottom',
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
