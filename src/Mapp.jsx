import React from "react";
import { useState } from "react";
import Component from "./New.jsx";
import {bdata} from "./Data.jsx"

function App() {
    const [selectedId, setSelectedId] = useState(1); 

    const a = bdata[selectedId-1].img;
    const fav = document.querySelector("link[rel=icon]");
    fav.setAttribute("href", a);
    
    const handleClick = (img, id) => {
      
      const icon = document.querySelector("link[rel=icon]");
      icon.setAttribute("href", img);
      setSelectedId(id)
       
    };
    
    
    
    return (
      <div className='flex justify-center items-center h-full'>
        {bdata.map((data) => (
          <Component
            id={data.id}
            imageName={data.imageName}
            img={data.img}
            bgcolor={data.bgcolor}
            defaultColor ={data.defaultColor}
            handleClick={handleClick}
            selectedId={selectedId} 
            
          />
        ))}
      </div>
    );
  }
  
  export default App;