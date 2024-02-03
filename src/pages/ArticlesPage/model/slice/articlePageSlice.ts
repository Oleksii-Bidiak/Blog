import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entities/Article'
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList'
import { ARTICLEs_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { ArticlesPageSchema } from '../types/articlePageSchema'

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
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLEs_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
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
            .addCase(fetchArticleList.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(
                fetchArticleList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false
                    articlesAdapter.addMany(state, action.payload)
                    state.hasMore = action.payload.length > 0
                },
            )
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })
    },
})

export const { actions: articlePageActions, reducer: articlePageReducer } =
    articlePagetSlice
