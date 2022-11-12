import React, { useState } from "react";
import next from "next";
import { ReactDOM } from "react";
import randomColor from "randomcolor"
import { data } from "jquery";
import { Cipher } from "crypto";
import { Console } from "console";

export default function App(){
    const [circle, setCircle] = useState([])
    const randomString = () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        return (randomCharacter)
    }
    const re = () =>{
        let ds : any = []
        for (let i=0;i<4;i++){
            ds.push ({
            color : randomColor(),
            str : randomString()
            })
        }
        setCircle(ds)
    } 
    return(
        <div className="App">
            <div className = "Contain" >{circle.map((item) => <div className = "Change" style = {{backgroundColor:item.color}}>{item.str}</div>)}</div>
            <button className = "Button" onClick = {()=>re()}>click</button>
        </div>
    )
}



