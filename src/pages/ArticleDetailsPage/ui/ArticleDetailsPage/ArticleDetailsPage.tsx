import { ArticleDetails } from 'entities/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()

    const mods: Mods = {}
    const additionals: Additionals = [className]

    if (!id) {
        return (
            <div className={classNames('', mods, additionals)}>
                {t('Статтю не знайдено')}
            </div>
        )
    }

    return (
        <div className={classNames('', mods, additionals)}>
            <ArticleDetails id={id} />
        </div>
    )
}

export default memo(ArticleDetailsPage)
