import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { SidebarItemType } from '../../model/types/sidebar'
import { getAuthUserData } from 'entities/User'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation()
    const isAuth = useSelector(getAuthUserData)

    const mods: Record<string, boolean> = {
        [cls.collapsed]: collapsed,
    }

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, mods, [])}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    )
}
