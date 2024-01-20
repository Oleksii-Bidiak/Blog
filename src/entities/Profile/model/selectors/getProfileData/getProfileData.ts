import { createSelector } from '@reduxjs/toolkit'
import { getProfile } from '../getProfile/getProfile'
import { ProfileSchema } from '../../types/profile'

export const getProfileData = createSelector(
    getProfile,
    (profile: ProfileSchema | undefined) => profile?.data,
)
