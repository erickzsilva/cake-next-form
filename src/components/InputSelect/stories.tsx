import { Meta } from '@storybook/react'
import InputSelect, { SelectProps } from '.'
import { FormInputs } from '@/sharedTypes/types'
import { useForm } from 'react-hook-form'
import { mock } from './../../mock'

export default {
  title: 'InputSelect',
  component: InputSelect,
  args: {
    id: 'country',
    optionList: mock.country,
    placeHolder: 'Country',
    autoComplete: 'country-name'
  }
} as Meta<SelectProps>

export const Default = (args: SelectProps) => {
  const { register } = useForm<FormInputs>()
  return <InputSelect {...args} register={register('country')} />
}
