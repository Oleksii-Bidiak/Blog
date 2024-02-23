import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import withMock from 'storybook-addon-mock'

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = args => (
    <ArticleRecommendationsList {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
