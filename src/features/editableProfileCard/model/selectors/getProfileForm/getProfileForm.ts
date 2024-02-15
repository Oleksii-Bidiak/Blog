import { createSelector } from '@reduxjs/toolkit'
import { getProfile } from '../getProfile/getProfile'
import { ProfileSchema } from '../../types/editableProfileCardSchema'

export const getProfileForm = createSelector(
    getProfile,
    (profile: ProfileSchema | undefined) => profile?.form,
)
