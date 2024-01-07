import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../type/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    test('test set username', async () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' }
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('username'),
            ),
        ).toStrictEqual({ username: 'username' })
    })
    test('test set password', async () => {
        const state: DeepPartial<LoginSchema> = { password: 'pass' }
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('password'),
            ),
        ).toStrictEqual({ password: 'password' })
    })
})
