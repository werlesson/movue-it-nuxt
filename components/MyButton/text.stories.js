import MyButton from '.'
export default {
  title: 'Button',
  component: MyButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      defaultValue: 'primary',
    },
    round: { control: 'boolean' },
    text: {
      control: 'text',
      defaultValue: 'Awesome Button',
    },
  },
}

export const Button = (_arg, { argTypes }) => ({
  components: { MyButton },
  props: Object.keys(argTypes),
  template: '<MyButton v-bind="$props" />',
})
