import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import {
    Article,
    ArticleSortField,
    ArticleType,
    ArticleView,
} from '@/entities/Article'
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList'
import { ARTICLEs_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { ArticlesPageSchema } from '../types/articlePageSchema'
import { SortOrder } from '@/shared/types'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: article => article.id,
})

export const getArticlesSelectors = articlesAdapter.getSelectors<StateSchema>(
    state => state.articlesPage || articlesAdapter.getInitialState(),
)

const articlePagetSlice = createSlice({
    name: 'articlePagetSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        order: 'asc',
        search: '',
        sort: ArticleSortField.CREATED,
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLEs_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
        initState: state => {
            state._inited = true
            const view = localStorage.getItem(
                ARTICLEs_VIEW_LOCALSTORAGE_KEY,
            ) as ArticleView
            state.view = view
            state.limit = view === ArticleView.BIG ? 4 : 9
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasMore = action.payload.length > 0

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload)
                } else {
                    articlesAdapter.addMany(state, action.payload)
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })
    },
})

export const { actions: articlePageActions, reducer: articlePageReducer } =
    articlePagetSlice
