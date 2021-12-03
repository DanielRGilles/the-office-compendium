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
export const filteredQuotes = async (character) => {
    try {const fetchedQuote = await fetch('https://www.officeapi.dev/api/quotes/')
    const quotesObj = await fetchedQuote.json();
    const quotes = await quotesObj.data;
    const tenQ = await charQuotes(quotes, character);
    return tenQ }
    catch {
        const tenQ = await charQuotes(data, character)
        return tenQ;
    }
}
export const tenQuotes =  (arr) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 10)
  return selected;
}
export const charQuotes = (arr, character) => {
    let newArr = [];
    for(let item of arr){
      if(item.character.firstname === character) {
            item.push(newArr)
        }  
    }
   
    return newArr;
}
