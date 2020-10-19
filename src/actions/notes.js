
export const fetchNotesSuccess = (notes) => {
    return {
        type: 'FETCH_NOTES_SUCCESS',
        notes: notes
    }
}

export const deleteNote = (id) => {
    return {
      type: 'DELETE_NOTE',
      id: id
    }
  }