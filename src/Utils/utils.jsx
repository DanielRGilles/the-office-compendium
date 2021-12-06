export const mungeQuotes = (arr) => {
    arr.map((item) =>  { let quote = { id : item._id,
        firstname : item.character.firstname,
        lastname : item.character.lastname,
        quote : item.content}
        return quote}
        )
}