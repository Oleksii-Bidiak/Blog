import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'

export const getCommentForm = createSelector(
    [(state: StateSchema) => state.addCommentForm],
    addCommentForm => addCommentForm,
)
