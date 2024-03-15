import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
    getAuthUserData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { DropDown } from '@/shared/ui/Popups'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

export const AvatarDropDown = memo(() => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const authData = useSelector(getAuthUserData)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    if (!authData) {
        return null
    }

    return (
        <DropDown
            trigger={<Avatar size={30} alt="avatar" src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Адмінка'),
                              href: `${RoutePath.admin_panel}`,
                          },
                      ]
                    : []),
                {
                    content: t('Профіль'),
                    href: `${RoutePath.profile}${authData.id}`,
                },
                { content: t('Вихід'), onClick: onLogout },
            ]}
        />
    )
})
