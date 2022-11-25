import React, { useState } from 'react'
import '../Header/Header.css'
// import logo from '../emailprofileicon.png'
 import Drawer from '../Drawer/SwipeDrawer';



function HeaderComponent() {

  const [drawer, setDrawer] = useState(false);
  const [data,setData] = useState("");  



  function menuHandler() {
    console.log("menu button");
    setDrawer(!drawer);
    console.log(drawer);
   }


   function headerProps(...item){  
      console.log("from Header Component"+item);
      setData(item)

   }
   



  return (
    <>
      <header className='header-container'>
      {/* <style>
      .material-symbols-outlined {
              font-variation-settings:
                     'FILL' 0,
                    'wght' 600,
                       'GRAD' 0,
                     'opsz' 48}
</style> */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100" rel="stylesheet" 
        />
        <span class="material-symbols-outlined" id='md-48' onClick={menuHandler}>menu</span>
       
        {/* <button className='button-properties' ><img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png'
          className="head-img-dimension" alt='img-book-png' id='book-img'></img></button> */}
        <button className='head-text'>{data}</button>
        <input className='head-search-box' type="text" id='head-search-box' placeholder="   Search.." />
        <span className="material-symbols-outlined"id='md-48'  
        >refresh</span>
        <i className="material-symbols-outlined" id='md-48'>grid_view</i>
        <span className="material-symbols-outlined"id='md-48'>settings</span>
        <span className="material-symbols-outlined"id='md-48'>apps</span>
        <button className='button-properties'>N</button>

        {/* <button className='button-properties'><img src='https://cdn-icons-png.flaticon.com/128/2976/2976215.png' alt='img.png'  ></img></button>
            <button className='button-properties'><img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png'
            className="head-img-dimension" alt='img-book-png' id='book-img'></img></button>
            <button className='head-text'>Keep</button>
            <input className='head-search-box' type="text" placeholder="Search.."/>
            <button className='button-properties'><img src='https://cdn-icons-png.flaticon.com/128/8391/8391685.png' className="head-img-dimension" alt='refersh' width={45}></img></button>
            <button className='button-properties'>
            <img src="https://img.icons8.com/windows/512/view-headline.png" alt='list-view'/></button>
            <button className='button-properties'><img src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png" alt='list-view'
            className="head-img-dimension"/></button>
            <button><img src="https://cdn.iconscout.com/icon/free/png-128/dots-nine-3602636-3003318.png" alt='nine-dots-icon' id="nine-dots-icon"/></button>
            <button className='button-properties'><img src={logo} alt='email'/></button>
          */}
      </header>
       {drawer?< Drawer alert = {headerProps}/>:""} 
     

     
      
      
     
      
    </>


  )
}

export default HeaderComponent



 {/* <div className='Main-content-note-1'>
         <input className='note1-box' type="text" placeholder="Take a note" />
        </div> */}
{/* <div className='note1'>
        <input className='note1-box' type="text" placeholder="Take a note">
        </input>


        <span className='menu-icons'>
          {/* <span class="material-symbols-outlined">New</span> */}
      //     <span class="material-symbols-outlined">grid_view</span>
      //     <span class="material-symbols-outlined">apps</span>
      //     <span class="material-symbols-outlined">settings</span>
      //   </span>
      // </div>

      // <div className='Main-content-note-2'>
      //   <textarea id="text-area-note-2" name="w3review" rows="auto" cols="50" placeholder='  Title
      //    take a note'></textarea>
      //   <button id="button-name-close">close</button>
      // </div> 