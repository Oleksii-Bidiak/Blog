import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import cls from './sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = props => {
    const { className } = props
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}>
            <nav className={cls.sidebarNav}>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.home}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Головна')}</span>
                </AppLink>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('Про нас')}</span>
                </AppLink>
            </nav>
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
}
