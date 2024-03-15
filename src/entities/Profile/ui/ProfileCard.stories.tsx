import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { ProfileCard } from './ProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/tests/photo.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = args => (
    <ProfileCard {...args} />
)

export const Light = Template.bind({})
Light.args = {
    data: {
        first: 'admin',
        username: 'admin',
        lastname: 'admin',
        age: 24,
        city: 'Rivne',
        country: Country.Ukraine,
        currency: Currency.GRN,
        avatar,
    },
}

export const Dark = Template.bind({})
Dark.args = {
    data: {
        first: 'admin',
        username: 'admin',
        lastname: 'admin',
        age: 24,
        city: 'Rivne',
        country: Country.Ukraine,
        currency: Currency.GRN,
        avatar,
    },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
}

export const LoadingDark = Template.bind({})
LoadingDark.args = {
    isLoading: true,
}
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)]

export const WithError = Template.bind({})
WithError.args = {
    error: 'true',
}

export const WithErrorDark = Template.bind({})
WithErrorDark.args = {
    error: 'true',
}
WithErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
