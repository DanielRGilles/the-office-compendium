import {  useState, useEffect } from "react";
import QuoteList from "../Components/QuoteList";
import { fetchQuotes } from "../Services/Quotes";
import './Compendium.css'
import Header from "../Components/Header";

export default function Compendium() {
  const [loading, setLoading] = useState(true)
  const [quotes, setQuotes] = useState([])

    useEffect(() => { 
        async function getQuotes() {
            const quoteList = await fetchQuotes();
            setQuotes(quoteList);
            setLoading(false);
        };
    getQuotes();
    }, [])
    
    return (
    <div className='main-body'>
        <Header/>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
         <main className='main-cnt'> 
        <div></div>
        <QuoteList quotes={quotes}/>
        <div></div>
        </main>
      )}
            
    </div>
  )
}
