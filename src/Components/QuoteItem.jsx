import React from 'react';
import './quotes.css';

export default function QuoteItem({quote}) {
    return (
        <div className='quote-item'>
            <img 
            src={`Assets/${quote.character.firstname}.jpg`}  alt={quote.character.firstname}/>
            <li key={quote._id}>{quote.character.firstname} {quote.character.lastname} 
                        : {quote.content}</li>
        </div>
    )
}
