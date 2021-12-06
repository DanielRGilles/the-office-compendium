export default function SearchForm({ query, handleSubmit, handleWordChange }) {
    return (
      <form aria-label="searchForm" onSubmit={handleSubmit}>
        <h3>Search for a word or character!</h3>
        <label htmlFor="word-search">Query:</label>
        <input
          id="word-search"
          name="word"
          type="text"
          onChange={(e) => handleWordChange(e.target.value)}
          value={query}
        />
        <button type="submit">Search!</button>
      </form>
    )
  }