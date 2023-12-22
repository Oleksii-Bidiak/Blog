import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

function HomePage() {
    const { t } = useTranslation()
    const [value, setValue] = useState('')
    const onChange = (val: string) => {
        setValue(val)
    }
    return (
        <div>
            {t('Головна')}
            <Input value={value} onChange={onChange} />
        </div>
    )
}

export default HomePage
