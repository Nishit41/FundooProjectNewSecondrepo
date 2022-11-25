import React from 'react'
import { useState, useEffect, useRef } from 'react'
import '../Notes/TakeNote.css'
import { postNotesApi } from '../../services/Dataservices'
function TakeNote(props) {



    const [expand, setExpand] = useState(false)

    const [note, setNote] = useState({
        title: "",
        description: "",
        isArchived: false,
        color: ""
    });

    const inputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };

        });
        console.log(note);
    }


    const addEvent = (event) => {


        event.preventDefault();
        props.passNotes(note);
        setNote({
            title: "",
            description: " "
        });
        postNotesApi(note).then((response) => {
            console.log(response);
        }).catch((error) => { console.log(error) })
    }


    const expandIt = () => {
        setExpand(true);
    }
    const ontwiceClckEvent = () => {
        setExpand(false);
    }
    function archiveDataNote1Handler() {
        console.log("Hello");
    }


    let containerRef = useRef();
    useEffect(() => {
        document.addEventListener("click", (event) => {
            if (!containerRef.current.contains(event.target)) {
                setExpand(false);
            }
        });
    })



    return (
        <div>
            <form ref={containerRef} className='note1' >
                {expand ?
                    <input className='note1-box'
                        type="text"
                        name="title"
                        value={note.title}

                        onChange={inputEvent}
                        placeholder="Title"
                    /> : null}



                {/*         
        <div className='Main-description-note-2'> */}
                <input id="text-area-note-2"
                    rows=''
                    cols=""
                    name='description'
                    value={note.description}
                    onChange={inputEvent}
                    onClick={expandIt}
                    placeholder="Take a note .." />

                {expand ?
                    <div className='botton-icons-parent'>
                        <div className='botton-icons-take-note-1'>
                            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100" rel="stylesheet" />
                            <span className="material-symbols-outlined " id='md-48'>notifications</span>
                            <span className="material-symbols-outlined " id='md-48'>person </span>
                            <span className="material-symbols-outlined " id='md-48'>palette</span>
                            <span className="material-symbols-outlined " id='md-48'>image</span>
                            <span className="material-symbols-outlined " id='md-48' onClick={archiveDataNote1Handler}>archive</span>
                            {/* <span className="material-symbols-outlined " id='md-48'>delete</span> */}
                            <span className="material-symbols-outlined " id='md-48'>more_vert</span>
                        </div>
                        <button id="button-name-close" onDoubleClick={ontwiceClckEvent} onClick={addEvent}>close</button>
                    </div> : ""}

            </form>
            
                 











        </div>
    )
}

export default TakeNote