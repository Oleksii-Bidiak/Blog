import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileData.test', () => {
    test('Should return data', () => {
        const data = {
            first: 'admin',
            username: 'admin',
            lastname: 'admin',
            age: 24,
            city: 'Rivne',
            country: Country.Ukraine,
            currency: Currency.GRN,
        }
        const state: DeepPartial<StateSchema> = {
            profile: { data },
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
