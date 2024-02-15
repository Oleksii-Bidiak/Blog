import { rtqApi } from 'shared/api/rtqApi'

const recommendationsApi = rtqApi.injectEndpoints({
    endpoints: build => ({
        getArticleRecommendationsList: build.query({
            query: limit => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
})

export const useArticleRecommendationsList =
    recommendationsApi.useGetArticleRecommendationsListQuery
