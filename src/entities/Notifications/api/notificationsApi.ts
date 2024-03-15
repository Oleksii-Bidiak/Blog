import { rtqApi } from '@/shared/api/rtqApi'
import { Notification } from '../model/types/notifications'

const notificationsApi = rtqApi.injectEndpoints({
    endpoints: build => ({
        getNotifications: build.query<Notification[], null>({
            query: limit => ({
                url: '/notifications',
            }),
        }),
    }),
})

export const useNotifications = notificationsApi.useGetNotificationsQuery
