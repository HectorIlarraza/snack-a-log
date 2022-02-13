import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackNew() {
    let navigate = useNavigate();
  
    const [snack, setsnack] = useState({
      name: "",
      image: "",
      fiber: "",
      protein: "",
      added_sugar: ""
    });
  
    const addSnack = (newSnack) => {
      axios.post(`${API}/snacks`, newSnack)
        .then((res) => navigate("/snacks"))
        .catch((err) => console.log(err));
    }
  
    const handleTextChange = (e) => {
      setsnack({ ...snack, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addSnack(snack);
    };
  
    return (
      <div className="Edit">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={snack.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Website"
          />
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="text"
            value={snack.image}
            onChange={handleTextChange}
          />
          <label htmlFor="fiber">Fiber:</label>
          <input
            id="fiber"
            type="number"
            name="fiber"
            value={snack.fiber}
            placeholder="Fiber amount"
            onChange={handleTextChange}
          />
          <label htmlFor="protein">Protein:</label>
          <input
            id="protein"
            type="number"
            name="protein"
            value={snack.protein}
            placeholder="protein amount"
            onChange={handleTextChange}
          />
          <label htmlFor="added_sugar">Added Sugar:</label>
          <input
            id="added_sugar"
            type="number"
            name="added_sugar"
            value={snack.added_sugar}
            placeholder="Sugar amount"
            onChange={handleTextChange}
          />
  
          <br />
  
          <input type="submit" />
          <Link to={`/snacks`}>
              <button>Cancel</button>
          </Link>
        </form>
      </div>
    );
}

export default SnackNew;
