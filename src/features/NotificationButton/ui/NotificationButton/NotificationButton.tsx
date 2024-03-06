import { NotificationList } from 'entities/Notifications'
import { Button } from 'shared/ui/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import Notifications from 'shared/assets/icons/notification-20-20.svg'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationButton.module.scss'

export const NotificationButton = () => {
    return (
        <Popover
            className={cls.notificationButton}
            trigger={
                <Button>
                    <Icon Svg={Notifications} inverted />
                </Button>
            }>
            <NotificationList className={cls.notifications} />
        </Popover>
    )
}
