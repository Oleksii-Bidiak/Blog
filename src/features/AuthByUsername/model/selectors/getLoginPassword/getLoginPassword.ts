import { createSelector } from '@reduxjs/toolkit'
import { LoginSchema } from '../../type/loginSchema'
import { getLoginState } from '../getLoginState/getLoginState'

export const getLoginPassword = createSelector(
    getLoginState,
    (loginForm: LoginSchema) => loginForm?.password || '',
)
