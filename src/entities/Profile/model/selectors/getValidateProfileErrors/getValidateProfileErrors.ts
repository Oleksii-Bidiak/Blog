import { createSelector } from '@reduxjs/toolkit'
import { getProfile } from '../getProfile/getProfile'
import { ProfileSchema } from '../../types/profile'

export const getValidateProfileErrors = createSelector(
    getProfile,
    (profile: ProfileSchema | undefined) => profile?.validateErrors,
)
