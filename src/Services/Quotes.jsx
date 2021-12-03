
export const fetchQuotes = async () => {
    try {const fetchedQuote = await fetch('https://www.officeapi.dev/api/quotes/')
    const quotesObj = await fetchedQuote.json();
    const quotes = await quotesObj.data;
    const tenQ = await tenQuotes(quotes);
    return tenQ }
    catch {
        return [
            { content: 'This happened because of a daily limit on the API',
            _id: 1,
            character: { firstname: 'default', lastname: ' image '}}]
    }
}
export const tenQuotes =  (arr) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 10)
  return selected;
}
