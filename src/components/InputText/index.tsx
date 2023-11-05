import { HTMLInputTypeAttribute } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

import * as S from './styles'

export type InputProps = {
  autoComplete?: string
  label?: string
  maxLength?: number
  minDate?: string
  placeholder?: string
  type: HTMLInputTypeAttribute
  required?: FieldError
  register: UseFormRegisterReturn
}

const InputText = ({
  autoComplete,
  label,
  maxLength,
  minDate,
  placeholder,
  type,
  required,
  register
}: InputProps) => (
  <S.Wrapper>
    <S.Holder>
      <S.LabelField className={type === 'email' ? '-mr' : ''}>
        {label && <label htmlFor={register.name}>{label}</label>}
      </S.LabelField>
      <S.LabelField className="-error">
        {required && <S.Error>*</S.Error>}
      </S.LabelField>
    </S.Holder>
    <S.Input
      id={register.name}
      autoComplete={autoComplete}
      type={type}
      min={minDate}
      placeholder={placeholder}
      maxLength={maxLength}
      className={type === 'date' || type === 'time' ? '-util' : ''}
      {...register}
      data-testid="input"
    />

    {type === 'email' ? <S.Info>To receive the complete receipt</S.Info> : ''}
  </S.Wrapper>
)

export default InputText
