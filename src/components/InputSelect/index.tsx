import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './styles'

export type SelectProps = {
  autoComplete?: string
  id: string
  optionList: string[]
  placeHolder: string
  register?: UseFormRegisterReturn
}

const InputSelect = ({
  autoComplete,
  id,
  optionList,
  placeHolder,
  register
}: SelectProps) => (
  <S.Select
    id={id}
    {...register}
    autoComplete={autoComplete}
    data-testid="select"
  >
    <option value="" defaultChecked hidden>
      {placeHolder}
    </option>
    {optionList.map((item: string, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ))}
  </S.Select>
)

export default InputSelect
