import React from 'react';
import './quotes.css';

export default function QuoteItem({quote}) {
    return (
        <li  className='quote-item'>
            <img 
            src={`Assets/${quote.character.firstname}.jpg`}  alt={quote.character.firstname}/>
            <div className='quote-text' key={quote._id}>{quote.character.firstname} {quote.character.lastname} 
                        : {quote.content}</div>
        </li>
    )
}
