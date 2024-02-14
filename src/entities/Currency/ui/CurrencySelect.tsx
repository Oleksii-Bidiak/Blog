import { memo, useCallback, useMemo } from 'react'
import { Currency } from '../model/types/currency'
import { useTranslation } from 'react-i18next'
import { ListBox, listBoxItem } from 'shared/ui/ListBox/ListBox'

interface CurrencySelectProps {
    value?: string
    onChange?: (value: Currency) => void
    readonly?: boolean
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { value, onChange, readonly } = props
    const { t } = useTranslation('profile')

    const options = useMemo<listBoxItem<Currency>[]>(() => {
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
        <ListBox
            value={value}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            defaultValue={t('Валюта')}
            direction="top left"
            label={t('Валюта')}
        />
    )
})
