import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import InputChebox from '.'
import { mock } from '../../mock'

describe('<InputChebox />', () => {
  it('should render the checkbox and on click it should be selected', () => {
    const { container } = render(
      <InputChebox
        alt={mock.cakes[0].alt}
        srcImage={mock.cakes[0].srcImage}
        value={mock.cakes[0].value}
        defaultChecked={false}
      />
    )

    expect(screen.getByTestId('checkbox')).toBeInTheDocument()

    expect(userEvent.click(screen.getByTestId('checkbox'))).toBeChecked

    expect(container.firstChild).toMatchSnapshot()
  })
})
