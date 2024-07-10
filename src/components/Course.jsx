import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Course.css';
import headingImage from '../images/heading.jpg';
import CourseBookingModal from './CourseBookingModal';

const initialCourses = [
  {
    title: "JEE Board - Advanced",
    duration: "Lifetime",
    lessons: "24 Lessons",
    image: headingImage,
    fees: "$100",
  },
  {
    title: "WBJEE Board - Advanced",
    duration: "Lifetime",
    lessons: "24 Lessons",
    image: headingImage,
    fees: "$120",
  },
  {
    title: "NEET Board - Advanced",
    duration: "Lifetime",
    lessons: "30 Lessons",
    image: headingImage,
    fees: "$150",
  },
  {
    title: "CBSE Board - Advanced",
    duration: "Lifetime",
    lessons: "20 Lessons",
    image: headingImage,
    fees: "$90",
  },
  {
    title: "ICSE Board - Advanced",
    duration: "Lifetime",
    lessons: "22 Lessons",
    image: headingImage,
    fees: "$110",
  },
  {
    title: "State Board - Advanced",
    duration: "Lifetime",
    lessons: "28 Lessons",
    image: headingImage,
    fees: "$95",
  },
  {
    title: "PHYSICS - Advanced",
    duration: "Lifetime",
    lessons: "30 Lessons",
    image: headingImage,
    fees: "$130",
  },
];

const Course = ({ setProfile }) => {
  const [courses, setCourses] = useState(initialCourses);
  const [show, setShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = (course) => {
    setSelectedCourse(course);
    setShow(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      name: formData.name,
      contact: formData.contact,
      email: formData.email,
      courses: [...setProfile.courses, {
        title: selectedCourse.title,
        fees: selectedCourse.fees
      }]
    };
    setProfile(updatedProfile);
    handleClose();
  };

  return (
    <div>
      <section
        className="inner-header divider overlay-theme-colored-7"
        style={{ backgroundImage: 'url(https://livingtolead.com/wp-content/uploads/2018/12/group-coaching-background.jpg)' }}
      >
        <div className="container pt-120 pb-60">
          <div className="section-content">
            <div className="row">
              <h2 className="text-theme-colored2 font-36">&nbsp;Courses</h2>
              <ol className="breadcrumb text-left mt-10 white">
                <div className="breadcrumb">
                  <span><a href="/">Home&nbsp;&nbsp;</a></span> /&nbsp;&nbsp; <span>Courses</span>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-heading">My Courses</h2>
        <center>
          <p>Study Material Built for Everyone</p>
          <h1>Explore Our Popular Online Courses</h1>
        </center>

        <div className="container">
          <div className="row">
            {courses.map((course, index) => (
              <div className="col-md-3" key={`${course.title}-${index}`}>
                <div className="card mb-3 mx-2 course-card" style={{ maxWidth: '1000px' }}>
                  <img src={course.image} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">
                      <span><i className="fas fa-clock"></i> {course.duration}</span><br />
                      <span><i className="fas fa-book"></i> {course.lessons}</span><br />
                      <span><i className="fas fa-dollar-sign"></i> {course.fees}</span>
                    </p>
                    <Button className="btn btn-orange" onClick={() => handleShow(course)}>Book Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseBookingModal
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        formData={formData}
        selectedCourse={selectedCourse}
      />
    </div>
  );
};

export default Course;
