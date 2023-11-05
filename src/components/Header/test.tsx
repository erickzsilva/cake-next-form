import { render, screen } from '@testing-library/react'

import { mockHead } from './../../mock'
import Header from '.'

describe('<Header />', () => {
  it('should render title and subtitle', () => {
    const { container } = render(
      <Header title={mockHead.title} description={mockHead.description} />
    )
    expect(
      screen.getByRole('heading', {
        name: /Cake Order Form/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Order your freshly baked cakes using only the finest quality natural ingredientes./i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
