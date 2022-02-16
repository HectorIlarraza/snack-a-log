import { Link } from "react-router-dom";

export default function Navbar() {
  return (
        <nav>
            <Link to={"/snacks"}>
                <h1>Snacks</h1>
            </Link>
            <button>
                <Link to={"/snacks/new"}>
                    New Snack
                </Link>
            </button>
        </nav>
    );
}
