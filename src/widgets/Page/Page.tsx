import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './page.module.scss'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import {
    ScrollSaveSchema,
    getScrollSaveByPath,
    scrollSaveActions,
} from '@/features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { useSelector } from 'react-redux'
import { StateSchema } from '@/app/providers/StoreProvider'
import { useTrotlle } from '@/shared/lib/hooks/useTrotlle'

interface PageProps {
    className?: string
    children?: ReactNode
    onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector(
        (state: StateSchema & ScrollSaveSchema) =>
            getScrollSaveByPath(state, pathname),
    )

    useInfiniteScroll({
        callback: onScrollEnd,
        wrapperRef,
        triggerRef,
    })

    const onScrollHandler = useTrotlle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollSaveActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        )
    }, 500)

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={onScrollHandler}>
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </section>
    )
})
