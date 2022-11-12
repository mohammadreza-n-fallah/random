import React, { useState } from "react";
import next from "next";
import { ReactDOM } from "react";
import randomColor from "randomcolor"
import { data } from "jquery";
import { Cipher } from "crypto";
import { Console } from "console";


/*
const Random=()=>{
  const [color,setColor]=useState("")
  const [letter,setLetter]=useState("")
  

  const Colori=()=>{
      setColor(randomColor())
      setLetter(randomString())
  }
  const randomString=()=> {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
      return (randomCharacter)
  }

  return(
    <div >
        <div className="contain" style={{}}>
              <div className="circle" style={{backgroundColor:color}}>{letter}</div>
              <div className="circle" style={{backgroundColor:color}}>{letter}</div>
              <div className="circle" style={{backgroundColor:color}}>{letter}</div>
              <div className="circle" style={{backgroundColor:color}}>{letter}</div> 
        </div>
        <br/>
              <button className="button" onClick={Colori}>click</button>
    </div>
  )
}
export default Random;
*/
/*
const Random=()=>{
  const [circle,setCircle]=useState("")
  const randomString=()=> {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
      return (randomCharacter)
  }
  const Ghati=()=>{
   
    let data:any=[];
    let i
    for(i=0;i<10;i++){
      data.push({
        color:randomColor(),
        string:randomString()

      })
    }
    setCircle(data);
    
   
    }
  }

export default Random;
*/
