import React from 'react';
import "./Pharmacology.css"

const pharmacologyTopics = {
  year1: [
    { id: 1, title: "Introduction to Pharmacology", description: "Overview of pharmacology and its basic principles." },
    { id: 2, title: "Pharmacokinetics", description: "Study of drug absorption, distribution, metabolism, and excretion." },
    { id: 3, title: "Pharmacodynamics", description: "Mechanisms of drug action on the body and receptors." },
    { id: 4, title: "Autonomic Nervous System Drugs", description: "Drugs affecting the sympathetic and parasympathetic systems." },
    { id: 5, title: "Antibiotics and Antimicrobials", description: "Types of antibiotics and their mechanisms of action." },
    { id: 6, title: "Analgesics", description: "Pain relief drugs including opioids and NSAIDs." },
    { id: 7, title: "Anti-inflammatory Drugs", description: "Drugs used to reduce inflammation, such as corticosteroids." },
    { id: 8, title: "Vitamins and Nutritional Supplements", description: "Understanding the role of vitamins and supplements in health." },
    { id: 9, title: "General Anesthetics", description: "Drugs used for inducing anesthesia and their mechanisms." },
    { id: 10, title: "Drug Dosage and Administration", description: "Understanding proper drug dosage and routes of administration." }
  ],
  year2: [
    { id: 1, title: "Pharmacology of the Central Nervous System", description: "Drugs acting on the brain and spinal cord, including antidepressants and antipsychotics." },
    { id: 2, title: "Cardiovascular Pharmacology", description: "Drugs used to treat heart disease, including beta blockers and calcium channel blockers." },
    { id: 3, title: "Chemotherapy and Anticancer Drugs", description: "Pharmacology of chemotherapy agents and their mechanisms in cancer treatment." },
    { id: 4, title: "Toxicology", description: "Study of drug toxicity, overdose, and its effects on the body." },
    { id: 5, title: "Antidiabetic Drugs", description: "Drugs used in the treatment of diabetes, including insulin and oral hypoglycemics." },
    { id: 6, title: "Hormonal Drugs", description: "Drugs that influence hormonal systems, such as thyroid and contraceptive medications." },
    { id: 7, title: "Drug Interactions", description: "Understanding how drugs interact with each other and affect therapeutic outcomes." },
    { id: 8, title: "Immunopharmacology", description: "Drugs that modulate the immune system, such as immunosuppressants." },
    { id: 9, title: "Pharmacogenomics", description: "The role of genetics in drug response and personalized medicine." },
    { id: 10, title: "Clinical Pharmacology", description: "Application of pharmacological principles in clinical practice and patient care." }
  ]
};

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
              <h3>{topic.title}</h3>
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
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pharmacology;
