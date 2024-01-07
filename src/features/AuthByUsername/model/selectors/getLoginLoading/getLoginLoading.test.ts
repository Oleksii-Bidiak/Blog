import { getLoginLoading } from './getLoginLoading'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getLoginLoading.test', () => {
    test('Should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(true)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginLoading(state as StateSchema)).toEqual(false)
    })
})
