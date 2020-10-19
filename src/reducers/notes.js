
const initialState = []

const notes = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_NOTES_SUCCESS":
            return [...action.notes]
        case "DELETE_NOTE":
            return {...state, notes: [...state.notes.filter(n => n.id !== action.id)]}
        default:
            return state
    }
} 

export default notes