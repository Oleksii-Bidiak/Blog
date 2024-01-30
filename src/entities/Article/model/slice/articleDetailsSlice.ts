import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsShema } from '../types/articleDetailsShema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { Article } from '../types/article'

const initialState: ArticleDetailsShema = {
    isLoading: false,
    error: undefined,
    data: undefined,
}

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchArticleById.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.isLoading = false
                    state.data = action.payload
                },
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
