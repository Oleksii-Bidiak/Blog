import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsComments = (state: StateSchema) =>
    state.articleDetailsPage?.comments
