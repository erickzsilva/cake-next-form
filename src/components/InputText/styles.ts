import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  position: relative;
`
export const Error = styled.span`
  color: red;
  font-size: 1.5rem;
`
export const Holder = styled.div`
  display: flex;
`
export const LabelField = styled.label`
  font-size: 11px;
  font-weight: 600;
  margin: 0 5px 4px 0;

  &.-error {
    color: #ff0101;
  }

  @media screen and (max-width: 768px) {
    &.-mr {
      margin: 0 5px 20px 0;
    }
  }
`
export const Input = styled.input`
  appearance: none;
  border: 1px solid #eba70e;
  border-radius: 3px;
  box-shadow: none;
  height: 35px;
  padding-left: 11px;
  -webkit-appearance: none;

  &.-util {
    color: #24457b;
    font-size: 11px;
    padding-left: 10px;
  }

  &::placeholder {
    color: #24457b;
    font-size: 11px;
  }
`
export const Info = styled.div`
  color: #bdbcc0;
  position: absolute;

  @media screen and (min-width: 768px) {
    bottom: -16px;
  }

  @media screen and (max-width: 768px) {
    top: 16px;
  }
`
