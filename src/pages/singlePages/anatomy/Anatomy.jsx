import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { anatomyTopics } from '../../../data'; // Assuming anatomyTopics is defined somewhere

import './Anatomy.css';  // Assuming you have styling for this component

const Anatomy = () => {
  return (
    <div className="anatomy-page">
      <h1 className="page-title">Anatomy Topics</h1>
      
      {/* Year 1 Topics */}
      <div className="anatomy-section">
        <h2 className="section-title">Year 1 Topics</h2>
        <div className="topic-cards">
          {anatomyTopics.year1.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>
                {/* Link to the specific topic page */}
                <Link to={`/anatomy/year1/${topic.id}`}>{topic.title}</Link>
              </h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Year 2 Topics */}
      <div className="anatomy-section">
        <h2 className="section-title">Year 2 Topics</h2>
        <div className="topic-cards">
          {anatomyTopics.year2.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>
                {/* Link to the specific topic page */}
                <Link to={`/anatomy/year2/${topic.id}`}>{topic.title}</Link>
              </h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Anatomy;
