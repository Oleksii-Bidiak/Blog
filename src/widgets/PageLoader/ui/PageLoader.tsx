import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader'
import cls from './pageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = props => {
    const { className } = props
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
