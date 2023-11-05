'use client'
import styled from 'styled-components'

export const Section = styled.section`
  height: 100%;
  margin: 0 auto;
  max-width: 420px;
  padding: 0 10px 40px;
`
export const TitleForm = styled.h3`
  border-top: 1px solid #b0b3b5;
  font-size: 11px;
  font-weight: 500;
  padding: 30px 0 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const SubTitleForm = styled.h3`
  border-bottom: 2px solid #24457b;
  font-size: 14px;
  font-weight: 400;
  padding: 30px 0 0;
  margin-bottom: 20px;
  max-width: 120px;
`
export const Holder = styled.div`
  align-items: end;
  display: grid;
  grid-gap: 15px 17px;
  grid-template-columns: 1fr 1fr;

  &.-gap {
    grid-template-columns: 1fr;
  }

  &:nth-of-type(even) {
    margin-bottom: 30px;
  }

  &:nth-last-of-type(2n-1) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    &.-gap-check {
      margin: 0 auto;
    }
  }
`
export const Wrapper = styled.div`
  display: contents;
`
export const Row = styled.div`
  margin: 0 0 15px;
`

export const AllFields = styled.label`
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  margin: 0 5px 4px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 1.5rem;
`
export const Cakes = styled.div`
  display: flex;
  flex-direction: column;
`
export const Submit = styled.input`
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
