import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Header } from '.'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

export default {
    title: 'widget/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({ user: {} })]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StoreDecorator({ user: {} }), ThemeDecorator(Theme.DARK)]

export const AuthHeader = Template.bind({})
AuthHeader.args = {}
AuthHeader.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
]
