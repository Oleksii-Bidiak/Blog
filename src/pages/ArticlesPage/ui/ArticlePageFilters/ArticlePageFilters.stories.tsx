import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ArticlePageFilters } from './ArticlePageFilters'

export default {
    title: 'pages/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageFilters>

const Template: ComponentStory<typeof ArticlePageFilters> = () => (
    <ArticlePageFilters />
)

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({ articlesPage: {} })]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ articlesPage: {} }),
]
