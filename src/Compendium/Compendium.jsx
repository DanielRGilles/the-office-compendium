import {  useState, useEffect } from "react";
import QuoteList from "../Components/QuoteList";
import { tenQuotes } from "../Services/Quotes";

export default function Compendium() {
  const [loading, setLoading] = useState(true)
  const [quotes, setQuotes] = useState([])

    useEffect(() => { 
        async function getQuotes() {
            const quoteList = await tenQuotes();
            setQuotes(quoteList);
            setLoading(false);
        };
    getQuotes();
    }, [])
    
    return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <QuoteList quotes={quotes}/>
      )}
            
    </div>
  )
}
