import { createSelector } from '@reduxjs/toolkit'
import { ProfileSchema } from '../../types/profile'
import { getProfile } from '../getProfile/getProfile'

export const getProfileError = createSelector(
    getProfile,
    (profile: ProfileSchema | undefined) => profile?.error,
)
