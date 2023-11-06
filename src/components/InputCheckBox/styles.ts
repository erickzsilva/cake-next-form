import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 180px;

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`
export const Box = styled.div`
  margin-right: 8px;
  position: relative;
`
export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #eba70e;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    background-size: 17px;
    width: 17px;
    height: 17px;
  }

  &:checked {
    background: url('img/check.png') no-repeat center center;
    background-size: 17px;
    width: 17px;
    height: 17px;
  }

  &:invalid {
    border-color: red;
  }
`
export const Img = styled.img<{ $error?: boolean }>`
  border: ${(props) => (props.$error ? '1px solid red' : '')};
  height: 100px;
  max-width: 150px;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: unset;
    max-width: unset;
  }
`
