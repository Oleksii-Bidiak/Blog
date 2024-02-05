import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { articleDetailsRecomendationsSchema } from '../../types/articleDetailsRecomendationsSchema'
import { fetchArticlesRecommendation } from '../../services/fetchArticlesRecommendation/fetchArticlesRecommendation'

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: article => article.id,
})

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        state =>
            state.articleDetailsPage?.recomendations ||
            recommendationsAdapter.getInitialState(),
    )

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState:
        recommendationsAdapter.getInitialState<articleDetailsRecomendationsSchema>(
            {
                error: undefined,
                isLoading: false,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchArticlesRecommendation.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticlesRecommendation.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = undefined
                recommendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticlesRecommendation.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: ArticleDetailsRecommendationsAction } =
    articleDetailsRecommendationsSlice
export const { reducer: ArticleDetailsRecommendationsReducer } =
    articleDetailsRecommendationsSlice
