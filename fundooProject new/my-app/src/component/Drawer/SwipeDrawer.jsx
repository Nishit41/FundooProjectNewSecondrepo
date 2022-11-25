import React, { useState } from 'react'
import { getNoteList } from '../../services/Dataservices' 
import Archivenotes from '../ArchiveNotes/ArchiveNotes'

function Drawer(props) {
    const[archiveNotes,setarchivedNotes]= useState([])
    const[ sender , setSender] = useState(false)

     const GetNotes = () => {
          getNoteList().then((resp) => {
            //   setarchivedNotes(resp.data.data.data)
              console.log("response from getNotes funcion"+ resp.data.id);

          })
              .catch((error) => { console.log(error) })
      }
     React.useEffect(() => { GetNotes() }, [])
     
     const noteSender = ()=>{
        console.log("hello iam in note sender");
        if(archiveNotes.isArchived = true)
        setSender(true)
     }
  






    const dataforRemainder = "Remainder"
    const dataforEdit = "Edit"
    const dataforArchive = "archive"
    const dataforDelete = "Trash"
    const data = "Keep"
    const dataForImage = <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' className='head-img-dimension' />
    // const bookicon = data+dataForImage





    return (
        <span className='SwipeDrawer'>

            <span className='md-48' onClick={() => { props.alert(dataForImage, data) }}>Notes</span>
            <span className='md-48' onClick={() => props.alert(dataforRemainder)}>Reminder</span>
            <span className='md-48' onClick={() => props.alert(dataforEdit)}>edit</span>
            <span className='md-48' onClick={() => { props.alert(dataforArchive); GetNotes();}}>archive</span>
            <span className='md-48' onClick={() => props.alert(dataforDelete)}>Trash</span>
        </span>
    )
}

export default Drawer