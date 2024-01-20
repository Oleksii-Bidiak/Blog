import { memo, useCallback, useMemo } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../model/types/currency'
import { useTranslation } from 'react-i18next'

interface CurrencySelectProps {
    value?: string
    onChange?: (value: Currency) => void
    readonly?: boolean
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { value, onChange, readonly } = props
    const { t } = useTranslation('profile')

    const options = useMemo(() => {
        return [
            { value: Currency.GRN, content: Currency.GRN },
            { value: Currency.USD, content: Currency.USD },
            { value: Currency.EUR, content: Currency.EUR },
        ]
    }, [])

    const onChangeHandler = useCallback(
        (value: string | undefined) => {
            onChange?.(value as Currency)
        },
        [onChange],
    )

    return (
        <Select
            label={t('Валюта')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
