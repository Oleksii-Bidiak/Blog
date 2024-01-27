import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const mods: Mods = {}
    const additionals: Additionals = [className]
    return (
        <div className={classNames('', mods, additionals)}>
            {t('ArticlesPage')}
        </div>
    )
}

export default memo(ArticlesPage)
