import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
function Navbar() {
  return (
        <nav className='navbar rounded mt-3 col shadow' style={{background:"#672280",height:"3rem"}}>
            <div className='container-fluid'>
                      <img src="https://assets.stickpng.com/thumbs/588359402c9eb99faafea8ba.png" className='me-2' style={{height:"20px",background:"white",float:"left"}}/>
                        <small>Meme Generator</small>
                        <small style={{float:"right"}}>React Course-Project 3</small>
            </div>
        </nav>
  )
}

export default Navbar