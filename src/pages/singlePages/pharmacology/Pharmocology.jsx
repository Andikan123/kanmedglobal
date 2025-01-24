import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { pharmacologyTopics } from '../../../data'; // Assuming pharmacologyTopics is defined somewhere

import './Pharmacology.css'; // Assuming you have a CSS for this component

const Pharmacology = () => {
  return (
    <div className="pharmacology-page">
      <h1 className="page-title">Pharmacology Topics</h1>

      {/* Year 1 Topics */}
      <div className="pharmacology-section">
        <h2 className="section-title">Year 1 Topics</h2>
        <div className="topic-cards">
          {pharmacologyTopics.year1.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>
                {/* Link to the specific topic page */}
                <Link to={`/pharmacology/year1/${topic.id}`}>{topic.title}</Link>
              </h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Year 2 Topics */}
      <div className="pharmacology-section">
        <h2 className="section-title">Year 2 Topics</h2>
        <div className="topic-cards">
          {pharmacologyTopics.year2.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>
                {/* Link to the specific topic page */}
                <Link to={`/pharmacology/year2/${topic.id}`}>{topic.title}</Link>
              </h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pharmacology;
