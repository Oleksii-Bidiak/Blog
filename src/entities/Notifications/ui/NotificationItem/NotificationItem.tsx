import { memo } from 'react'
import { Notification } from '../../model/types/notifications'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './notificationItem.module.scss'
import { Card, CardTheme } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'

interface NotificationItemProps {
    className?: string
    item?: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={
                !item?.href
                    ? classNames(cls.notificationItem, {}, [className])
                    : undefined
            }>
            <Text title={item?.title} text={item?.description} />
        </Card>
    )

    if (item?.href) {
        return (
            <a
                className={classNames(cls.notificationItem, {}, [className])}
                href={item.href}
                target="_black">
                {content}
            </a>
        )
    }

    return content
})
