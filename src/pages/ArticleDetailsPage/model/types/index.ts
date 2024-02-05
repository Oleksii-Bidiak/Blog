import { articleDetailsCommentSchema } from './articleDetailsCommentSchema'
import { articleDetailsRecomendationsSchema } from './articleDetailsRecomendationsSchema'

export interface ArticleDetailsPageSchema {
    comments: articleDetailsCommentSchema
    recomendations: articleDetailsRecomendationsSchema
}
