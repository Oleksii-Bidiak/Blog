import { createSelector } from '@reduxjs/toolkit'
import { LoginSchema } from '../../type/loginSchema'
import { getLoginState } from '../getLoginState/getLoginState'

export const getLoginUsername = createSelector(
    getLoginState,
    (loginForm: LoginSchema | undefined) => loginForm?.username || '',
)
