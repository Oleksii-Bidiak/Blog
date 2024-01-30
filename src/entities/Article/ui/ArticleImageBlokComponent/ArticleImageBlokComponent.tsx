import { memo } from 'react'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './articleImageBlokComponent.module.scss'
import { ArticleImageBlok } from '../../model/types/article'
import { Text, TextAlign } from 'shared/ui/Text/Text'

interface ArticleImageBlokComponentProps {
    className?: string
    block: ArticleImageBlok
}

export const ArticleImageBlokComponent = memo(
    (props: ArticleImageBlokComponentProps) => {
        const { className, block } = props
        const { t } = useTranslation()

        const mods: Mods = {}
        const additionals: Additionals = [className]

        return (
            <div
                className={classNames(
                    cls.articleImageBlokComponent,
                    mods,
                    additionals,
                )}>
                <img
                    className={cls.image}
                    src={block.src}
                    alt={block.title ? block.title : 'image'}
                />
                {block.title && (
                    <Text title={block.title} align={TextAlign.CENTER} />
                )}
            </div>
        )
    },
)
