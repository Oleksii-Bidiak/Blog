import { createSelector } from '@reduxjs/toolkit'
import { UserSchema } from '../../type/user'
import { getUser } from '../getUser/getUser'
import { UserRole } from '../../const/const'

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
