import React from 'react';
const Customer = () => {
  return (
    <div>
      <h1>Customer Interface</h1>

      <h2>Account Information </h2>

      <p>Here is where we will show the customer's account information</p>
      <ul>
        <li> View Account Profile </li>
        <li> Edit Account Details </li>
      </ul>

      <h2>Invoices</h2>
      <p>Here is where we will show the customer's transaction information and history </p>

      <h2>Repair History</h2>
      <p>Here is where we will show the current and previous device repairs history </p>

      <h2> Frontend Roadmap </h2>
      <ol>
        <li> Determine requirements of all users </li>
        <li> Sketch ui/ux wireframe for all interfaces and forms </li>
        <li> Design components </li>
        <li> Style components </li>
        <li> Create front-end data structures for back-end model data </li>
        <li> Integrate front-end with backend using HTTP requests via Axiom or fetch </li>
      </ol>


    </div>
  );
};

export default Customer;
