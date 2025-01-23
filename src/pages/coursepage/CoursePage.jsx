// CoursesPage.jsx
import React from 'react';
import { services } from '../../data';
import { Link, Links } from 'react-router-dom'; 
import "./CoursePage.css"


// The array containing course details

const CoursesPage = () => {
  return (
    <div className="courses-container" style={{marginTop:"5rem"}}>
      <h1 className="courses-heading">Our Courses</h1>
      <div className="courses-grid">
        {services.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-icon">
              <i className={course.icon}></i>
            </div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.text}</p>
           <Link to={course.path}> <button className="course-btn">Learn More</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
