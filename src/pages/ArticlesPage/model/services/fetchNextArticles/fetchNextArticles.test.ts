import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchNextArticles } from './fetchNextArticles'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

jest.mock('../fetchArticleList/fetchArticleList')

describe('fetchNextArticles.test', () => {
    test('secsess', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPage: {
                ids: [],
                entities: {},
                isLoading: false,
                page: 2,
                limit: 5,
                hasMore: true,
            },
        })

        await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(4)
        expect(fetchArticleList).toHaveBeenCalledWith({})
    })

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPage: {
                ids: [],
                entities: {},
                isLoading: false,
                page: 2,
                limit: 5,
                hasMore: false,
            },
        })

        await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(fetchArticleList).not.toHaveBeenCalled()
    })

    test('isLoading equal true', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPage: {
                ids: [],
                entities: {},
                isLoading: true,
                page: 2,
                limit: 5,
                hasMore: true,
            },
        })

        await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(fetchArticleList).not.toHaveBeenCalled()
    })
})
