import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { microbiologyTopics } from "../../../data";// Import your microbiology topics data

import './Microbiology.css'; // Assuming you have a separate CSS for this component

const Microbiology = () => {
  return (
    <div className="microbiology-page">
      <h1 className="page-title">Microbiology Topics</h1>

      {/* Year 1 Topics */}
      <div className="microbiology-section">
        <h2 className="section-title">Year 1 Topics</h2>
        <div className="topic-cards">
          {microbiologyTopics.year1.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>
                {/* Link to specific topic page */}
                <Link to={`/microbiology/year1/${topic.id}`}>{topic.title}</Link>
              </h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Year 2 Topics */}
      <div className="microbiology-section">
        <h2 className="section-title">Year 2 Topics</h2>
        <div className="topic-cards">
          {microbiologyTopics.year2.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>
                {/* Link to specific topic page */}
                <Link to={`/microbiology/year2/${topic.id}`}>{topic.title}</Link>
              </h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Microbiology;
