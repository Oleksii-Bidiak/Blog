import { createSelector } from '@reduxjs/toolkit'
import { getProfile } from '../getProfile/getProfile'
import { ProfileSchema } from '../../types/profile'

export const getProfileReadOnly = createSelector(
    getProfile,
    (profile: ProfileSchema | undefined) => profile?.readonly || false,
)
