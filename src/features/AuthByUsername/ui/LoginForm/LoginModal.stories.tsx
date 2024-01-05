import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { LoginForm } from './LoginForm'

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = args => (
    <LoginForm {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'abc' },
    }),
]

export const LoginModalDark = Template.bind({})
LoginModalDark.args = {}
LoginModalDark.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'abc' },
    }),
    ThemeDecorator(Theme.DARK),
]

export const LoginModalWithError = Template.bind({})
LoginModalWithError.args = {}
LoginModalWithError.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'abc', error: 'ERROR' },
    }),
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
]
