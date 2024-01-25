import { Profile, ValidateProfileErrors } from '../../types/profile'

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA]
    }
    const { first, lastname, age } = profile
    const errors: ValidateProfileErrors[] = []

    if (!first || !lastname) {
        errors.push(ValidateProfileErrors.INNCORECT_USER_DATA)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INNCORECT_AGE)
    }

    return errors
}
