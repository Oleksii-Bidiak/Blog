import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { articleDetailsCommentSchema } from '../../types/articleDetailsCommentSchema'
import { Comment } from '@/entities/Comment'
import { StateSchema } from '@/app/providers/StoreProvider'
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: comment => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    state =>
        state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
)

const ArticleDetailsCommentSlice = createSlice({
    name: 'ArticleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState<articleDetailsCommentSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCommentsByArticleId.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false
                    state.error = undefined
                    commentsAdapter.setAll(state, action.payload)
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: articleDetailsCommentsAction } =
    ArticleDetailsCommentSlice
export const { reducer: articleDetailsCommentsReducer } =
    ArticleDetailsCommentSlice
