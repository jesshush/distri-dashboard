import React, { useState } from 'react';
import { Table, Pagination, Button, Form } from 'react-bootstrap';

const DrugDetails = () => {
  const drugs = [
    { name: 'Paracetamol 500mg', brand: 'Tylenol', mfgDate: '2023-01-15', expDate: '2025-01-15', cost: 20, quantity: 500 },
    { name: 'Paracetamol 650mg', brand: 'Panadol', mfgDate: '2022-12-10', expDate: '2024-12-10', cost: 25, quantity: 450 },
    { name: 'Paracetamol 500mg', brand: 'Crocin', mfgDate: '2023-03-01', expDate: '2025-03-01', cost: 22, quantity: 600 },
    { name: 'Paracetamol 500mg', brand: 'Calpol', mfgDate: '2023-06-12', expDate: '2025-06-12', cost: 18, quantity: 550 },
    { name: 'Paracetamol 500mg', brand: 'Excedrin', mfgDate: '2023-05-20', expDate: '2025-05-20', cost: 30, quantity: 400 },
    { name: 'Paracetamol 650mg', brand: 'Panalgesic', mfgDate: '2023-02-22', expDate: '2025-02-22', cost: 27, quantity: 450 },
    { name: 'Paracetamol 500mg', brand: 'Feverall', mfgDate: '2023-04-18', expDate: '2025-04-18', cost: 23, quantity: 500 },
    { name: 'Paracetamol 500mg', brand: 'Advil', mfgDate: '2022-11-30', expDate: '2024-11-30', cost: 21, quantity: 600 },
    { name: 'Paracetamol 650mg', brand: 'Pediacare', mfgDate: '2023-07-08', expDate: '2025-07-08', cost: 26, quantity: 480 },
    { name: 'Paracetamol 500mg', brand: 'Tempra', mfgDate: '2023-08-15', expDate: '2025-08-15', cost: 24, quantity: 520 },
    { name: 'Paracetamol 500mg', brand: 'Anacin', mfgDate: '2023-09-10', expDate: '2025-09-10', cost: 19, quantity: 530 },
    { name: 'Paracetamol 650mg', brand: 'Aspirin', mfgDate: '2023-03-25', expDate: '2025-03-25', cost: 29, quantity: 470 },
    { name: 'Paracetamol 500mg', brand: 'Motrin', mfgDate: '2023-06-01', expDate: '2025-06-01', cost: 20, quantity: 550 },
    { name: 'Paracetamol 500mg', brand: 'Aleve', mfgDate: '2023-07-18', expDate: '2025-07-18', cost: 21, quantity: 490 },
    { name: 'Paracetamol 650mg', brand: 'Panadol Extra', mfgDate: '2023-01-28', expDate: '2025-01-28', cost: 28, quantity: 460 },
    { name: 'Paracetamol 500mg', brand: 'Paraflex', mfgDate: '2023-04-05', expDate: '2025-04-05', cost: 22, quantity: 540 },
    { name: 'Paracetamol 500mg', brand: 'Nurofen', mfgDate: '2023-05-25', expDate: '2025-05-25', cost: 23, quantity: 510 },
    { name: 'Paracetamol 650mg', brand: 'Thermacare', mfgDate: '2023-02-18', expDate: '2025-02-18', cost: 27, quantity: 485 },
    { name: 'Paracetamol 500mg', brand: 'PainAway', mfgDate: '2023-08-22', expDate: '2025-08-22', cost: 24, quantity: 520 },
    { name: 'Paracetamol 500mg', brand: 'Clearasil', mfgDate: '2023-09-05', expDate: '2025-09-05', cost: 19, quantity: 540 },
    { name: 'Paracetamol 650mg', brand: 'CarePlus', mfgDate: '2023-04-15', expDate: '2025-04-15', cost: 30, quantity: 470 },
    { name: 'Paracetamol 500mg', brand: 'Wellzyme', mfgDate: '2023-07-02', expDate: '2025-07-02', cost: 20, quantity: 550 },
    { name: 'Paracetamol 500mg', brand: 'Benadryl', mfgDate: '2023-01-05', expDate: '2025-01-05', cost: 22, quantity: 580 },
    { name: 'Paracetamol 650mg', brand: 'Relief', mfgDate: '2023-03-15', expDate: '2025-03-15', cost: 26, quantity: 490 },
    { name: 'Paracetamol 500mg', brand: 'Dayquil', mfgDate: '2023-05-10', expDate: '2025-05-10', cost: 21, quantity: 510 },
    { name: 'Paracetamol 500mg', brand: 'Nightquil', mfgDate: '2023-06-20', expDate: '2025-06-20', cost: 22, quantity: 530 },
    { name: 'Paracetamol 650mg', brand: 'Sundown', mfgDate: '2023-08-01', expDate: '2025-08-01', cost: 28, quantity: 475 },
    { name: 'Paracetamol 500mg', brand: 'Zyrtec', mfgDate: '2023-09-15', expDate: '2025-09-15', cost: 23, quantity: 500 },
    { name: 'Paracetamol 500mg', brand: 'Tempra Extra', mfgDate: '2023-04-22', expDate: '2025-04-22', cost: 24, quantity: 510 }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering logic
  const filteredDrugs = drugs.filter(drug =>
    drug.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    drug.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDrugs.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredDrugs.length / itemsPerPage);

  return (
    <div className="container mt-4">
      <div style={{ marginBottom: '20px', padding: '30px', backgroundColor: '#5ea3ed', borderRadius: '5px' }}>
      <h2 style={{ margin: 0, color: '#ffffff' }}>Drug Inventory</h2>
      </div>

      <Form.Group className="mb-3">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search by name or brand"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Brand</th>
            <th>Manufactured Date</th>
            <th>Expiry Date</th>
            <th>Cost</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((drug, index) => (
            <tr key={index}>
              <td>{drug.name}</td>
              <td>{drug.brand}</td>
              <td>{drug.mfgDate}</td>
              <td>{drug.expDate}</td>
              <td>{drug.cost}</td>
              <td>{drug.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <Pagination>
          <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
          {[...Array(totalPages).keys()].map(page => (
            <Pagination.Item
              key={page + 1}
              active={page + 1 === currentPage}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
        </Pagination>
      </div>
    </div>
  );
};

export default DrugDetails;