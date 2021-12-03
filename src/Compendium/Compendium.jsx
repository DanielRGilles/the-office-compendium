import {  useState, useEffect } from "react";
import QuoteList from "../Components/QuoteList/QuoteList";
import { fetchQuotes, filteredQuotes } from "../Services/Quotes";
import './Compendium.css'
import Header from "../Components/Header";

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [filtered, setFiltered] = useState('All');

    useEffect(() => { 
        async function getQuotes() {
            const quoteList = await fetchQuotes();
            setQuotes(quoteList);
            setLoading(false);
        };
    getQuotes();
    }, [])

    useEffect(() => {
        async function getFiltered() {
            const quoteList = await filteredQuotes(filtered);
            setFiltered(quoteList);
            setLoading(false);
        };
        getFiltered();

        }, [filtered])
    
    
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
