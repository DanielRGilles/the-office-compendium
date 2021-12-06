import React from 'react'
import QuoteItem from '../QuoteItem/QuoteItem'

export default function QuoteList({quotes}) {
    return (
        <ul aria-label='list'>
            { quotes.map((quote) => { 
                    return (<QuoteItem key={quote._id} quote={quote}/>)} )    
            }
        </ul>
    )
}

