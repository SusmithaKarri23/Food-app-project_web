import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Viewproducts = () => {
   let [Productname,setProductname]=useState("")
    let [Productprice,setProductprice]=useState("")
    let [Productqty,setProductqty]=useState("")
    let [allproducts,setallproducts]=useState([])
    
   let handleSubmit=async (e)=>{
    e.preventDefault()
    let payload={
      Productname,
      Productprice,
      Productqty
    }}
    useEffect(()=>{
      axios.get("http://localhost:4000/products")
      .then(({data})=>{setallproducts(data)})},[])
    const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/products/${id}`)
        .then(() => {
            alert("Product deleted successfully");
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        });
};
  return (
    <div className="container">
      {/* <h2>Viewproducts</h2> */}
      {allproducts.map((x)=>{
        return(
          <div className='card'>
            <h3>Product Name : {x.Productname}</h3>
            <h3>Product Price: {x.Productprice}</h3>
            <h3>product qty : {x.Productqty}</h3>
            <div id="buttons">
               <button onClick={()=>
                window.location.href=`/Updateproduct/${x.id}`
               }>Edit</button>
              <button onClick={() => handleDelete(x.id)}>
              Delete
             </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Viewproducts