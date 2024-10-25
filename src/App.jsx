import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Account/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Components/Account/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import CreateLead from "./Components/CreateLead/CreateLead";
import UpdateLead from "./Components/UpdateLead/UpdateLead";
import Leads from "./Components/Leads/Leads";
import WaitingActivation from "./Components/Account/Register/WaitingActivation";
import PrivateRoute, { ReturnRouter } from "./Components/PrivateRouter/PrivateRouter";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<ReturnRouter />} >
          <Route path="/" element={<Login />} />
          <Route path="/Account/Register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/Account/WaitingActivation" element={<WaitingActivation />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CreateLead" element={<CreateLead />} />
          <Route path="/UpdateLead/:id" element={<UpdateLead />} />
          <Route path="/Leads" element={<Leads />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
