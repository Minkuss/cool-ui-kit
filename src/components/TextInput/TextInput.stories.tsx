import type {Meta, StoryObj} from "@storybook/react";
import {ThemeProvider} from "@/theme/ThemeProvider";
import {lightTheme} from "@/theme/themes";
import {TextInput} from "@/components";

const meta: Meta<typeof TextInput> = {
    title: 'Components/TextInput',
    component: TextInput,
    decorators: [
        (Story) => (
            <ThemeProvider theme={lightTheme}>
                <div style={{ padding: '20px' }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A simple input component.',
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'The size of the input',
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'error', 'warning'],
            description: 'The color scheme of the button',
        },
        placeholder: {
            control: 'text',
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary TextInput',
    }
}
