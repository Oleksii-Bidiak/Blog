import { MutableRefObject, ReactNode, memo, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'

interface PageProps {
    className?: string
    children?: ReactNode
    onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        callback: onScrollEnd,
        wrapperRef,
        triggerRef,
    })

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    )
})
