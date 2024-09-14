import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrugDetails from './components/DistributorDashboard/DrugDetails';
import DistributorDashboard from './components/DistributorDashboard/DistributorDashboard';
import ReceivedOrders from './components/DistributorDashboard/ReceivedOrders'; // Ensure path is correct
import OrderDrugs from "./components/DistributorDashboard/OrderDrugs.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DistributorDashboard />} />
        <Route path="/drug/:drugName" element={<DrugDetails />} />
        <Route path="/ReceivedOrders" element={<ReceivedOrders />} />
        <Route path="/order-drugs" element={<OrderDrugs />} />
      </Routes>
    </Router>
  );
};

export default App;
