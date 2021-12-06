import { render } from '@testing-library/react'

import Compendium from './Compendium'

it('Should fetch then render a list of office quotes', async () => {
  const { container } = render(<Compendium />)
  expect(container).toMatchSnapshot()
})
