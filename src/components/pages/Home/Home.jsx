import "./Home.css";
import React from "react";
import { useState } from "react";

function Home() {
  const [inputText,setInputText] =useState("")
  const play = ()=>{
    console.log("click play: " + inputText)
  }
  return (
    <div className="home" >
      <h1 className="h1Style" data-testid="h1-home">Home</h1>
      <label htmlFor="textInput">enter text</label>
      <input type="text" name="textInput" data-testid="text-input-id" 
      onChange={(e)=>setInputText(e.target.value)}/>
      <button data-testid="button-no1" className="btn-style" onClick={play}>
        Click Here
        </button>
    </div>
  );
};

export default Home;
