import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarImg from './photo.jpg'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const LightPrimary = Template.bind({})
LightPrimary.args = {
    size: 150,
    src: AvatarImg,
}

export const Small = Template.bind({})
Small.args = {
    size: 50,
    src: AvatarImg,
}
