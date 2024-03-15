import { memo, useMemo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { LangSwitcher } from '@/widgets/LangSwitcher'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems'
import cls from './sidebar.module.scss'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const sidebarItemsList = useSelector(getSidebarItems)

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map(item => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList],
    )

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}>
            <VStack role="navigation" gap="8" className={cls.sidebarNav}>
                {itemsList}
            </VStack>
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
        </aside>
    )
})
