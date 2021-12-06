import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Compendium from './Compendium'

it('Should fetch then render a list of office quotes', async () => {
  render(<Compendium />)

  const loading = screen.getByText(/Loading.../i)
  expect(loading).toBeInTheDocument()

  const quotes = await screen.findByRole('list', {
    name: 'quotes',
  })

  expect(quotes).toMatchSnapshot()
})

it('should display a search form', async () => {
  render(<Compendium />)
  const query = await screen.findByRole('form', {
    name: 'searchform',
  })
  expect(query).toBeInTheDocument()
})


