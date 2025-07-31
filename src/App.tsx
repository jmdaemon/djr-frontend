import React from 'react';
// import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Portal from "./pages/Portal";
import NoPage from "./pages/NoPage";

// Forms
import RepairForm from "./pages/form/RepairForm";
import CustomerForm from "./pages/form/CustomerForm";
import WorkOrderForm from "./pages/form/WorkOrderForm";

// Interfaces
import Login from "./components/Login";
import Register from './components/Register';
import Overview from './components/Overview';
import Repairs from './components/Repairs';

import Manager from "./pages/interface/Manager";
import Worker from "./pages/interface/Worker";

// Create Customer Interface First
// Create Employee (Worker) Interface Second

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: Implement user input sanitization & validation */} 
        {/* TODO: Implement user rest api requests */} 
        {/* TODO: Implement basic styling */} 
        <Route path="/" element={<Portal />}/>
        <Route path="/customer/login" element={<Login/>} />
        <Route path="/customer/register" element={<Register/>} />
        <Route path="/customer/user/overview" element={<Overview/>} />
        <Route path="/customer/user/repairs" element={<Repairs/>} />

        {/* TODO: Complete Employee variants */} 
        <Route path="/employee/login" element={<Login/>} />
        <Route path="/employee/register" element={<Register/>} />
        <Route path="/employee/user/overview" element={<Overview/>} />
        <Route path="/employee/user/repairs" element={<Overview/>} />

        <Route path="/interface/manager" element={<Manager/>} />
        <Route path="/interface/worker" element={<Worker/>} />

        <Route path="/form/customer" element={<CustomerForm/>} />
        <Route path="/form/repair" element={<RepairForm/>} />
        <Route path="/form/work" element={<WorkOrderForm/>} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
