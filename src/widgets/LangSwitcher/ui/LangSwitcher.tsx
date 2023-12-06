import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
    const { className } = props

    const { t, i18n } = useTranslation()
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggle}>
            {t('Мова')}
        </Button>
    )
}
