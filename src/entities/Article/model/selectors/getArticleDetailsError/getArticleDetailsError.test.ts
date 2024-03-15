import { StateSchema } from '@/app/providers/StoreProvider'
import { getArticleDetailsError } from './getArticleDetailsError'

describe('getArticleDetailsError.test', () => {
    test('Should return article', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    })
})
