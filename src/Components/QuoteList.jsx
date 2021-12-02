import React from 'react'

export default function QuoteList({quotes}) {
    return (
        <div>
            {quotes.map((quote) => { 
                return (<p>{quote.firstname} {quote.lastname}
                        says: {quote.quote}</p>)} )}
        </div>
    )
}
