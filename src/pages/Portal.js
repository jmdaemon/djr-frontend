import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Portal = () => {
  return (
    <>
    <nav>
      <h1> Frontend </h1>

      <h2> Portal </h2>
      <ul>
        <li> <Link to="/"> Component Dashboard </Link> </li>
      </ul>

      <h2>Forms</h2>
      <ul>
        <li> <Link to="form/repair"> Repair Form </Link> </li>
        <li> <Link to="form/work"> Work Form </Link> </li>
      </ul>

      <h2>Interfaces</h2>
      <ul>
        <li> <Link to="interface/customer"> Customer </Link> </li>
        <li> <Link to="interface/manager"> Manager </Link> </li>
        <li> <Link to="interface/worker"> Worker </Link> </li>
        <li> Inventory </li>
      </ul>
      </nav>
    <Outlet />
    </>
  );
};

export default Portal;
