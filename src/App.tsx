// import React from 'react';
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
import Customer from "./pages/interface/Customer";
import Manager from "./pages/interface/Manager";
import Worker from "./pages/interface/Worker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />}/>
        <Route path="/interface/customer" element={<Customer/>} />
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
