import React from 'react'
import QuoteItem from '../QuoteItem/QuoteItem'

export default function QuoteList({quotes, filtered}) {
    return (
        <ul>
            {filtered.length === 0 
                ? quotes.map((quote) => { 
                    return (<QuoteItem quote={quote}/>)} )
                : filtered.map((quote) => { 
                    return (<QuoteItem quote={quote}/>)} )
            }
        </ul>
    )
}

