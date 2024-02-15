import { createSelector } from '@reduxjs/toolkit'
import { getProfile } from '../getProfile/getProfile'
import { ProfileSchema } from '../../types/editableProfileCardSchema'

export const getProfileLoading = createSelector(
    getProfile,
    (profile: ProfileSchema | undefined) => profile?.isLoading || false,
)
