import {  useState, useEffect } from "react";
import QuoteList from "../Components/QuoteList/QuoteList";
import { fetchQuotes, filteredQuotes } from "../Services/Quotes";
import './Compendium.css'
import Header from "../Components/Header";
import Controls from "../Components/Controls/Controls";

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [characterName, setCharacterName] = useState('')
    
    useEffect(() => { 
        async function getQuotes() {
            const quoteList = await fetchQuotes();
            setQuotes(quoteList);
            setLoading(false);
        };
    getQuotes();
    }, [])
    

    useEffect(() => {
        if (!characterName) return;
        async function getFiltered() {
            setLoading(true)
            if(characterName !== 'all') {    
                const quoteList = await filteredQuotes(characterName);
                setQuotes(quoteList);
                
            } else {
                const quoteList = await fetchQuotes();
                setQuotes(quoteList);
              } setLoading(false);
              
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
                    <QuoteList quotes={quotes}/>
                    <div></div>
                    </main>
                  )}
            
    </div>
  )
}
