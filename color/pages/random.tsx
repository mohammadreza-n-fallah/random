import React, { useState } from "react";
import next from "next";
import { ReactDOM } from "react";
import randomColor from "randomcolor"



 /*
const Random=()=>{
  const [color,setColor]=useState("")
const Color=()=> {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
return (
  <div className="container" style={{backgroundColor:}}>

  </div>
)
}
export default Random;
*/

const RandomColor=()=> {
    //let colors = [randomColor()]
    const [color, setColor] = useState("");
    const onHover=()=> {
      console.log(randomColor())
      //let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // var item = colors[Math.floor(Math.random()*colors.length)];
      setColor(randomColor())
        
    }
    return (
      <div
        style={{ backgroundColor: `${color}` ,width:"400px",height:"200px"}}
        onMouseEnter={onHover}
      >
        <h2 style={{ color: `#${color[0]}` }}>Interesting Heading</h2>
      </div>
    );
  }
  
  export default RandomColor;