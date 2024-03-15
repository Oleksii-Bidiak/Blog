import { memo } from 'react'
import {
    Additionals,
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page/Page'

export interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    const mods: Mods = {}
    const additionals: Additionals = [className]

    return (
        <Page className={classNames(cls.articleEditPage, mods, additionals)}>
            {isEdit ? `Редагування статті з ID ${id}` : 'Нова стаття'}
        </Page>
    )
}

export default memo(ArticleEditPage)
