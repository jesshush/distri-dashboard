import React from "react";
import { Link } from "react-router-dom"; 
import TotalInventoryChart from './TotalInventory';
import ReorderAlertsChart from './ReorderAlert';
import ShipmentStatusChart from './ShipmentStatus';
import DrugDemandChart from './DrugDemand';
import ReceivedOrders from './ReceivedOrders';

import OrderFulfillmentChart from './OrderFulfillment';
import styles from "../DistributorDashboard/DistributorDashboard.module.css";

function DistributorDashboard() {
    const toggleList = (id) => {
        const list = document.getElementById(id);
        const items = list.querySelectorAll('.more-items');

        items.forEach(item => {
            if (item.style.display === 'none') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
        );

        const btnText = document.querySelector(`#${id} + button`).innerText;
        if (btnText === 'Show More') {
            document.querySelector(`#${id} + button`).innerText = 'Show Less';
        } else {
            document.querySelector(`#${id} + button`).innerText = 'Show More';
        }

    };

    return (
        <>
                    <div className="container my-4">
            {/* Header Section */}
            <header className="text-center mb-4">
                <h1>Distributor Dashboard</h1>
                <p className="lead">
                <Link 
                to="/order-drugs" 
                className="btn" 
                style={{ backgroundColor: '#153759', color: '#fff' }}
            >
                Order Drugs
            </Link>
                </p>
            </header>

                            {/* Metrics Overview (Cards) Section */}
            <section className="row mb-2">
                <div className="col-md-3 mb-4">
                    <Link to="/ReceivedOrders" className="text-decoration-none">
                        <div className={`${styles.detailCard} text-center`}>
                            <div className="card-body">
                                <h5 className="card-title">Total Inventory</h5>
                                <p className="card-text">18,000 Units</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-3 mb-4">
                    <div className={`${styles.detailCard} text-center`}>
                        <div className="card-body">
                            <h5 className="card-title">Reorder Alerts</h5>
                            <p className="card-text">75%</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className={`${styles.detailCard} text-center`}>
                        <div className="card-body">
                            <h5 className="card-title">Incoming Shipments</h5>
                            <p className="card-text">5</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className={`${styles.detailCard} text-center`}>
                        <div className="card-body">
                            <h5 className="card-title">Outgoing Shipments</h5>
                            <p className="card-text">10</p>
                        </div>
                    </div>
                </div>
            </section>

                {/* <!-- Charts Section --> */}
                <section className="row mb-8">
                    <div className="col-md-8 mb-5">
                        <div className={styles.card}>
                            <div className="card-body">
                                <h5 className="card-title">Total Inventory</h5>
                                {/* <canvas id="total-inventory-chart"></canvas> */}
                                <TotalInventoryChart />
                                <small className="form-text text-muted">Stock levels by drug type, including near-expiry and allocated for shipment</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className={styles.card}>
                            <div className="card-body">
                                <h5 className="card-title">Reorder Alerts</h5>
                                {/* <canvas id="reorder-alerts-chart"></canvas> */}
                                <ReorderAlertsChart />
                                <div className="reorder-alerts">
                                    <p>Drug A: <strong>Low Stock</strong> (150 units left)</p>
                                    <p>Drug B: <strong>Reorder Needed</strong> (75 units left)</p>
                                    <p>Drug C: <strong>Low Stock</strong> (100 units left)</p>
                                    <p>Drug D: <strong>Reorder Needed</strong> (50 units left)</p>
                                    <p>Drug E: <strong>Sufficient Stock</strong> (500 units left)</p>
                                </div>
                                <small className="form-text text-muted">Alerts for drugs nearing low stock levels</small>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Details Section --> */}
                <section className={`row mb-4`}>
                    {/* <!-- Incoming Shipments Section --> */}
                    <div className={`${styles.detail} col-md-6 mb-3`}>
                        <div className={styles.card}>
                            <div className="card-body">
                                <h5 className="card-title">Incoming Shipments</h5>
                                <ul id="incoming-list" className="list-unstyled">
                                    <li><strong>Shipment #12348:</strong> 1,000 Units from ABC Manufacturers</li>
                                    <li><strong>Shipment #12349:</strong> 750 Units from XYZ Labs</li>
                                    <li><strong>Shipment #12350:</strong> 500 Units from DEF Suppliers</li>
                                    <li className="more-items" style={{ display: 'none' }}><strong>Shipment #12356:</strong> 1,000 Units from GHI Corp</li>
                                    <li className="more-items" style={{ display: 'none' }}><strong>Shipment #12357:</strong> 800 Units from JKL Ltd</li>
                                </ul>
                                <button className="btn btn-primary" onClick={() => toggleList('incoming-list')}>Show More</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Outgoing Shipments Section --> */}
                    <div className={`${styles.detail} col-md-6 mb-3`}>
                        <div className={styles.card}>
                            <div className="card-body">
                                <h5 className="card-title">Outgoing Shipments</h5>
                                <ul id="outgoing-list" className="list-unstyled">
                                    <li><strong>Shipment #12351:</strong> 1,200 Units to Hospital A</li>
                                    <li><strong>Shipment #12352:</strong> 850 Units to Pharmacy B</li>
                                    <li><strong>Shipment #12353:</strong> 600 Units to Clinic C</li>
                                    <li><strong>Shipment #12354:</strong> 1,500 Units to Hospital D</li>
                                    <li><strong>Shipment #12355:</strong> 1,000 Units to Pharmacy E</li>
                                    <li className="more-items" style={{ display: 'none' }}><strong>Shipment #12356:</strong> 1,200 Units to Clinic F</li>
                                    <li className="more-items" style={{ display: 'none' }}><strong>Shipment #12357:</strong> 1,000 Units to Hospital G</li>
                                    <li className="more-items" style={{ display: 'none' }}><strong>Shipment #12358:</strong> 800 Units to Pharmacy H</li>
                                    <li className="more-items" style={{ display: 'none' }}><strong>Shipment #12359:</strong> 1,100 Units to Clinic I</li>
                                    <li className="more-items" style={{ display: 'none' }}><strong>Shipment #12360:</strong> 900 Units to Hospital J</li>
                                </ul>
                                <button className="btn btn-primary" onClick={() => toggleList('outgoing-list')}>Show More</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Shipment Tracking Section --> */}
                <section className={`${styles.card} mb-4`}>
                    <h5>Shipment Tracking</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <div className="card-body m-auto" style={{width: '400px'}}>
                                    {/* <h5 className="card-title">Shipment Status Breakdown</h5> */}
                                    {/* <canvas id="shipment-status-chart"></canvas> */}
                                    <ShipmentStatusChart />
                                    <small className="form-text text-muted">Distribution of shipment statuses (e.g., In Transit, Delayed, Delivered)</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className={styles.trackingDetails}>
                                <div className="card-body">
                                    <h5 className="card-title">Shipment Tracking Details</h5>
                                    <ul className="list-unstyled">
                                        <li className="tracking-item">
                                            <h6>Shipment #12351</h6>
                                            <p><strong>ETA:</strong> Aug 22, 2024</p>
                                            <p><strong>Issues:</strong> Delay due to weather</p>
                                            <p><strong>Location:</strong> In Transit - Current Location: City X</p>
                                        </li>
                                        <hr />
                                        <li className="tracking-item">
                                            <h6>Shipment #12352</h6>
                                            <p><strong>ETA:</strong> Aug 23, 2024</p>
                                            <p><strong>Issues:</strong> No Issues</p>
                                            <p><strong>Location:</strong> In Transit - Current Location: City Y</p>
                                        </li>
                                        <hr />
                                        <li className="tracking-item">
                                            <h6>Shipment #12353</h6>
                                            <p><strong>ETA:</strong> Aug 24, 2024</p>
                                            <p><strong>Issues:</strong> Minor Delay</p>
                                            <p><strong>Location:</strong> In Transit - Current Location: City Z</p>
                                        </li>
                                        {/* <!-- Add more tracking items as needed --> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Order Management Section --> */}
                <section className={`${styles.card} mb-4`}>
                    <h5>Order Management</h5>
                    <div className="row">
                        <div className="col-md-3 mb-4">
                        <div className={`${styles.detailCard} text-center`}>
                                <div className="card-body">
                                    <h6 className="card-title">Pending Orders</h6>
                                    <p className="card-text">Count: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={`${styles.detailCard} text-center`}>
                            <div className="card-body">
                                <h6 className="card-title">Order History</h6>
                                <p className="card-text">Count: 25</p>
                            </div>
                            </div>
                        
                        </div>
                        <div className="col-md-3 mb-4">
                        <div className={`${styles.detailCard} text-center`}>
                                <div className="card-body">
                                    <h6 className="card-title">Order Priority</h6>
                                    <p className="card-text">Count: 5</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                        <div className={`${styles.detailCard} text-center`}>
                                <div className="card-body">
                                    <h6 className="card-title">Order Details</h6>
                                    <p className="card-text"><a href="#">All Orders</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Drug Demand by Destination (Bar Chart) --> */}
                    <div className={`p-3 mb-4`}>
                        <div className="card-body">
                            <h5 className="card-title">Drug Demand by Destination</h5>
                            {/* <canvas id="drug-demand-stacked-bar-chart"></canvas> */}
                            <DrugDemandChart />
                            <small className="form-text text-muted">Drug demand across different regions or institutions</small>
                        </div>
                    </div>
                </section>

                {/* <!-- New Sections --> */}
                <section className="row">
                    {/* <!-- Left Section --> */}
                    <div className="col-md-6 mb-4">
                    <div className={styles.card}>
                            <div className="card-body">
                                <h5 className="card-title">Overview with Other Entities</h5>
                                <hr />
                                {/* <!-- Supplier Management --> */}
                                <div className="mb-4">
                                    <h6 className="card-title mb-2">Supplier Management</h6>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Manufacturer</th>
                                                <th>Providing Drugs</th>
                                                <th>Batch Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!-- Sample Data --> */}
                                            <tr>
                                                <td>Manufacturer A</td>
                                                <td>Drug X</td>
                                                <td>Batch 123</td>
                                            </tr>
                                            <tr>
                                                <td>Manufacturer B</td>
                                                <td>Drug Y</td>
                                                <td>Batch 456</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-primary" onclick={() => window.location.href = 'supplier_management.html'}>Show More</button>
                                </div>
                                <hr />
                                {/* <!-- Transportation Provider --> */}
                                <div className="mb-4">
                                    <h6 className="card-title mb-2">Transportation Provider</h6>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Provider</th>
                                                <th>Transport Mode</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!-- Sample Data --> */}
                                            <tr>
                                                <td>Transport Co A</td>
                                                <td>Truck</td>
                                                <td>On Time</td>
                                            </tr>
                                            <tr>
                                                <td>Transport Co B</td>
                                                <td>Ship</td>
                                                <td>Delayed</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-primary" onclick={() => window.location.href = 'transportation_provider.html'}>Show More</button>
                                </div>
                                <hr />

                                {/* <!-- Hospital/Pharmacy Demand --> */}
                                <div className="mb-4">
                                    <h6 className="card-title mb-2">Hospital/Pharmacy Demand</h6>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Hospital/Pharmacy</th>
                                                <th>Drug Needed</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!-- Sample Data --> */}
                                            <tr>
                                                <td>Hospital X</td>
                                                <td>Drug A</td>
                                                <td>200</td>
                                            </tr>
                                            <tr>
                                                <td>Pharmacy Y</td>
                                                <td>Drug B</td>
                                                <td>150</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-primary" onclick={() => window.location.href = 'hospital_demand.html'}>Show More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="col-md-6">
                        <section className="mb-4">
                            <div className={styles.card}>
                            <h5>Order Fulfillment Time</h5>
                                <div className="card-body">
                                    {/* <canvas id="order-fulfillment-time-chart"></canvas> */}
                                    <OrderFulfillmentChart />
                                    <small className="form-text text-muted">Tracks order fulfillment times over time</small>
                                </div>
                            </div>
                        </section>

                        <section className={`${styles.card} ${styles.notifications} mb-4`}>
                            <h5>Notifications</h5>
                            <ul className="list-unstyled">
                                <li>Batch #789 has passed the quality check.</li>
                                <li>Raw material stock for Chemical A is low.</li>
                                <li>New batch production scheduled for tomorrow.</li>
                                <li>Shipment #12348 is delayed due to logistical issues.</li>
                                <li>Inspection for Batch #790 is scheduled for next week.</li>
                                <li>Inspection for Batch #790 is scheduled for next week.</li>
                                <li>Inspection for Batch #790 is scheduled for next week.</li>
                                {/* <!-- Add more notifications as needed --> */}
                            </ul>
                        </section>
                    </div>
                </section>

                {/* <!-- Footer Section --> */}
                <footer className="text-center py-4">
                    <p>© 2024 Distributor Dashboard | Supply Chain Management System</p>
                </footer>
            </div>



        </>
    );

}

export default DistributorDashboard;