import React from 'react';
import "./Anatomy.css"

const anatomyTopics = {
  year1: [
    { id: 1, title: "Introduction to Human Anatomy", description: "Basic overview of human body systems." },
    { id: 2, title: "Skeletal System", description: "Detailed study of bones and joints." },
    { id: 3, title: "Muscular System", description: "Study of muscles and their functions." },
    { id: 4, title: "Cardiovascular System", description: "Heart anatomy and blood circulation." },
    { id: 5, title: "Respiratory System", description: "Understanding lungs and the process of respiration." },
    { id: 6, title: "Digestive System", description: "Structure and function of the digestive tract." },
    { id: 7, title: "Nervous System", description: "Overview of the brain, spinal cord, and peripheral nerves." },
    { id: 8, title: "Endocrine System", description: "Hormonal regulation and glands of the body." },
    { id: 9, title: "Integumentary System", description: "Study of skin, hair, and nails." },
    { id: 10, title: "Lymphatic System", description: "Immune defense and fluid balance." }
  ],
  year2: [
    { id: 1, title: "Brain and Cranial Nerves", description: "Detailed study of brain anatomy and nerves." },
    { id: 2, title: "Spinal Cord and Spinal Nerves", description: "In-depth exploration of spinal cord structures." },
    { id: 3, title: "Musculoskeletal System", description: "Detailed anatomy of muscles and bones." },
    { id: 4, title: "Cardiac Anatomy", description: "Detailed study of the heart and vascular anatomy." },
    { id: 5, title: "Abdominal Cavity", description: "Anatomy of the abdomen and its organs." },
    { id: 6, title: "Pelvic Anatomy", description: "Study of pelvic organs and structures." },
    { id: 7, title: "Thoracic Anatomy", description: "Understanding the thoracic cavity and its contents." },
    { id: 8, title: "Urinary System", description: "Anatomy of kidneys, bladder, and urinary tract." },
    { id: 9, title: "Reproductive System", description: "Study of male and female reproductive anatomy." },
    { id: 10, title: "Endocrine Glands", description: "Detailed anatomy of endocrine organs and glands." }
  ]
};

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
              <h3>{topic.title}</h3>
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
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Anatomy;
