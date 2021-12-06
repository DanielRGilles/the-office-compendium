import { render } from '@testing-library/react'
import Controls from './Controls'


it('Should render controls', async () => {
  

const { container } = render(<Controls query={'a'} characterName={'Michael'} numOfRandom={1}/>)
  expect(container).toMatchSnapshot()
})
