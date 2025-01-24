import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { physiologyTopics } from "../../../data"; // Import your physiology topics data

import './Physiology.css'; // Assuming you have a CSS for this component

const Physiology = () => {
  return (
    <div className="physiology-page">
      <h1 className="page-title">Physiology Topics</h1>

      {/* Year 1 Topics */}
      <div className="physiology-section">
        <h2 className="section-title">Year 1 Topics</h2>
        <div className="topic-cards">
          {physiologyTopics.year1.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>
                {/* Link to specific topic page */}
                <Link to={`/physiology/year1/${topic.id}`}>{topic.title}</Link>
              </h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Year 2 Topics */}
      <div className="physiology-section">
        <h2 className="section-title">Year 2 Topics</h2>
        <div className="topic-cards">
          {physiologyTopics.year2.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>
                {/* Link to specific topic page */}
                <Link to={`/physiology/year2/${topic.id}`}>{topic.title}</Link>
              </h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Physiology;
