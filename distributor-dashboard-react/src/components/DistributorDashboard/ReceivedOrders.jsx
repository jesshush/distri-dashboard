import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const ReceivedOrders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('id');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Updated dummy data according to the new column order
    const orders = [
        { id: 1, name: 'Paracetamol 500mg', brand: 'Tylenol', quantity: 500, amount: 1000, supplierId: 'S001', receiptDateTime: '2024-08-09 14:30', condition: 'Intact' },
        { id: 2, name: 'Ibuprofen 200mg', brand: 'Advil', quantity: 300, amount: 1500, supplierId: 'S002', receiptDateTime: '2024-08-11 10:00', condition: 'Intact' },
        { id: 3, name: 'Amoxicillin 500mg', brand: 'Amoxil', quantity: 400, amount: 2000, supplierId: 'S003', receiptDateTime: '2024-08-14 16:00', condition: 'Damaged' },
        { id: 4, name: 'Cough Syrup 200ml', brand: 'Robitussin', quantity: 200, amount: 2500, supplierId: 'S004', receiptDateTime: '2024-08-15 12:00', condition: 'Intact' },
        { id: 5, name: 'Vitamin C 1000mg', brand: 'Nature Made', quantity: 600, amount: 1200, supplierId: 'S005', receiptDateTime: '2024-08-17 08:00', condition: 'Intact' },
        { id: 6, name: 'Aspirin 500mg', brand: 'Bayer', quantity: 400, amount: 1800, supplierId: 'S006', receiptDateTime: '2024-08-19 15:00', condition: 'Damaged' },
        { id: 7, name: 'Antacid 250ml', brand: 'Tums', quantity: 250, amount: 1600, supplierId: 'S007', receiptDateTime: '2024-08-21 11:00', condition: 'Intact' },
        { id: 8, name: 'Loperamide 2mg', brand: 'Imodium', quantity: 700, amount: 1300, supplierId: 'S008', receiptDateTime: '2024-08-24 09:00', condition: 'Intact' },
        { id: 9, name: 'Allergy Tablet', brand: 'Claritin', quantity: 250, amount: 2200, supplierId: 'S009', receiptDateTime: '2024-08-27 13:00', condition: 'Damaged' },
        { id: 10, name: 'Antibiotic Ointment', brand: 'Neosporin', quantity: 150, amount: 1400, supplierId: 'S010', receiptDateTime: '2024-08-29 17:00', condition: 'Intact' },
        { id: 11, name: 'Eye Drops 15ml', brand: 'Visine', quantity: 200, amount: 2000, supplierId: 'S011', receiptDateTime: '2024-08-31 10:00', condition: 'Intact' },
        { id: 12, name: 'Cough Drops', brand: 'Halls', quantity: 400, amount: 1700, supplierId: 'S012', receiptDateTime: '2024-09-01 12:00', condition: 'Intact' },
        { id: 13, name: 'Sleep Aid', brand: 'Unisom', quantity: 300, amount: 1300, supplierId: 'S013', receiptDateTime: '2024-09-02 14:00', condition: 'Damaged' },
        { id: 14, name: 'Pain Reliever', brand: 'Tylenol', quantity: 350, amount: 1900, supplierId: 'S014', receiptDateTime: '2024-09-04 16:00', condition: 'Intact' },
        { id: 15, name: 'Allergy Spray', brand: 'Flonase', quantity: 150, amount: 2100, supplierId: 'S015', receiptDateTime: '2024-09-06 11:00', condition: 'Intact' },
        { id: 16, name: 'Digestive Enzyme', brand: 'Beano', quantity: 300, amount: 1600, supplierId: 'S016', receiptDateTime: '2024-09-08 13:00', condition: 'Damaged' },
        { id: 17, name: 'Cold Medicine', brand: 'Sudafed', quantity: 400, amount: 1400, supplierId: 'S017', receiptDateTime: '2024-09-09 09:00', condition: 'Intact' },
        { id: 18, name: 'Vitamins 200mg', brand: 'Centrum', quantity: 500, amount: 2000, supplierId: 'S018', receiptDateTime: '2024-09-11 15:00', condition: 'Intact' },
        { id: 19, name: 'Anti-Nausea', brand: 'Dramamine', quantity: 350, amount: 1500, supplierId: 'S019', receiptDateTime: '2024-09-13 12:00', condition: 'Damaged' },
        { id: 20, name: 'Ear Drops', brand: 'Debrox', quantity: 200, amount: 1700, supplierId: 'S020', receiptDateTime: '2024-09-15 10:00', condition: 'Intact' },
        { id: 21, name: 'Mouthwash 500ml', brand: 'Listerine', quantity: 250, amount: 1800, supplierId: 'S021', receiptDateTime: '2024-09-17 14:00', condition: 'Intact' },
        { id: 22, name: 'Antiseptic Cream', brand: 'Neosporin', quantity: 150, amount: 1900, supplierId: 'S022', receiptDateTime: '2024-09-19 16:00', condition: 'Damaged' },
        { id: 23, name: 'Skin Cream 100ml', brand: 'Eucerin', quantity: 200, amount: 1600, supplierId: 'S023', receiptDateTime: '2024-09-21 13:00', condition: 'Intact' },
        { id: 24, name: 'Allergy Pills', brand: 'Zyrtec', quantity: 400, amount: 1500, supplierId: 'S024', receiptDateTime: '2024-09-23 11:00', condition: 'Intact' },
        { id: 25, name: 'Burn Relief Gel', brand: 'BurnFree', quantity: 300, amount: 2100, supplierId: 'S025', receiptDateTime: '2024-09-25 09:00', condition: 'Damaged' },
        { id: 26, name: 'Headache Tablets', brand: 'Excedrin', quantity: 500, amount: 1300, supplierId: 'S026', receiptDateTime: '2024-09-27 10:00', condition: 'Intact' },
        { id: 27, name: 'Antifungal Cream', brand: 'Lotrimin', quantity: 250, amount: 2400, supplierId: 'S027', receiptDateTime: '2024-09-29 12:00', condition: 'Intact' },
        { id: 28, name: 'Moisturizing Lotion', brand: 'Aveeno', quantity: 200, amount: 1700, supplierId: 'S028', receiptDateTime: '2024-09-30 14:00', condition: 'Damaged' },
        { id: 29, name: 'Cough Syrup 100ml', brand: 'Robitussin', quantity: 350, amount: 1500, supplierId: 'S029', receiptDateTime: '2024-10-02 15:00', condition: 'Intact' },
        { id: 30, name: 'Vitamin D 1000 IU', brand: 'Nature Made', quantity: 400, amount: 1300, supplierId: 'S030', receiptDateTime: '2024-10-04 13:00', condition: 'Intact' },
    ];

    const sortedOrders = [...orders].sort((a, b) => {
        if (sortKey === 'id') {
            return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
        }
        if (sortKey === 'amount') {
            return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
        }
        if (sortKey === 'receiptDateTime') {
            return sortOrder === 'asc' ? new Date(a.receiptDateTime) - new Date(b.receiptDateTime) : new Date(b.receiptDateTime) - new Date(a.receiptDateTime);
        }
        return 0;
    });

    const filteredOrders = sortedOrders.filter(order => 
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.supplierId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const paginatedOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="container mt-4">
            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-body text-center" style={{ backgroundColor: '#5ea3ed', color: 'white' }}>
                    <h2 className="card-title mb-0">Received Orders</h2>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by order name or supplier ID"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    {filteredOrders.length > 0 ? (
                        <>
                            <table className="table table-striped table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th
                                            onClick={() => {
                                                setSortKey('id');
                                                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Order ID {sortKey === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}
                                        </th>
                                        <th>Order Name</th>
                                        <th>Brand</th>
                                        <th>Quantity</th>
                                        <th
                                            onClick={() => {
                                                setSortKey('amount');
                                                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Amount {sortKey === 'amount' && (sortOrder === 'asc' ? '↑' : '↓')}
                                        </th>
                                        <th>Supplier ID</th>
                                        <th
                                            onClick={() => {
                                                setSortKey('receiptDateTime');
                                                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Receipt Date {sortKey === 'receiptDateTime' && (sortOrder === 'asc' ? '↑' : '↓')}
                                        </th>
                                        <th>Condition</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedOrders.map(order => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.name}</td>
                                            <td>{order.brand}</td>
                                            <td>{order.quantity}</td>
                                            <td>{order.amount}</td>
                                            <td>{order.supplierId}</td>
                                            <td>{order.receiptDateTime}</td>
                                            <td>{order.condition}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="card">
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                    <span>Page {currentPage} of {totalPages}</span>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="alert alert-info" role="alert">
                            No orders found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReceivedOrders;
