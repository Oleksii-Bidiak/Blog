import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from './getArticleDetailsData'

describe('getArticleDetailsData.test', () => {
    test('Should return article', () => {
        const data = {
            id: '1',
            title: 'title',
        }
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
})
