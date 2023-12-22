import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './input.module.scss'

type HTMLInput = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>

interface InputProps extends HTMLInput {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, type = 'text', ...otherProps } = props

	 const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	 }

    return (
        <div className={classNames(cls.input, {}, [className])}>
            <input type={type} value={value} onChange={onChangeHandler} />
        </div>
    )
})
