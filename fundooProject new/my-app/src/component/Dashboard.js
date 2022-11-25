import React from 'react'
import Header from "./Header/Header"
import TakeNote from './Notes/TakeNote';
import TakeNote3 from './Notes/TakeNote3';
import { useState } from "react";
import SideNavIcons from './Drawer/sidenavicons';


function Dashboard() {
      const [addItem, setAddItem] = useState([]);

     const addNotes = (note) => {
         setAddItem((prevData) => {
             return [...prevData, note]
         })
         console.log(note);
     }
    return (
        <div>
            
            <Header />
             <SideNavIcons/>
           
            <TakeNote
             passNotes={addNotes} 
             /> 
            

             {
                addItem.map((val, index) => {
                    if (val.title !== "" && val.content !== "") {
                        return (<TakeNote3
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                        />
                        )
                    };
                }
                )
            } 


        </div>
    )
}

export default Dashboard