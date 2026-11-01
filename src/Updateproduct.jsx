import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"


const Updateproduct = () => {
  const{id}=useParams()
  const [Productname,setProductname]=useState("")
  const [Productprice,setProductprice]=useState("")
  const [Productqty,setProductqty]=useState("")
  useEffect(()=>{
    axios.get(`http://localhost:4000/products/${id}`)
    .then((res)=>{
      setProductname(res.data.Productname)
      setProductprice(res.data.Productprice)
      setProductqty(res.data.Productqty)
    })
  },[id])
  const handleUpdate=(e)=>{
    e.preventDefault()
  const Updateproduct={
    Productname,
    Productprice,
    Productqty
  }
  axios.put(`http://localhost:4000/products/${id}`,Updateproduct)
  .then(()=>{
    alert("product updated successfully")
  })
  .catch((err)=>{
    console.log(err)
  })
  }
  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleUpdate}>

                <label>Product Name:</label>
                <input
                    type="text"
                    value={Productname}
                    onChange={(e) => setProductname(e.target.value)}
                />

                <br /><br />

                <label>Product Price:</label>
                <input
                    type="number"
                    value={Productprice}
                    onChange={(e) => setProductprice(e.target.value)}
                />

                <br /><br />

                <label>Product Quantity:</label>
                <input
                    type="number"
                    value={Productqty}
                    onChange={(e) => setProductqty(e.target.value)}
                />

                <br /><br />

                <button type="submit">Update Product</button>

            </form>
        </div>
    );
};

export default Updateproduct;
      