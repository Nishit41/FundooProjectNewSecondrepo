import axios from "axios";
const headerConfig = {
    headers: { Authorization: localStorage.getItem('token') }
}

export const postNotesApi = (note) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", note, headerConfig)
    return response;
}
export const getNoteList = () => {
    let res = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?", headerConfig)
    return res;
}

