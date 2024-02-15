import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileForm.test', () => {
    test('Should return formData', () => {
        const form = {
            first: 'admin',
            username: 'admin',
            lastname: 'admin',
            age: 24,
            city: 'Rivne',
            country: Country.Ukraine,
            currency: Currency.GRN,
        }
        const state: DeepPartial<StateSchema> = {
            profile: { form },
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
