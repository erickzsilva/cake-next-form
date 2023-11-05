import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './styles'

export type CheckBoxProps = {
  alt?: string
  register?: UseFormRegisterReturn
  srcImage: string
  value: string
  error?: boolean
  checked?: boolean
  defaultChecked?: boolean
}

const InputCheckBox = ({
  alt,
  register,
  srcImage,
  value,
  error,
  checked,
  defaultChecked
}: CheckBoxProps) => (
  <S.Wrapper>
    <S.Box>
      <S.CheckBox
        type="checkbox"
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        {...register}
        data-testid="checkbox"
      />
    </S.Box>
    <S.Img src={srcImage} alt={alt} $error={error} />
  </S.Wrapper>
)

export default InputCheckBox
