import { createSelector } from '@reduxjs/toolkit'
import { LoginSchema } from '../../type/loginSchema'
import { getLoginState } from '../getLoginState/getLoginState'

export const getLoginLoading = createSelector(
    getLoginState,
    (loginForm: LoginSchema) => loginForm?.isLoading || false,
)
