import { memo } from 'react'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { ArticleView } from '../../model/const/const'
import { Card } from 'shared/ui/Card/Card'
import { Sceleton } from 'shared/ui/Sceleton/Sceleton'
import cls from './articleListItem.module.scss'

interface ArticleListItemSceletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSceleton = memo(
    (props: ArticleListItemSceletonProps) => {
        const { className, view } = props

        const mods: Mods = {}
        const additionals: Additionals = [className, cls[view]]

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(
                        cls.articleListItem,
                        mods,
                        additionals,
                    )}>
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Sceleton
                                height={30}
                                width={30}
                                borderRadius="50%"
                            />
                            <Sceleton
                                height={16}
                                width={150}
                                className={cls.username}
                            />
                            <Sceleton
                                height={16}
                                width={150}
                                className={cls.data}
                            />
                        </div>
                        <Sceleton
                            width={250}
                            height={24}
                            className={cls.title}
                        />
                        <Sceleton
                            height={200}
                            width="100%"
                            className={cls.img}
                        />
                        <div className={cls.footer}>
                            <Sceleton height={36} width={200} />
                        </div>
                    </Card>
                </div>
            )
        }

        return (
            <div className={classNames(cls.articleListItem, mods, additionals)}>
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <Sceleton height={200} width={200} />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Sceleton width={130} height={16} />
                    </div>
                    <Sceleton width={150} height={16} className={cls.title} />
                </Card>
            </div>
        )
    },
)
