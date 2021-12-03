import {  useState, useEffect } from "react";
import QuoteList from "../Components/QuoteList/QuoteList";
import { fetchQuotes, filteredQuotes, getCharNames } from "../Services/Quotes";
import './Compendium.css'
import Header from "../Components/Header";
import Controls from "../Components/Controls/Controls";

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [characterName, setCharacterName] = useState('all')
    
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
            const quoteList = await filteredQuotes(characterName);
            setFiltered(quoteList);
            setLoading(false);
        };
        getFiltered();

        }, [characterName])
    
    
    return (
    <div className='main-body'>
        <Header/>
        <Controls 
        characterName={characterName} 
        setCharacterName={setCharacterName}
       />
            {loading 
                ? (<h1 className='load-spin'>Loading...</h1>)
                : (
                    <main className='main-cnt'> 
                    <div></div>
                    <QuoteList filtered={filtered} quotes={quotes}/>
                    <div></div>
                    </main>
                  )}
            
    </div>
  )
}
