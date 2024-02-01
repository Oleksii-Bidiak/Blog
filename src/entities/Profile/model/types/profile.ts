import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

export enum ValidateProfileErrors {
    INNCORECT_USER_DATA = 'INNCORECT_USER_DATA',
    INNCORECT_AGE = 'INNCORECT_AGE',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    id?: string
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileErrors[]
}
