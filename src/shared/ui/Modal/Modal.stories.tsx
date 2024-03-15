import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Modal } from '.'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Primary',
}

export const ModalDark = Template.bind({})
ModalDark.args = {
    isOpen: true,
    children: 'ModalDark',
}
ModalDark.decorators = [ThemeDecorator(Theme.DARK)]
