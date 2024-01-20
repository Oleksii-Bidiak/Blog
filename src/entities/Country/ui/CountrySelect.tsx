import { memo, useCallback, useMemo } from 'react'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { Country } from '../model/types/country'

interface CountrySelectProps {
    value?: string
    onChange?: (value: Country) => void
    readonly?: boolean
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { value, onChange, readonly } = props
    const { t } = useTranslation('profile')

    const options = useMemo<SelectOption[]>(() => {
        return [
            { value: Country.Ukraine, content: Country.Ukraine },
            { value: Country.France, content: Country.France },
            { value: Country.Germany, content: Country.Germany },
            { value: Country.Italy, content: Country.Italy },
            { value: Country.Spain, content: Country.Spain },
        ]
    }, [])

    const onChangeHandler = useCallback(
        (value: string | undefined) => {
            onChange?.(value as Country)
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
