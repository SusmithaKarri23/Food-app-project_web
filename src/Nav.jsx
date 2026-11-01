import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <div id="navbar">
        <div>
          <Link to="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqeNkAi2TaajjBX-p0IvFfFyos-5p55sRVSRdcWXqhtw&s=10" alt="" /></Link>
           
        </div>
        <div className='navlink'>
            <Link to="/Viewproducts">Viewproducts</Link>
            <Link to="/Addproducts">Addproducts</Link>
            
        </div>
    </div>
  )
}

export default Nav