import { Meta } from '@storybook/react'
import InputChebox, { CheckBoxProps } from '.'
import InputCheckBox from '.'
import { useForm } from 'react-hook-form'
import { FormInputs } from '@/sharedTypes/types'

export default {
  title: 'InputChebox',
  component: InputChebox,
  args: {
    srcImage: 'img/redFruitCake.jpg',
    value: 'Red Fruit Cake',
    alt: 'Red Fruit Cake',
    defaultChecked: true,
    type: 'checkbox'
  }
} as Meta<CheckBoxProps>

export const Default = (args: CheckBoxProps) => {
  const { register } = useForm<FormInputs>()
  return <InputCheckBox {...args} register={register('redFruitCake')} />
}
