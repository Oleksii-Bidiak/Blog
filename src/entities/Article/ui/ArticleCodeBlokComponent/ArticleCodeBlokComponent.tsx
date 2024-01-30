import { memo } from 'react'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { ArticleCodeBlok } from 'entities/Article/model/types/article'
import { Code } from 'shared/ui/Code/Code'
import cls from './articleCodeBlokComponent.module.scss'

interface ArticleCodeBlokComponentProps {
    className?: string
    block: ArticleCodeBlok
}

export const ArticleCodeBlokComponent = memo(
    (props: ArticleCodeBlokComponentProps) => {
        const { className, block } = props

        const mods: Mods = {}
        const additionals: Additionals = [className]

        return (
            <div
                className={classNames(
                    cls.articleCodeBlokComponent,
                    mods,
                    additionals,
                )}>
                <Code text={block.code} />
            </div>
        )
    },
)
