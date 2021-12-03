import React from 'react'
import QuoteItem from './QuoteItem'
export default function QuoteList({quotes}) {
    return (
        <ul>
            {quotes.map((quote) => { 
                return (<QuoteItem quote={quote}/>)} )}
        </ul>
    )
}

