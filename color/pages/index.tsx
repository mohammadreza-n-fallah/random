import React, { useState } from "react";
import next from "next";
import { ReactDOM } from "react";
import randomColor from "randomcolor"
import { data } from "jquery";
import { Cipher } from "crypto";
import { Console } from "console";

export default function App(){
    const [circle,setCircle]=useState([])
    let ds:any=[]
    const randomString=()=> {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        return (randomCharacter)
    }
    const Re=()=>{
        for(let i=0;i<4;i++){
            ds.push({
            color:randomColor(),
            str:randomString()
            })
            setCircle(ds)
        }
    } 
    return(
        <div className="App">
            <div className="contain" >{circle.map((item) => <div className="change" style={{backgroundColor:item.color}}>{item.str}</div>)}</div>
            <button className="button" onClick={Re}>click</button>
        </div>
    )
}



