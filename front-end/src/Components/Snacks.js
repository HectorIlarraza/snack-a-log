import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Snack from "./Snack.js";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        setSnacks(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <div className="Snacks">
        <article>
        {snacks.map((snack) => {
            return (
            <div className="Snack" key={snack.id}>
                <Link to={`/snacks/${snack.id}`}>
                    <h4>{snack.name}</h4>
                    <Snack snack={snack} />
                </Link>
            </div>
            );
        })}
        </article>
      </div>
  );
}

export default Snacks;
