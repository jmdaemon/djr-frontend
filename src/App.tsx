// import React from 'react';
// import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from "./pages/Layout";
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
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  // return (
  // <div className="App">
  //   <h1>Component Dashboard</h1>

  //   <h2>Forms</h2>
  //   <ul>
  //     <li> <a href="form/repair"> Repair Form </a> </li>
  //     <li> <a href="form/work"> Work Form </a> </li>
  //   </ul>

  //   <h2>Interfaces</h2>
  //   <ul>
  //     <li> Customer </li>
  //     <li> Manager </li>
  //     <li> Worker </li>
  //     <li> Inventory </li>
  //   </ul>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/interface/customer" element={<Customer/>} />
          <Route path="/interface/manager" element={<Manager/>} />
          <Route path="/interface/worker" element={<Worker/>} />

          <Route path="/form/customer" element={<CustomerForm/>} />
          <Route path="/form/repair" element={<RepairForm/>} />
          <Route path="/form/work" element={<WorkOrderForm/>} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
