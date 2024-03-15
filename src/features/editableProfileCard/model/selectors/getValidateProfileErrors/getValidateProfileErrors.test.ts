import { StateSchema } from '@/app/providers/StoreProvider'
import { getValidateProfileErrors } from './getValidateProfileErrors'
import { ValidateProfileErrors } from '../../const/const'

describe('getValidateProfileErrors.test', () => {
    test('Should work with filled state', () => {
        const errors = [
            ValidateProfileErrors.SERVER_ERROR,
            ValidateProfileErrors.INNCORECT_AGE,
        ]
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: errors },
        }
        expect(getValidateProfileErrors(state as StateSchema)).toEqual(errors)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getValidateProfileErrors(state as StateSchema)).toEqual(
            undefined,
        )
    })
})
