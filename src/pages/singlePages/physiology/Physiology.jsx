import React from 'react';
import "./Physiology.css"
const physiologyTopics = {
  year1: [
    { id: 1, title: "Introduction to Physiology", description: "Basic concepts of human physiology." },
    { id: 2, title: "Cell Physiology", description: "Study of cell functions and membrane transport." },
    { id: 3, title: "Nervous System Physiology", description: "Understanding the central and peripheral nervous systems." },
    { id: 4, title: "Muscle Physiology", description: "How muscles contract and generate force." },
    { id: 5, title: "Cardiovascular Physiology", description: "Blood circulation, heart function, and blood pressure." },
    { id: 6, title: "Respiratory Physiology", description: "Mechanisms of breathing and gas exchange." },
    { id: 7, title: "Renal Physiology", description: "Kidney functions and regulation of fluid balance." },
    { id: 8, title: "Endocrinology", description: "Hormonal regulation and endocrine glands." },
    { id: 9, title: "Digestion and Absorption", description: "Processes of digestion and nutrient absorption." },
    { id: 10, title: "Acid-Base Balance", description: "Regulation of body pH and homeostasis." }
  ],
  year2: [
    { id: 1, title: "Neurophysiology", description: "In-depth study of the brain, spinal cord, and nervous pathways." },
    { id: 2, title: "Cardiac Physiology", description: "Heart rhythm, conduction, and myocardial function." },
    { id: 3, title: "Endocrine Physiology", description: "Advanced study of hormone regulation and metabolic processes." },
    { id: 4, title: "Gastrointestinal Physiology", description: "In-depth understanding of the digestive system functions." },
    { id: 5, title: "Respiratory Regulation", description: "Control of breathing and gas exchange regulation." },
    { id: 6, title: "Renal Regulation of Blood Pressure", description: "Kidney role in blood pressure and electrolyte balance." },
    { id: 7, title: "Immunology and Physiology", description: "The immune system and its physiological roles." },
    { id: 8, title: "Circulatory Physiology", description: "Blood flow, vascular resistance, and circulation regulation." },
    { id: 9, title: "Thermoregulation", description: "Body temperature regulation and its physiological mechanisms." },
    { id: 10, title: "Homeostasis", description: "The concept of balance and physiological regulation across systems." }
  ]
};

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
              <h3>{topic.title}</h3>
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
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Physiology;
