import { getLoginPassword } from './getLoginPassword'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getLoginPassword.test', () => {
    test('Should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: 'password' },
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('password')
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
