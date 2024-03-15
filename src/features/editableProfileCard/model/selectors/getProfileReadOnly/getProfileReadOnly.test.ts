import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileReadOnly } from './getProfileReadOnly'

describe('getProfileReadOnly.test', () => {
    test('Should work with filled state (true)', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: true },
        }
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined)
    })
})
