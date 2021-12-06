import React from 'react'
import FilterForm from '../Forms/FilterForm'
import SearchForm from '../Forms/SearchForm'
import RandomForm from '../Forms/RandomForm'

export default function Controls({characterName, setCharacterName, query, handleWordChange, handleSubmit, numOfRandom, setRandomQuotes, setNum}) {
    return (
        <div>
            <SearchForm query={query} handleWordChange={handleWordChange} handleSubmit={handleSubmit}/>
            <FilterForm characterName={characterName} setCharacterName={setCharacterName}
            />
            <RandomForm numOfRandom={numOfRandom} setRandomQuotes={setRandomQuotes} setNum={setNum}/>
        </div>
    )
}
