import { ReactNode, useCallback } from 'react'
import {
    Additionals,
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames'
import { Card, CardTheme } from '../Card/Card'
import cls from './tabs.module.scss'

export interface TabItem<T extends string> {
    value: T
    content: ReactNode
}

interface TabsProps<T extends string> {
    className?: string
    tabs: TabItem<T>[]
    value: T
    onTabClick: (tab: TabItem<T>) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick } = props

    const mods: Mods = {}
    const additionals: Additionals = [className]

    const onTabClickHandle = useCallback(
        (tab: TabItem<T>) => {
            return () => {
                onTabClick(tab)
            }
        },
        [onTabClick],
    )

    return (
        <div className={classNames(cls.tabs, mods, additionals)}>
            {tabs.map(tab => (
                <Card
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    key={tab.value}
                    onClick={onTabClickHandle(tab)}>
                    {tab.content}
                </Card>
            ))}
        </div>
    )
}
