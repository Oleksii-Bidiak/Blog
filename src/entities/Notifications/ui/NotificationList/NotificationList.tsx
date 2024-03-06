import { memo, useMemo } from 'react'
import { useNotifications } from '../../api/notificationsApi'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './notificationList.module.scss'
import { VStack } from 'shared/ui/Stack'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Sceleton } from 'shared/ui/Sceleton/Sceleton'

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    })

    const notificationsList = useMemo(() => {
        return data?.map(item => <NotificationItem key={item.id} item={item} />)
    }, [data])

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <Sceleton width="100%" height="80" borderRadius="8px" />
                <Sceleton width="100%" height="80" borderRadius="8px" />
                <Sceleton width="100%" height="80" borderRadius="8px" />
            </VStack>
        )
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {notificationsList}
        </VStack>
    )
})
