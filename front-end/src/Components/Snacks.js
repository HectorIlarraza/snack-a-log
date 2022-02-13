import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Snack from "./Snack.js";

const API = process.env.REACT_APP_API_URL;


function Snacks() {
    const [snacks, setSnacks] = useState([])
    
    useEffect(()=>{
        axios.get(`${API}/snacks`)
        .then((res)=>{
            setSnacks(res.data.payload)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className="Snacks">
        <div>

        {snacks.map((snack)=>{
            return(
        <Link key={snack.id} to={`/snacks/${snack.id}`}>
         <Snack  snack={snack}/>
        </Link>
             
         ) 
        })}
        </div>
    </div>
  )
}

export default Snacks