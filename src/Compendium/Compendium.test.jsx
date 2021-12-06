import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Compendium from './Compendium'

it('Should fetch then render a list of office quotes', async () => {
  const { container } = render(<Compendium />)
  expect(container).toMatchSnapshot()
})
