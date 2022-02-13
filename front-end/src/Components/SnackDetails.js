import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import HeartHealth from "./HeartHealth.js"

const API = process.env.REACT_APP_API_URL

function SnackDetails() {
    const [snack, setSnack ] = useState([]);
    let { id } = useParams();
    // let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/snacks/${id}`)
        .then((res)=>{
            setSnack(res.data.payload)
        }).catch((err)=>{
            console.log(err)
        })
    }, [id]);
  return (
    <article>
        <aside>
            <h4>the snack health</h4>
            <HeartHealth  snackHealth={snack.is_healthy}/>
        </aside>
        <div>
            <h5>{snack.name}</h5>
            <img src={snack.image} alt="food" />
            <h6>Protein: {snack.protein}</h6>
            <h6>Fiber: {snack.fiber}</h6>
            <h6>Added Sugar: {snack.added_sugar}</h6>
        </div>
        <div className="showNavigation">
            <div>
                <Link to="/snacks">
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <button>Delete</button>
            </div>
        </div>

    </article>
  )
}

export default SnackDetails