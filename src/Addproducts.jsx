import axios from 'axios'
import React from 'react'
import {useState} from'react'
import { toast } from 'react-toastify'

const Addproducts = () => {
  let [Productname,setProductname]=useState("")
  let [Productprice,setProductprice]=useState("")
  let [Productqty,setProductqty]=useState("")

  let handleSubmit=async (e)=>{
    e.preventDefault()
    let payload={
      Productname,
      Productprice,
      Productqty
    }
     await
      axios.post("http://localhost:4000/products", payload)
      toast.success("product added successfully")
      setProductname("")
      setProductprice("")
      setProductqty("")
  }
  return (
    <div id="container">
      <form onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <label htmlFor="">Product Name</label>
        <input type="text" 
        value={Productname}
        required
        onChange={(e)=>setProductname(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Product Price</label>
        <input type="number" 
        value={Productprice}
        required
        onChange={(e)=>setProductprice(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Product Quantity</label>
        <input type="number"
        value={Productqty}
        required
        onChange={(e)=>setProductqty(e.target.value)} 
        />
        <br />
        <br />
        <button type="submit">Add Products</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}

export default Addproducts