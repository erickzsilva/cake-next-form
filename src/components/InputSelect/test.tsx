import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import InputSelect from '.'
import { mock } from '../../mock'

describe('<InputSelect />', () => {
  it('should be rendered and selected an option', () => {
    const { container } = render(
      <InputSelect
        id="country"
        optionList={mock.country}
        placeHolder="Country"
        autoComplete="country-name"
      />
    )

    expect(screen.getByTestId('select')).toBeInTheDocument()

    expect(userEvent.selectOptions(screen.getByTestId('select'), 'Brasil'))
      .toBeCalled

    expect(container.firstChild).toMatchSnapshot()
  })
})
