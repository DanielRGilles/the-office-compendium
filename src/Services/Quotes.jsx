import { data } from '../Backup/BackupData.js'

export const fetchQuotes = async () => {
    try {const fetchedQuote = await fetch('https://www.officeapi.dev/api/quotes/')
    const quotesObj = await fetchedQuote.json();
    const quotes = await quotesObj.data;
    const tenQ = await tenQuotes(quotes);
    return tenQ }
    catch {
        const tenQ = await tenQuotes(data)
        return tenQ;
    }
}
export const filteredQuotes = async (characterString) => {
    try {const fetchedQuote = await fetch('https://www.officeapi.dev/api/quotes/')
    const quotesObj = await fetchedQuote.json();
    const quotes = await quotesObj.data;
    const tenQ = await charQuotes(quotes, characterString);
    return tenQ }
    catch {
        const tenQ = await charQuotes(data, characterString)
        return tenQ;
    }
}
export const tenQuotes =  (arr) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 10)
  return selected;
}
export const charQuotes = (arr, character) => {
    const filtered = arr.filter(item => item.character.firstname === character )
    return filtered;
}
export const fetchSearchQuery = async (query) => {
    try {const fetchedQuote = await fetch('https://www.officeapi.dev/api/quotes/')
    const quotesObj = await fetchedQuote.json();
    const quotes = await quotesObj.data;
    const tenQ = await searchQuotes(quotes, query);
    return tenQ }
    catch {
        const tenQ = await searchQuotes(data, query)
        return tenQ;
    }
}
export const searchQuotes = async (arr, query) => {
    
    const nameSearched = arr.filter(item => item.character.firstname === query )
    const quoteSearched = arr.filter( item => item.content.includes(query))
    
    return nameSearched.concat(quoteSearched);
}
// || item.content.includes(query)