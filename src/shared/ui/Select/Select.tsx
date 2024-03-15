import { ChangeEvent, useMemo } from 'react'
import {
    Additionals,
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames'
import cls from './select.module.scss'

export interface SelectOption<T> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[]
    readonly?: boolean
    value?: T
    onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, readonly, onChange } = props

    const mods: Mods = {}
    const additionals: Additionals = [className]

    const optionsList = useMemo(() => {
        return options?.map(opt => (
            <option className={cls.option} key={opt.value} value={opt.value}>
                {opt.content}
            </option>
        ))
    }, [options])

    const onchangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    return (
        <div className={classNames(cls.customSelect, mods, additionals)}>
            {label && <span>{`${label}>`}</span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onchangeHandler}>
                {optionsList}
            </select>
        </div>
    )
}
