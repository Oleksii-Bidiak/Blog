import { memo } from 'react'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './articleTextBlokComponent.module.scss'
import { ArticleTextBlok } from 'entities/Article/model/types/article'
import { Text } from 'shared/ui/Text/Text'

interface ArticleTextBlokComponentProps {
    className?: string
    block: ArticleTextBlok
}

export const ArticleTextBlokComponent = memo(
    (props: ArticleTextBlokComponentProps) => {
        const { className, block } = props
        const { t } = useTranslation()

        const mods: Mods = {}
        const additionals: Additionals = [className]

        return (
            <div
                className={classNames(
                    cls.articleTextBlokComponent,
                    mods,
                    additionals,
                )}>
                {block.title && (
                    <Text title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map(paragraph => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        )
    },
)
