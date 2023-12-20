import { getCounterValue } from './getCounterValue'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { DeepPartial } from '@reduxjs/toolkit'

describe('getCounter', () => {
    test('Should return value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})
