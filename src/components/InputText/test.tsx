import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react'

import InputText from '.'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInputs } from '../../sharedTypes/types'
import { sendToFormatter } from '../../utils/masks'

describe('<InputText />', () => {
  it('should render the an input text', () => {
    const { result } = renderHook(() => useForm<FormInputs>())
    const onSubmit: SubmitHandler<FormInputs> = () => ''

    const { container } = render(
      <form onSubmit={result.current.handleSubmit(onSubmit)}>
        <InputText
          placeholder="First"
          register={result.current.register('firstname', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
            onChange(event) {
              const { value } = event.target
              event.target.value = sendToFormatter(value, 'onlyLetters')
            }
          })}
          label="Name"
          type="text"
          maxLength={20}
          autoComplete={'given-name'}
          required={result.current.formState.errors.firstname}
        />
        <input value="Order" type="submit" />
      </form>,
      {}
    )

    expect(screen.getByTestId('input')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
