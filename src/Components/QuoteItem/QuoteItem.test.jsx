import { render } from '@testing-library/react'
import QuoteItem from './QuoteItem'

it('Should render a quote', async () => {
  const quote = {
    "_id": "5e966a526a66e65486e244b5",
    "content": "Shut up about the sun. SHUT UP ABOUT THE SUN!",
    "character": {
        "_id": "5e93b56d3af44260882e33be",
        "firstname": "Gabe",
        "lastname": "Lewis",
        "__v": 0
    },
    "__v": 0
};

const { container } = render(<QuoteItem quote={quote} />)
  expect(container).toMatchSnapshot()
})
