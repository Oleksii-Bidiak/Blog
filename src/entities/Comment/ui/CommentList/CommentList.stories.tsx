import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { CommentList } from './CommentList'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = args => (
    <CommentList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'user' },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '2', username: 'Vasya' },
        },
    ],
}
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'user' },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '2', username: 'Vasya' },
        },
    ],
}
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {
    comments: [],
    isLoading: true,
}
Loading.decorators = [StoreDecorator({})]

export const DarkLoading = Template.bind({})
DarkLoading.args = {
    comments: [],
    isLoading: true,
}
DarkLoading.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]
