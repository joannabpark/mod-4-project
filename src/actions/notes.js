
export const fetchNotesSuccess = (notes) => {
    return {
        type: 'FETCH_NOTES_SUCCESS',
        notes: notes
    }
  }

export const postNoteSuccess = (notes) => {
  return {
      type: 'POST_NOTE_SUCCESS',
      notes: notes
  }
}

export const editNoteSuccess = (notes) => {
  return {
      type: 'EDIT_NOTE_SUCCESS',
      notes: notes
  }
}

export const deleteNote = (id) => {
    return {
      type: 'DELETE_NOTE',
      id: id
    }
  }