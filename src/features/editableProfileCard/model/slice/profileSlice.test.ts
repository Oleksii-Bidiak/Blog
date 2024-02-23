import { ValidateProfileErrors } from '../const/const'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileSchema } from '../types/editableProfileCardSchema'
import { profileActions, profileReducer } from './profileSlice'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const data = {
    first: 'admin',
    username: 'admin',
    lastname: 'admin',
    age: 24,
    city: 'Rivne',
    country: Country.Ukraine,
    currency: Currency.GRN,
}

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true })
    })

    test('set canselEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        }
        expect(
            profileReducer(state as ProfileSchema, profileActions.canselEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        })
    })

    test('set updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '123' },
        }
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: '123456',
                }),
            ),
        ).toEqual({ form: { username: '123456' } })
    })

    test('set updateProfile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        }
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({ isLoading: true, validateErrors: undefined })
    })

    test('set updateProfile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        })
    })
})
