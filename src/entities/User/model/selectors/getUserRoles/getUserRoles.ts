import { createSelector } from '@reduxjs/toolkit'
import { UserRole, UserSchema } from '../../type/user'
import { getUser } from '../getUser/getUser'

export const getUserRoles = createSelector(
    getUser,
    (user: UserSchema) => user.authData?.roles,
)

export const isUserAdmin = createSelector(getUserRoles, roles =>
    Boolean(roles?.includes(UserRole.ADMIN)),
)

export const isUserManager = createSelector(getUserRoles, roles =>
    Boolean(roles?.includes(UserRole.MANAGER)),
)
