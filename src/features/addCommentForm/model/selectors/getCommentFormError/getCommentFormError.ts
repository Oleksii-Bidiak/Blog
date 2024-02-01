import { createSelector } from '@reduxjs/toolkit'
import { getCommentForm } from '../getCommentForm/getCommentForm'
import { AddCommentFormSchema } from '../../types/addCommentForm'

export const getCommentFormError = createSelector(
    getCommentForm,
    (commentForm: AddCommentFormSchema | undefined) => commentForm?.error,
)
