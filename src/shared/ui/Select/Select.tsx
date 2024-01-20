import { ChangeEvent, memo, useMemo } from 'react'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './select.module.scss'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options: SelectOption[]
    value?: string
    readonly?: boolean
    onChange?: (value?: string) => void
}

export const Select = memo((props: SelectProps) => {
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
        onChange?.(e.target.value)
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
})
