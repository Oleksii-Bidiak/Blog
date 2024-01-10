import { memo, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const { t } = useTranslation()

    const itemsList = useMemo(
        () =>
            SidebarItemsList.map(item => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed],
    )

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}>
            <nav className={cls.sidebarNav}>{itemsList}</nav>
            <Button
                className={cls.collapsedBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                square
                theme={ButtonTheme.BACKGROUNG_INVERTED}
                size={ButtonSize.L}>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    )
})
