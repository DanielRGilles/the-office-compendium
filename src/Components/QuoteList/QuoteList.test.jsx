import { render } from '@testing-library/react'
import QuoteList from './QuoteList'
import { data } from '../../Backup/BackupData'


it('Should render controls', async () => {
  

const { container } = render(<QuoteList quotes={data}/>)
  expect(container).toMatchSnapshot()
})