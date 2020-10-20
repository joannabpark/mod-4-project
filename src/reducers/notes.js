
const initialState = []

const notes = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_NOTES_SUCCESS":
            return [...action.notes]
        case "EDIT_NOTE_SUCCESS":
        case "POST_NOTE_SUCCESS":
            // return [...state, action.note]
        case "DELETE_NOTE":
            return state.filter(n => n.id !== action.id)
        default:
            return state
    }
} 

export default notes