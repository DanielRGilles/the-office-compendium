import React from 'react'


export default function FilterForm({characterName, setCharacterName}) {
    const charNameArr = ['Michael', 'Pam', 'Jim','Andy','Angela','Charles','Creed', 'Darryl', 'David', 'Deangelo', 'Dwight', 'Ed', 'Erin', 'Gabe', 'Holly', 'Jan', 'Jo', 'Josh', 'Kelly', 'Kevin', 'Oscar', 'Phyllis', 'Ryan', 'Stanley', 'Toby', 'Todd']
    return (
        <div>
            <select value={characterName}
            onChange={(event) => setCharacterName(event.target.value)}>
                <option value='all'>All</option>
            {charNameArr.map((chName) => (
                <option key={chName} value={chName}>{chName}</option>
            ))}
            </select>
        </div>
    )
}


