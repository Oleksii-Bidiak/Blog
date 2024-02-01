import { createSelector } from '@reduxjs/toolkit'
import { getAuthUserData } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'
import { SidebarItemType } from '../../types/sidebar'

export const getSidebarItems = createSelector(getAuthUserData, userData => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.home,
            text: 'Головна',
            Icon: MainIcon,
        },
        {
            path: RoutePath.about,
            text: 'Про нас',
            Icon: AboutIcon,
        },
    ]

    if (userData) {
        sidebarItemsList.push(
            {
                path: `${RoutePath.profile}${userData.id}`,
                text: 'Профіль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'Cтатті',
                Icon: ArticleIcon,
                authOnly: true,
            },
        )
    }

    return sidebarItemsList
})
