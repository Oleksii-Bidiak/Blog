import { createSelector } from '@reduxjs/toolkit'
import { getUser } from '../getUser/getUser'
import { UserSchema } from '../../type/user'

export const getUserInited = createSelector(
    getUser,
    (user: UserSchema) => user._inited,
)
