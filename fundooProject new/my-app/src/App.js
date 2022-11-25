 import SignIn from './pages/signin/signin';
// import SignUp from './pages/signup/signup';
import Dashboard from './component/Dashboard';
//  import Header from "./component/Header/Header";
// import './component/Header/Header.css';
//  import TakeNote from "./component/Notes/TakeNote";
//  import TakeNote3 from "./component/Notes/TakeNote3";
// import { useState } from "react";
import Router from './component/Router/Router';
function App() {

  //  const [addItem, setAddItem] = useState([]);

  //  const addNotes = (note) => {
  //  setAddItem((prevData) => {
  //  return [...prevData, note]
  //    })
  //   console.log(note);
  //  }
  return (
    <div className="App">
      {/* <SignIn/>   */}
      <Router/>
       {/* <SignUp/> */} 
         {/* <Dashboard/>   */}
        {/* <TakeNote3/> */}
  
      {/* <TakeNoteTwo/>  */}
      {/* <TakeNoteThree/> */}
      {/* <Header/>
      <TakeNote passNotes={addNotes}/>
   
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
        }      */}
      
    </div>
  );
}

export default App;
