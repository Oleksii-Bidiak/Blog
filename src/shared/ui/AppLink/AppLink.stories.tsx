import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from '.'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />

export const LightPrimary = Template.bind({})
LightPrimary.args = {
    children: 'LightPrimary',
    theme: AppLinkTheme.PRIMARY,
}

export const LightSecondary = Template.bind({})
LightSecondary.args = {
    children: 'LightSecondary',
    theme: AppLinkTheme.SECONDARY,
}

export const DarkPrimary = Template.bind({})
DarkPrimary.args = {
    children: 'DarkPrimary',
    theme: AppLinkTheme.PRIMARY,
}
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkSecondary = Template.bind({})
DarkSecondary.args = {
    children: 'DarkSecondary',
    theme: AppLinkTheme.SECONDARY,
}
DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)]
