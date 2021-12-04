

export default function RandomForm({numOfRandom, setRandomQuotes, setNum}) {
    return (
        <form onSubmit={setRandomQuotes}>
             <select value={Number(numOfRandom)} onChange={(e) => setNum(e.target.value)}>
                <option value='1' >1</option>
                <option value='5' >5</option>
                <option value='10' >10</option>
                <option value='25' >25</option>
            </select>
            <button type='submit'>Get Random Quotes</button>
        </form>
    )
}
