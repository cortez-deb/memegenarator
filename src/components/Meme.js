import React from "react";
import image from "../logo.svg";
import memeData from '../components/memData'
function Section() {
  let budge
function memesdata(){
  const memeArray =memeData.data.memes
  const randomNumber= Math.floor(Math.random() * memeArray.length)
  const arry = memeArray[randomNumber]
  return arry
}
  function mapping(){
    memeData.data.memes.map((item)=>{
    console.log(item.url)
  })  
  }
  return ( 
    <main>

      <div className="row g-3 m-2">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Top Text"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Bottom Text"
              aria-label="Last name"
            />
          </div>
          <div className="col-12 mt-2">
          <button className="btn col-12" onClick={mapping} style={{background:"#672280"}}>Get a new meme image 🖼</button>
          </div>
        </div>
      </div>
      <div className="card">
        <img className="card-img" src={image} alt="Add Image" />
        <div className="card-img-overlay">
          <h5 className="card-title">
            {budge && (
              <div className="form-floating d-flex justify-content-center align-items-center">
                {budge}
              </div>
            )}
          </h5>
          
            <h3 className="card-text sticky-bottom pt-5 mt-5 start-50">This is lower text</h3>
          
        </div>
      </div>
    </main>
  );
}

export default Section;
