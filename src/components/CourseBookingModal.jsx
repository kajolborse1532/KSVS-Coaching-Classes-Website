import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CourseBookingModal = ({ show, handleClose, handleSubmit, handleInputChange, formData = {}, selectedCourse = {} }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Book Course</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name || ''}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your contact number"
            name="contact"
            value={formData.contact || ''}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCourseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            name="courseName"
            value={selectedCourse.title || ''}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCourseFees">
          <Form.Label>Course Fees</Form.Label>
          <Form.Control
            type="text"
            name="courseFees"
            value={selectedCourse.fees || ''}
            readOnly
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);

export default CourseBookingModal;
