import { createSelector } from '@reduxjs/toolkit'
import { getProfile } from '../getProfile/getProfile'
import { ProfileSchema } from '../../types/editableProfileCardSchema'

export const getProfileData = createSelector(
    getProfile,
    (profile: ProfileSchema | undefined) => profile?.data,
)
