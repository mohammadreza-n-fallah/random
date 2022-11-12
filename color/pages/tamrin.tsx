import React, { useState } from "react";
import next from "next";
import { ReactDOM } from "react";



const Displaycolor=()=>{
    const [value,setValue]=useState("")
    const [color,setColor]=useState("")
    const [text,setText]=useState("")
    var pat:any=/^#([0-9a-f]{3}){1,2}$/i;
  
  const Check=()=>{
    if(pat.test(value)){
      setColor(value);
      setText(Brightness(value))
    }
    else{
      alert("erorr")
    }
  }
  const Brightness=(hex:any)=>{
    var r=parseInt(hex.substr(1.2),16)
    var g=parseInt(hex.substr(3.2),16)
    var b=parseInt(hex.substr(4.2),16)
    var rgb = ((r*299)+(g*587)+(b*114))/1000;
    return (rgb < 60) ? '#fff' : '#000';
  }
    return(
    <div>
        <div className="container" style={{backgroundColor:color?color:"",color:text?text:"",}}>color</div>
        <br/>
        <div className="joft">
          <input className="input" type="text" onChange={(a) => setValue(a.target.value)} /><button className="button" onClick={() => Check()}>click</button>
        </div>
    </div>
    )
  }
  export default Displaycolor;
  