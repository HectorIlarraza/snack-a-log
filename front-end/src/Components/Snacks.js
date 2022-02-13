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
    <article className="Snacks">
        <section className="Snack">
            {snacks.map((snack)=>{
                return(
                    <h4>
                        <Link key={snack.id} to={`/snacks/${snack.id}`}>
                            <Snack  snack={snack}/>
                        </Link>
                    </h4>
            )  
            })}
        </section>
    </article>
  )
}

export default Snacks