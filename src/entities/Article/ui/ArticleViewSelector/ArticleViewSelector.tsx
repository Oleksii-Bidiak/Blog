import { memo } from 'react'
import { ArticleView } from '../../model/types/article'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { Button } from 'shared/ui/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './articleViewSelector.module.scss'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props

    const onClickHandler = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div>
            {viewTypes.map(viewType => (
                <Button onClick={onClickHandler(viewType.view)}>
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(
                            '',
                            { [cls.notSelected]: viewType.view !== view },
                            [],
                        )}
                    />
                </Button>
            ))}
        </div>
    )
})
