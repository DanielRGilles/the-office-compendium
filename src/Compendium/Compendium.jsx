import {  useState, useEffect } from "react";
import QuoteList from "../Components/QuoteList/QuoteList";
import { fetchQuotes, filteredQuotes, fetchSearchQuery, randomQuotes } from "../Services/Quotes";
import './Compendium.css'
import Header from "../Components/Header";
import Controls from "../Components/Controls/Controls";

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [query, setQuery ] = useState('');
  const [numOfRandom, setNum ] = useState();
    
  // on page load this hook will query the api for 40 quotes, then randomly grab 10 and pass those down to render
    useEffect(() => { 
        async function getQuotes() {
            const quoteList = await fetchQuotes();
            setQuotes(quoteList);
            setLoading(false);
        };
    getQuotes();
    }, [])
    
// this hook will listen for the character value to change and if so will fetch the max 40 quotes and render those that match the character name
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
    
// this form will pass down the query string so that a user can search for all quotes by a character name OR search the max 40 quotes for specific words/letters and return those
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const searched = await fetchSearchQuery(query)
      setQuotes(searched);
      setLoading(false);
      setQuery('');
      setCharacterName('');
  }
  // this event triggered on button click that will individually grab random quotes from the api
    const handleRandomSubmit =  async (event) => {
        event.preventDefault();
        setLoading(true); 
        const random = await randomQuotes(numOfRandom)
        setQuotes(random);
        setLoading(false);
         }


    return (
    <div className='main-body'>
        <Header/>
        <Controls 
        handleSubmit={handleSubmit}
        handleWordChange={setQuery}
        query={query}
        characterName={characterName} 
        setCharacterName={setCharacterName}
        numOfRandom={numOfRandom}
        setRandomQuotes={handleRandomSubmit}
        setNum={setNum}
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
