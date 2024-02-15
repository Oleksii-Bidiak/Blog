import { Profile } from 'entities/Profile'

export enum ValidateProfileErrors {
    INNCORECT_USER_DATA = 'INNCORECT_USER_DATA',
    INNCORECT_AGE = 'INNCORECT_AGE',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileErrors[]
}
