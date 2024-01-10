import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import './loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader = memo((props: LoaderProps) => {
    const { className } = props

    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    )
})
