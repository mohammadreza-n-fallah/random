import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [value, setValue] = useState("")
  const [color, setColor] = useState("")
  const [text, setText] = useState("")

  var reg:any=/^#([0-9a-f]{3}){1,2}$/i;
  var str:any=""
  // console.log(reg.test('#ABC')); //true
  // console.log(reg.test('#AABBCC')); //true

  const Displaycolor = () => {
    if(reg.test(value)) {
      setColor(value);
  setText(IsTooDark(value))
    } else {
      alert("erorr");
    }
  }
/*
  const hexToRgb = (hex:any) => {
    // turn hex val to RGB
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
          }
        : null
}

// calc to work out if it will match on black or white better
const setContrast = (rgb:any) =>{ return(rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'black' : 'white'
setText(value) }
  
*/

/*
  const rgb:any = [255, 0, 0];

  // Randomly change to showcase updates
  setInterval(setContrast, 1000);
  
  function setContrast() {
    // Randomly update colours
    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);
  
    // http://www.w3.org/TR/AERT#color-contrast
    const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                        (parseInt(rgb[1]) * 587) +
                        (parseInt(rgb[2]) * 114)) / 1000);
    const textColour = (brightness > 125) ? 'black' : 'white';
    const backgroundColour = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    $('#bg').css('color', textColour); 
    $('#bg').css('background-color', backgroundColour);
  }
  */
/*
  function textcolor(color:any) {
    if (lightness(color: any)> 50) {
      return #rrrrrr ;// Lighter backgorund, return dark color
    } else {
      return #ffffff; // Darker background, return light color
    }
  }
 */


/*
function lightOrDark(color:any) {

  // Variables for red, green, blue values
  var r, g, b, hsp;
  
  // Check the format of the color, HEX or RGB?

  const color=()=>{}
  if (color.match(/^rgb/)) {

      // If RGB --> store the red, green, blue values in separate variables
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
      
      r = color[1];
      g = color[2];
      b = color[3];
  } 
  else {
      
      // If hex --> Convert it to RGB: http://gist.github.com/983661
      color = +("0x" + color.slice(1).replace( 
      color.length < 5 && /./g, '$&$&'));

      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
  }
  
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(
  0.299 * (r * r) +
  0.587 * (g * g) +
  0.114 * (b * b)
  );

  // Using the HSP value, determine whether the color is light or dark
  if (hsp>127.5) {

      return 'light';
  } 
  else {

      return 'dark';
  }
}
*/

const IsTooDark=(hexcolor:any)=>{
  var r = parseInt(hexcolor.substr(1,2),16);
  var g = parseInt(hexcolor.substr(3,2),16);
  var b = parseInt(hexcolor.substr(4,2),16);
  var rgb = ((r*299)+(g*587)+(b*114))/1000;
  console.log(rgb)
  // Return new color if to dark, else return the original
  return (rgb < 60) ? '#fff' : '#000';
}
//console.log(IsTooDark("#ffffff"))
  return (
    <div >
      <div className='container' style={{backgroundColor:color?color:"",color:text?text:""}}>HELLO</div>
      <br/>
      <input className='input' type="text" onChange={(e) => setValue(e.target.value)}/><button onClick={() => {Displaycolor()}} className='button' >click</button>
    
    
    </div>
  )
}