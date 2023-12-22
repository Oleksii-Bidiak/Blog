import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LoginModal } from './LoginModal'

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = args => (
    <LoginModal {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const inputDark = Template.bind({})
inputDark.args = {}
inputDark.decorators = [ThemeDecorator(Theme.DARK)]
