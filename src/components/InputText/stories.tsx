import { Meta } from '@storybook/react'
import InputText, { InputProps } from '.'
import { useForm } from 'react-hook-form'
import { FormInputs } from '@/sharedTypes/types'
import { sendToFormatter } from '../../utils/masks'
import { emailValidation, tomorrowDate } from '../../utils/utils'

export default {
  title: 'InputText',
  component: InputText
} as Meta<InputProps>

export const Default = () => {
  const {
    register,
    formState: { errors }
  } = useForm<FormInputs>()

  return (
    <>
      <div>
        <InputText
          placeholder="First"
          register={register('firstname', {
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
          required={errors.firstname}
        />
      </div>

      <div>
        <InputText
          placeholder="Last"
          register={register('lastName', {
            maxLength: 20,
            onChange(event) {
              const { value } = event.target
              event.target.value = sendToFormatter(value, 'onlyLetters')
            }
          })}
          type="text"
          maxLength={20}
          autoComplete={'family-name'}
        />
      </div>

      <div>
        <InputText
          label="Delivery date"
          minDate={tomorrowDate()}
          register={register('deliveryDate')}
          type="date"
        />
      </div>

      <div>
        <InputText
          label="Preferred delivery time"
          register={register('deliveryTime')}
          type="time"
        />
      </div>

      <div>
        <InputText
          placeholder="### ### ####"
          register={register('phone', {
            required: true,
            onChange(event) {
              const { value } = event.target
              event.target.value = sendToFormatter(value, 'phone')
            }
          })}
          label="Phone"
          type="tel"
          required={errors.phone}
          autoComplete="tel-local"
        />
      </div>

      <div>
        <InputText
          placeholder=""
          register={register('email', {
            required: true,
            pattern: emailValidation
          })}
          label="Email"
          type="text"
          required={errors.email}
          autoComplete="email"
        />
        <p>To receive the complete receipt</p>
      </div>

      <div>
        <InputText
          placeholder="Street Address"
          register={register('address1')}
          maxLength={80}
          autoComplete="address-line1"
          type="text"
        />
      </div>

      <div>
        <InputText
          placeholder="Street Address Line 2"
          register={register('address2')}
          maxLength={80}
          autoComplete="address-line2"
          type="text"
        />
      </div>
      <div>
        <InputText
          placeholder="City"
          register={register('city')}
          maxLength={20}
          autoComplete="address-level1"
          type="text"
        />
      </div>
      <div>
        <InputText
          placeholder="Region"
          register={register('region')}
          maxLength={20}
          autoComplete="address-level2"
          type="text"
        />
      </div>
      <div>
        <InputText
          placeholder="Postal / Zip Code"
          register={register('zipCode', {
            onChange(event) {
              const { value } = event.target
              event.target.value = sendToFormatter(value, 'zipCode')
            }
          })}
          type="tel"
          autoComplete="postal-code"
        />
      </div>
      <div></div>
      <div></div>
    </>
  )
}
