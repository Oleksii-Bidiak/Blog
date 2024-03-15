import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { CommentCard } from './CommentCard'

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = args => (
    <CommentCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'user' },
    },
}
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Primary.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'user' },
    },
}
Primary.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'user' },
    },
    isLoading: true,
}
Loading.decorators = [StoreDecorator({})]

export const DarkLoading = Template.bind({})
DarkLoading.args = {
    comment: undefined,
    isLoading: true,
}
DarkLoading.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]
