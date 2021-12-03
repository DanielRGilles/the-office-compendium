import React from 'react'
import FilterForm from '../Forms/FilterForm'
import SearchForm from '../Forms/SearchForm'

export default function Controls({characterName, setCharacterName, query, handleWordChange, handleSubmit}) {
    return (
        <div>
            <SearchForm query={query} handleWordChange={handleWordChange} handleSubmit={handleSubmit}/>
            <FilterForm characterName={characterName} setCharacterName={setCharacterName}
            />
        </div>
    )
}
