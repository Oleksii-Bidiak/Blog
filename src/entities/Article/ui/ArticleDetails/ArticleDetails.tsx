import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { ArticleBlockType, ArticleBlok } from '../../model/types/article'
import { ArticleCodeBlokComponent } from '../ArticleCodeBlokComponent/ArticleCodeBlokComponent'
import { ArticleImageBlokComponent } from '../ArticleImageBlokComponent/ArticleImageBlokComponent'
import { ArticleTextBlokComponent } from '../ArticleTextBlokComponent/ArticleTextBlokComponent'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { Sceleton } from 'shared/ui/Sceleton/Sceleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import cls from './articleDetails.module.scss'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)
    const article = useSelector(getArticleDetailsData)

    const renderBlock = useCallback((block: ArticleBlok) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlokComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                )
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlokComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                )
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlokComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                )
            default:
                return null
        }
    }, [])

    const mods: Mods = {}
    const additionals: Additionals = [className]

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    let content

    if (isLoading) {
        content = (
            <div className={cls.loading}>
                <Sceleton
                    className={cls.avatar}
                    height={200}
                    width={200}
                    borderRadius="50%"
                />
                <Sceleton height={32} width={300} />
                <Sceleton height={24} width={600} />
                <Sceleton height={200} width="100%" />
                <Sceleton height={200} width="100%" />
            </div>
        )
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('Виникла помилка при завантаженні статті')}
            />
        )
    } else {
        content = (
            <>
                <div className={cls.header}>
                    <div className={cls.avatar}>
                        <Avatar
                            size={200}
                            src={article?.img}
                            alt={article?.title}
                        />
                    </div>
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <div className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </div>
                    <div className={cls.articleInfo}>
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </div>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetails, mods, additionals)}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
