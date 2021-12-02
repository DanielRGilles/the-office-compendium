import { mungeQuotes } from "../Utils/utils";

export const fetchQuote = async () => {
    const fetchedQuote = await fetch('https://www.officeapi.dev/api/quotes/random')
    const quotesObj = await fetchedQuote.json();
    const quote = await quotesObj.data;
    const mungedQuotes = mungeQuotes(quote);
    console.log( mungedQuotes )
    return mungedQuotes;
}
export const tenQuotes = async () => {
    let newArr = [];
    for(let i = 0; i < 10; i++){
        const quote = await fetchQuote();
        newArr.push(quote)
    }
    return newArr;
}