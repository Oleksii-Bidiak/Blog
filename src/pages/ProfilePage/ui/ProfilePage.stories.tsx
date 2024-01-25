import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import avatar from 'shared/assets/tests/photo.jpg'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = args => (
    <ProfilePage {...args} />
)

const data = {
    first: 'admin',
    username: 'admin',
    lastname: 'admin',
    age: 24,
    city: 'Rivne',
    country: Country.Ukraine,
    currency: Currency.GRN,
    avatar,
}

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
    StoreDecorator({
        profile: {
            data,
        },
    }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            data,
        },
    }),
]
