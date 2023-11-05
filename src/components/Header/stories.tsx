import { Meta, StoryObj } from '@storybook/react'
import Header from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Default: StoryObj = {
  args: {
    title: 'Cake Order Form',
    description: `Order your freshly baked cakes using only the finest quality natural ingredientes.`
  }
}
