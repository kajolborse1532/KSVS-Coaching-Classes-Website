import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './AllCourse.css';

import headerImage from '../images/about-icon.jpg';

const AllCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCourses = async () => {
    try {
      const result = await axios.get('http://localhost:8080/api/course/allCourse');
      setCourses(result.data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading courses:', error);
      setError('Failed to load courses. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="course-content">
      <div id='header'>
        <img 
          src={headerImage} 
          alt="Header" 
          className="header-image"
        />
        <div className="header-text-container">
          <h1 className="header-text">Courses</h1>
          <div className="breadcrumb">
            <span>Home</span> / <span>Courses</span>
          </div>
        </div>   
      </div>
      <div className="courses">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            className="course"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={`http://localhost:8080/api/course/getImage/${course.id}`} 
              alt='Course' 
            />
            <div className="course-info">
              <h3>{course.courseName}</h3>
              <p>Fee: {course.fee} /-</p>
              <button className="course-more-info-button">
                More Information
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
