import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileErrors } from '../../const/const'

const data = {
    first: 'admin',
    username: 'admin',
    lastname: 'admin',
    age: 24,
    city: 'Rivne',
    country: Country.Ukraine,
    currency: Currency.GRN,
}

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })

        expect(result).toEqual([ValidateProfileErrors.INNCORECT_USER_DATA])
    })

    test('inncorect age', () => {
        const result = validateProfileData({ ...data, age: undefined })

        expect(result).toEqual([ValidateProfileErrors.INNCORECT_AGE])
    })

    test('incorrect all', () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileErrors.INNCORECT_USER_DATA,
            ValidateProfileErrors.INNCORECT_AGE,
        ])
    })
})
