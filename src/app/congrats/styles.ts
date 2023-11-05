import styled from 'styled-components'

export const Congrats = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`
export const Holder = styled.section`
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 24px -5px #eba70e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 420px;
  padding: 25px 15px 25px 15px;
  width: 100%;
`
export const WrapTitle = styled.div`
  margin: 15px 0 40px;
`

export const Title = styled.h1`
  background: url('img/check.png') no-repeat center right 3px;
  background-size: 15px;
  font-size: 20px;
  font-weight: 500;
  padding-right: 22px;
`
export const Table = styled.div`
  display: grid;
  grid-gap: 18px 60px;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Field = styled.div`
  font-size: 11px;
  font-weight: 700;
`
export const TitleField = styled.span`
  font-size: 13px;
  font-weight: 600;
`
export const TextField = styled.span`
  font-size: 11px;
  font-weight: 500;
`
export const WrapBtn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0 0;
  width: 100%;
`
export const Btn = styled.button`
  background-color: #24457b;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 13.5px;
  height: 36px;
  letter-spacing: 0.78px;
  margin: 0 auto;
  max-width: 95px;
  width: 100%;

  &:active {
    position: relative;
    top: 1px;
  }
`
