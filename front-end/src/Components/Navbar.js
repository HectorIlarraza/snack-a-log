import { Link } from "react-router-dom";

export default function Navbar() {
  return (
        <nav>
            <h1>Snacks</h1>
            <Link to={"/snacks/new"}>New Snack</Link>
        </nav>
    );
}
