'use client'
import * as S from './styles'

type HeaderPros = {
  title: string
  description: string
}

const Header = ({ title, description }: HeaderPros) => {
  return (
    <S.Wrapper>
      <S.Title title="title">{title}</S.Title>
      <S.SubTitle>{description}</S.SubTitle>
    </S.Wrapper>
  )
}

export default Header
