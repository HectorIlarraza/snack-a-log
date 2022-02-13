import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";


function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snacks" element={<Index />}/>
        <Route path="/snacks/:id" element={<Show />} />
        <Route path="/snacks/new" element={<New />} />
        <Route path="/snacks/:id/edit" element={<Edit />} />
      </Routes>
    </main>
  );
}

export default App;
