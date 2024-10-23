import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Account/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Components/Account/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import CreateLead from "./Components/CreateLead/CreateLead";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/CreateLead" element={<CreateLead  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
