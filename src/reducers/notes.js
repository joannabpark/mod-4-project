
const initialState = []

const notes = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_NOTES_SUCCESS":
            return [...action.notes]
        // case "SORT_ALPHABETICALLY":
        //     //const alphabeticalSort = state.sort(alphabetically)
        //     // return alphabeticalSort
        // case "SORT_BY_DATE":
        //     const notes = [action.notes.target.value]
        //     notes.reverse()
        //     return notes
        case "EDIT_NOTE_SUCCESS":
        case "POST_NOTE_SUCCESS":
        case "DELETE_NOTE":
            return state.filter(n => n.id !== action.id)
        default:
            return state
    }
} 

export default notes