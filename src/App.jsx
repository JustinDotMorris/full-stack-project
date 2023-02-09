import "./App.scss";
import Nav from "./Components/Nav/Nav";
import ViewPlants from "./Containers/ViewPlants/ViewPlants";
import CreatePlant from "./Containers/CreatePlant/CreatePlant";
import EditPlant from "./Containers/EditPlant/EditPlant";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant" element={<ViewPlants />} />
        <Route path="/plant/create" element={<CreatePlant />} />
        <Route path="/plant/:id" element={<EditPlant />} />
      </Routes>
    </Router>
  );
}

export default App;
