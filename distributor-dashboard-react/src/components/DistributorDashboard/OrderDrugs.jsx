import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, Tabs, Tab } from 'react-bootstrap';
import { FaBox, FaCalendarAlt, FaInfoCircle, FaWarehouse, FaUser, FaPhone, FaFlag, FaPlus, FaTrash, FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const StyledCard = styled(Card)`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 15px;
  overflow: hidden;
`;

const StyledCardHeader = styled.div`
  background-color: #5cabff;
  padding: 1.5rem;
  color: #fff;
  text-align: center;
`;

const StyledCardBody = styled(Card.Body)`
  padding: 2rem;
`;

const StyledForm = styled(Form)`
  margin-top: 1rem;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 1.25rem;
`;

const StyledFormLabel = styled(Form.Label)`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #153759;
`;

const StyledFormControl = styled(Form.Control)`
  border-radius: 8px;
  border: 1px solid #ced4da;
  padding: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #5ea3ed;
    box-shadow: 0 0 0 0rem rgba(94, 163, 237, 0.25);
  }
`;

const StyledButton = styled(Button)`
  background-color: #153759;
  border-color: #153759;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0d2440;
    border-color: #0d2440;
    transform: translateY(-2px);
  }
`;

const StyledTabs = styled(Tabs)`
  margin-bottom: 1.5rem;

  .nav-link {
    color: #153759;
    font-weight: 600;
    padding: 0.5rem 1rem;

    &.active {
      background-color: #5cabff;
      color: #fff;
      border-color: #5cabff;
    }
  }
`;

const StyledListGroup = styled(ListGroup)`
  .list-group-item {
    border-left: 5px solid #5cabff;
    margin-bottom: 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    padding: 1.5rem;

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const StyledHeading = styled.h5`
  color: #153759;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  color: #153759;
  margin-bottom: 0.1rem;
`;

const OrderDrugs = () => {
  const [formData, setFormData] = useState({
    drugName: '',
    quantity: '',
    supplier: '',
    deliveryDate: '',
    deliveryAddress: '',
    contactPerson: '',
    contactPhone: '',
    orderPriority: 'Normal',
    additionalInfo: ''
  });

  const [formErrors, setFormErrors] = useState({
    drugName: '',
    quantity: '',
    supplier: '',
    deliveryDate: '',
    deliveryAddress: '',
    contactPerson: '',
    contactPhone: ''
  });

  const [drugsList, setDrugsList] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);
  const [tabKey, setTabKey] = useState('order');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: ''
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.drugName) {
      errors.drugName = 'Drug name is required.';
      valid = false;
    }
    if (!formData.quantity || formData.quantity <= 0) {
      errors.quantity = 'Quantity must be a positive number.';
      valid = false;
    }
    if (!formData.supplier) {
      errors.supplier = 'Supplier name is required.';
      valid = false;
    }
    if (!formData.deliveryDate) {
      errors.deliveryDate = 'Delivery date is required.';
      valid = false;
    }
    if (!formData.deliveryAddress) {
      errors.deliveryAddress = 'Delivery address is required.';
      valid = false;
    }
    if (!formData.contactPerson) {
      errors.contactPerson = 'Contact person is required.';
      valid = false;
    }
    if (!formData.contactPhone) {
      errors.contactPhone = 'Contact phone is required.';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setDrugsList([...drugsList, { ...formData }]);
      setFormData({
        drugName: '',
        quantity: '',
        supplier: '',
        deliveryDate: '',
        deliveryAddress: '',
        contactPerson: '',
        contactPhone: '',
        orderPriority: 'Normal',
        additionalInfo: ''
      });
      setTabKey('review');
    }
  };

  const handleRemove = (index) => {
    setDrugsList(drugsList.filter((_, i) => i !== index));
  };

  const handlePlaceOrder = () => {
    if (drugsList.length > 0) {
      setPastOrders([...pastOrders, ...drugsList]);
      setDrugsList([]);
      alert('Order has been placed successfully!');
    } else {
      alert('No items to place an order.');
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <StyledContainer>
      <Row>
        <Col md={10} lg={8} className="mx-auto">
          <motion.div {...fadeIn}>
            <StyledCard>
              <StyledCardHeader>
                <h2>
                  <FaBox className="mr-2" /> Manage Drug Orders
                </h2>
              </StyledCardHeader>

              <StyledCardBody>
                <StyledTabs id="order-tabs" activeKey={tabKey} onSelect={(k) => setTabKey(k)}>
                  <Tab eventKey="order" title="Order Drugs">
                    <StyledForm onSubmit={handleSubmit}>
                      <StyledFormGroup controlId="formDrugName">
                        <StyledFormLabel><FaBox className="mr-2" /> Drug Name</StyledFormLabel>
                        <StyledFormControl
                          type="text"
                          placeholder="Enter drug name"
                          name="drugName"
                          value={formData.drugName}
                          onChange={handleChange}
                          isInvalid={!!formErrors.drugName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.drugName}
                        </Form.Control.Feedback>
                      </StyledFormGroup>

                      <StyledFormGroup controlId="formQuantity">
                        <StyledFormLabel><FaInfoCircle className="mr-2" /> Quantity</StyledFormLabel>
                        <StyledFormControl
                          type="number"
                          placeholder="Enter quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          isInvalid={!!formErrors.quantity}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.quantity}
                        </Form.Control.Feedback>
                      </StyledFormGroup>

                      <StyledFormGroup controlId="formSupplier">
                        <StyledFormLabel><FaWarehouse className="mr-2" /> Supplier</StyledFormLabel>
                        <StyledFormControl
                          type="text"
                          placeholder="Enter supplier name"
                          name="supplier"
                          value={formData.supplier}
                          onChange={handleChange}
                          isInvalid={!!formErrors.supplier}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.supplier}
                        </Form.Control.Feedback>
                      </StyledFormGroup>

                      <StyledFormGroup controlId="formDeliveryDate">
                        <StyledFormLabel><FaCalendarAlt className="mr-2" /> Delivery Date</StyledFormLabel>
                        <StyledFormControl
                          type="date"
                          name="deliveryDate"
                          value={formData.deliveryDate}
                          onChange={handleChange}
                          isInvalid={!!formErrors.deliveryDate}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.deliveryDate}
                        </Form.Control.Feedback>
                      </StyledFormGroup>

                      <StyledFormGroup controlId="formDeliveryAddress">
                        <StyledFormLabel><FaWarehouse className="mr-2" /> Delivery Address</StyledFormLabel>
                        <StyledFormControl
                          type="text"
                          placeholder="Enter delivery address"
                          name="deliveryAddress"
                          value={formData.deliveryAddress}
                          onChange={handleChange}
                          isInvalid={!!formErrors.deliveryAddress}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.deliveryAddress}
                        </Form.Control.Feedback>
                      </StyledFormGroup>

                      <StyledFormGroup controlId="formContactPerson">
                        <StyledFormLabel><FaUser className="mr-2" /> Contact Person</StyledFormLabel>
                        <StyledFormControl
                          type="text"
                          placeholder="Enter contact person"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          isInvalid={!!formErrors.contactPerson}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.contactPerson}
                        </Form.Control.Feedback>
                      </StyledFormGroup>

                      <StyledFormGroup controlId="formContactPhone">
                        <StyledFormLabel><FaPhone className="mr-2" /> Contact Phone</StyledFormLabel>
                        <StyledFormControl
                          type="text"
                          placeholder="Enter contact phone number"
                          name="contactPhone"
                          value={formData.contactPhone}
                          onChange={handleChange}
                          isInvalid={!!formErrors.contactPhone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.contactPhone}
                        </Form.Control.Feedback>
                      </StyledFormGroup>

                      <StyledFormGroup controlId="formOrderPriority">
                        <StyledFormLabel><FaFlag className="mr-2" /> Order Priority</StyledFormLabel>
                        <StyledFormControl
                          as="select"
                          name="orderPriority"
                          value={formData.orderPriority}
                          onChange={handleChange}
                        >
                          <option>Normal</option>
                          <option>Urgent</option>
                          <option>High</option>
                        </StyledFormControl>
                      </StyledFormGroup>

                      <StyledFormGroup controlId="formAdditionalInfo">
                        <StyledFormLabel><FaInfoCircle className="mr-2" /> Additional Information</StyledFormLabel>
                        <StyledFormControl
                          as="textarea"
                          rows={3}
                          placeholder="Any additional information or special instructions"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                        />
                      </StyledFormGroup>

                      <StyledButton variant="primary" type="submit">
                        <FaPlus className="mr-2" /> Add Drug
                      </StyledButton>
                    </StyledForm>
                  </Tab>

                  <Tab eventKey="review" title="Review Orders">
                    {drugsList.length > 0 ? (
                      <>
                        <StyledListGroup>
                          {drugsList.map((drug, index) => (
                            <motion.div key={index} {...fadeIn}>
                              <ListGroup.Item>
                                <StyledHeading>{drug.drugName}</StyledHeading>
                                <StyledParagraph>Quantity: {drug.quantity}</StyledParagraph>
                                <StyledParagraph>Supplier: {drug.supplier}</StyledParagraph>
                                <StyledParagraph>Delivery Date: {drug.deliveryDate}</StyledParagraph>
                                <StyledParagraph>Delivery Address: {drug.deliveryAddress}</StyledParagraph>
                                <StyledParagraph>Contact Person: {drug.contactPerson}</StyledParagraph>
                                <StyledParagraph>Contact Phone: {drug.contactPhone}</StyledParagraph>
                                <StyledParagraph>Priority: {drug.orderPriority}</StyledParagraph>
                                <StyledParagraph>Additional Info: {drug.additionalInfo}</StyledParagraph>
                                <StyledButton variant="danger" onClick={() => handleRemove(index)}>
                                  <FaTrash className="mr-2" /> Remove
                                </StyledButton>
                              </ListGroup.Item>
                            </motion.div>
                          ))}
                        </StyledListGroup>
                        <StyledButton variant="success" onClick={handlePlaceOrder} className="mt-3">
                          <FaCheck className="mr-2" /> Place Order
                        </StyledButton>
                      </>
                    ) : (
                      <StyledParagraph>No drugs added to the list.</StyledParagraph>
                    )}
                  </Tab>

                  <Tab eventKey="history" title="Past Orders">
                    {pastOrders.length > 0 ? (
                      <StyledListGroup>
                        {pastOrders.map((order, index) => (
                          <motion.div key={index} {...fadeIn}>
                            <ListGroup.Item>
                            <StyledHeading>{order.drugName}</StyledHeading>
                              <StyledParagraph>Quantity: {order.quantity}</StyledParagraph>
                              <StyledParagraph>Supplier: {order.supplier}</StyledParagraph>
                              <StyledParagraph>Delivery Date: {order.deliveryDate}</StyledParagraph>
                              <StyledParagraph>Delivery Address: {order.deliveryAddress}</StyledParagraph>
                              <StyledParagraph>Contact Person: {order.contactPerson}</StyledParagraph>
                              <StyledParagraph>Contact Phone: {order.contactPhone}</StyledParagraph>
                              <StyledParagraph>Priority: {order.orderPriority}</StyledParagraph>
                              <StyledParagraph>Additional Info: {order.additionalInfo}</StyledParagraph>
                            </ListGroup.Item>
                          </motion.div>
                        ))}
                      </StyledListGroup>
                    ) : (
                      <StyledParagraph>No past orders available.</StyledParagraph>
                    )}
                  </Tab>
                </StyledTabs>
              </StyledCardBody>
            </StyledCard>
          </motion.div>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default OrderDrugs;