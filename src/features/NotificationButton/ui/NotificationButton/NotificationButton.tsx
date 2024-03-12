import { useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { NotificationList } from 'entities/Notifications'
import { Button } from 'shared/ui/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import Notifications from 'shared/assets/icons/notification-20-20.svg'
import cls from './NotificationButton.module.scss'

export const NotificationButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer}>
            <Icon Svg={Notifications} inverted />
        </Button>
    )

    return (
        <>
            <BrowserView>
                <Popover className={cls.notificationButton} trigger={trigger}>
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    )
}
