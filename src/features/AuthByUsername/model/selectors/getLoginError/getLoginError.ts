import { createSelector } from '@reduxjs/toolkit'
import { LoginSchema } from '../../type/loginSchema'
import { getLoginState } from '../getLoginState/getLoginState'

export const getLoginError = createSelector(
    getLoginState,
    (loginForm: LoginSchema) => loginForm?.error,
)
