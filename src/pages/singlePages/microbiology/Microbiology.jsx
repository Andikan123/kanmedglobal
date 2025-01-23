import React from 'react';
import "./Microbiology.css"

const microbiologyTopics = {
  year1: [
    { id: 1, title: "Introduction to Microbiology", description: "Overview of microbiology and the role of microorganisms." },
    { id: 2, title: "Bacteria and Archaea", description: "Characteristics and classification of prokaryotic organisms." },
    { id: 3, title: "Viruses and Virology", description: "Study of viruses, their structure, and their life cycles." },
    { id: 4, title: "Microbial Nutrition", description: "The nutritional requirements and growth of microorganisms." },
    { id: 5, title: "Microscopy and Staining Techniques", description: "Techniques for visualizing and identifying microorganisms." },
    { id: 6, title: "Fungi and Protozoa", description: "Study of eukaryotic microorganisms, including fungi and protozoa." },
    { id: 7, title: "Antimicrobial Agents", description: "Introduction to antibiotics, disinfectants, and their mechanisms." },
    { id: 8, title: "Pathogenicity and Virulence", description: "How microorganisms cause diseases in humans." },
    { id: 9, title: "Immunology Basics", description: "Overview of the immune system's response to pathogens." },
    { id: 10, title: "Microbial Ecology", description: "The interactions of microorganisms in their environment." }
  ],
  year2: [
    { id: 1, title: "Microbial Genetics", description: "The study of genetic material in microorganisms." },
    { id: 2, title: "Bacterial Pathogenesis", description: "Mechanisms by which bacteria cause infections." },
    { id: 3, title: "Viral Infections", description: "Study of viral diseases and the host immune response." },
    { id: 4, title: "Antimicrobial Resistance", description: "Understanding mechanisms of drug resistance in microorganisms." },
    { id: 5, title: "Fungal Infections", description: "Pathogenesis, diagnosis, and treatment of fungal infections." },
    { id: 6, title: "Microbiome and Health", description: "The role of the microbiome in human health and disease." },
    { id: 7, title: "Epidemiology", description: "Study of how diseases spread and how outbreaks are controlled." },
    { id: 8, title: "Immunization and Vaccines", description: "The science behind vaccines and their role in preventing infections." },
    { id: 9, title: "Laboratory Techniques in Microbiology", description: "Advanced laboratory techniques for diagnosing microbial infections." },
    { id: 10, title: "Clinical Microbiology", description: "Microbiology in the clinical setting and its role in diagnosis and treatment." }
  ]
};

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
              <h3>{topic.title}</h3>
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
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Microbiology;
