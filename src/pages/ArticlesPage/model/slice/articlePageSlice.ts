import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entities/Article'
import { articlePageSchema } from '../types/articlePageSchema'
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList'
import { ARTICLEs_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: article => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    state => state.articlesPage || articlesAdapter.getInitialState(),
)

const articlePagetSlice = createSlice({
    name: 'articlePagetSlice',
    initialState: articlesAdapter.getInitialState<articlePageSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLEs_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        initState: state => {
            state.view = localStorage.getItem(
                ARTICLEs_VIEW_LOCALSTORAGE_KEY,
            ) as ArticleView
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
                    articlesAdapter.setAll(state, action.payload)
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
