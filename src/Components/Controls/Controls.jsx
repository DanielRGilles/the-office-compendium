import React from 'react'
import FilterForm from '../Forms/FilterForm'
import SearchForm from '../Forms/SearchForm'

export default function Controls({characterName, setCharacterName}) {
    return (
        <div>
            <FilterForm characterName={characterName} setCharacterName={setCharacterName}
            />
        </div>
    )
}
