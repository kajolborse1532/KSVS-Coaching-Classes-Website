import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './AllCourse.css';
import axios from 'axios';
const Course = () => {

  const [course, setCourse] = useState([]);

  const loadCourse = async () => {
    const result = await axios.get("http://localhost:8080/api/course/allCourse");
    setCourse(result.data);
    console.log(result);
  }

  useEffect(()=>{
    loadCourse();
  },[]);



  return (
    <div className="course-content">

<h2>Available Course</h2>

    <div className="courses">
      {course.map((course,index) => (
        <motion.div
          key={course.id}
          className="course"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={`http://localhost:8080/api/course/getImage/${course.id}`} alt='loading....' />
          <div className="course-info">
            <h3>{course.courseName}</h3>
            <p>Fee : {course.fee} /-</p>
            <button className="more-info-button">
              {/* <a href={blog.link} target="_blank" rel="noopener noreferrer"> */}
                Buy
                {/* </a> */}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
}

export default Course;
