import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, path: '/', text: 'Home' }, // Change href to path for React Router
  { id: 2, path: '/quizzes', text: 'Quizzes' },
  { id: 3, path: '/courses', text: 'Courses' },
  { id: 4, path: '/contact', text: 'Contact Us' },
  { id: 5, path: '/blog', text: 'Blog' },
];

export const socialLinks = [
  { id: 1, href: 'https://facebook.com/kanmed', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com/kanmed', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://linkedin.com/company/kanmed', icon: 'fab fa-linkedin' },
  { id: 4, href: 'https://instagram.com/kanmed', icon: 'fab fa-instagram' },
];


export const services = [
  {
    id: 1,
    icon: 'fas fa-brain fa-fw',  // Icon for Anatomy
    title: 'Anatomy',
    text: 'Explore the human body’s structure in detail, including bones, muscles, organs, and tissues.',
    path:"/anatomy"
  },
  {
    id: 2,
    icon: 'fas fa-heartbeat fa-fw',  // Icon for Physiology
    title: 'Physiology',
    text: 'Understand the functions of the body’s systems and how they work together to maintain homeostasis.',
    path: "/physiology"
  },
  {
    id: 3,
    icon: 'fas fa-flask fa-fw',  // Icon for Pharmacology
    title: 'Pharmacology',
    text: 'Learn the science of drugs and their effects on the human body, from absorption to excretion.',
    path: "/pharmacology"
  },
  {
    id: 4,
    icon: 'fas fa-virus fa-fw',  // Icon for Microbiology
    title: 'Microbiology',
    text: 'Study microorganisms, their role in health and disease, and the principles of infection control.',
    path: "/microbiology"
  },
  {
    id: 5,
    icon: 'fas fa-stethoscope fa-fw',  // Icon for Medical Ethics
    title: 'Medical Ethics',
    text: 'Delve into the moral principles that govern the practice of medicine and healthcare.',
    path: "/ethics"
  },
  {
    id: 6,
    icon: 'fas fa-syringe fa-fw',  // Icon for Immunology
    title: 'Immunology',
    text: 'Learn about the immune system, immune responses, and how the body defends itself against infections.',
    path: "/immunology"
  },
];


export const lessons = [
  {
    id: 1,
    image: tour1, // Image for Anatomy 101
    date: 'January 26th, 2025',  // Start date for lesson
    title: 'Anatomy 101',
    info: `Learn the basics of human anatomy, covering the skeletal, muscular, and organ systems. This lesson will lay the foundation for understanding how the body functions.`,
    location: 'Online',
    duration: 6, // Duration in hours
    cost: 120, // Lesson cost
  },
  {
    id: 2,
    image: tour2, // Image for Physiology Basics
    date: 'February 1st, 2025',
    title: 'Physiology Basics',
    info: `Explore the physiological processes that keep the human body functioning, focusing on systems like the cardiovascular, respiratory, and nervous systems.`,
    location: 'Hybrid',
    duration: 8,
    cost: 150,
  },
  {
    id: 3,
    image: tour3, // Image for Medical Ethics
    date: 'March 15th, 2025',
    title: 'Medical Ethics 101',
    info: `Understand the ethical considerations in medicine, including patient rights, confidentiality, and professional responsibility.`,
    location: 'In-Class',
    duration: 5,
    cost: 100,
  },
  {
    id: 4,
    image: tour4, // Image for Pathology Introduction
    date: 'April 5th, 2025',
    title: 'Pathology Introduction',
    info: `Get an introduction to pathology, focusing on the study of diseases, how they affect the body, and diagnostic techniques.`,
    location: 'Online',
    duration: 7,
    cost: 180,
  },
];

export const anatomyTopics = {
  year1: [
    { id: 1, title: "Introduction to Human Anatomy", description: "Basic overview of human body systems." ,videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E" },
    { id: 2, title: "Skeletal System", description: "Detailed study of bones and joints.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 3, title: "Muscular System", description: "Study of muscles and their functions.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 4, title: "Cardiovascular System", description: "Heart anatomy and blood circulation.",videoUrl: "https://www.youtube.com/embed/d1xHz9zjz4k"  },
    { id: 5, title: "Respiratory System", description: "Understanding lungs and the process of respiration.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 6, title: "Digestive System", description: "Structure and function of the digestive tract.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 7, title: "Nervous System", description: "Overview of the brain, spinal cord, and peripheral nerves.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 8, title: "Endocrine System", description: "Hormonal regulation and glands of the body.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 9, title: "Integumentary System", description: "Study of skin, hair, and nails." ,videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E" },
    { id: 10, title: "Lymphatic System", description: "Immune defense and fluid balance.",videoUrl:  "https://www.youtube.com/embed/fJZ99wZw-QM"  }
  ],
  year2: [
    { id: 1, title: "Brain and Cranial Nerves", description: "Detailed study of brain anatomy and nerves." ,videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E" },
    { id: 2, title: "Spinal Cord and Spinal Nerves", description: "In-depth exploration of spinal cord structures.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 3, title: "Musculoskeletal System", description: "Detailed anatomy of muscles and bones." ,videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E" },
    { id: 4, title: "Cardiac Anatomy", description: "Detailed study of the heart and vascular anatomy.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 5, title: "Abdominal Cavity", description: "Anatomy of the abdomen and its organs.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 6, title: "Pelvic Anatomy", description: "Study of pelvic organs and structures.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 7, title: "Thoracic Anatomy", description: "Understanding the thoracic cavity and its contents.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 8, title: "Urinary System", description: "Anatomy of kidneys, bladder, and urinary tract.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 9, title: "Reproductive System", description: "Study of male and female reproductive anatomy." ,videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E" },
    { id: 10, title: "Endocrine Glands", description: "Detailed anatomy of endocrine organs and glands.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  }
  ]
};

export const microbiologyTopics = {
  year1: [
    { id: 1, title: "Introduction to Microbiology", description: "Overview of microbiology and the role of microorganisms.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 2, title: "Bacteria and Archaea", description: "Characteristics and classification of prokaryotic organisms.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 3, title: "Viruses and Virology", description: "Study of viruses, their structure, and their life cycles.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 4, title: "Microbial Nutrition", description: "The nutritional requirements and growth of microorganisms.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 5, title: "Microscopy and Staining Techniques", description: "Techniques for visualizing and identifying microorganisms.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 6, title: "Fungi and Protozoa", description: "Study of eukaryotic microorganisms, including fungi and protozoa.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 7, title: "Antimicrobial Agents", description: "Introduction to antibiotics, disinfectants, and their mechanisms.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 8, title: "Pathogenicity and Virulence", description: "How microorganisms cause diseases in humans.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 9, title: "Immunology Basics", description: "Overview of the immune system's response to pathogens.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 10, title: "Microbial Ecology", description: "The interactions of microorganisms in their environment.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  }
  ],
  year2: [
    { id: 1, title: "Microbial Genetics", description: "The study of genetic material in microorganisms.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 2, title: "Bacterial Pathogenesis", description: "Mechanisms by which bacteria cause infections.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 3, title: "Viral Infections", description: "Study of viral diseases and the host immune response.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 4, title: "Antimicrobial Resistance", description: "Understanding mechanisms of drug resistance in microorganisms.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 5, title: "Fungal Infections", description: "Pathogenesis, diagnosis, and treatment of fungal infections.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 6, title: "Microbiome and Health", description: "The role of the microbiome in human health and disease." ,videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E" },
    { id: 7, title: "Epidemiology", description: "Study of how diseases spread and how outbreaks are controlled.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 8, title: "Immunization and Vaccines", description: "The science behind vaccines and their role in preventing infections." ,videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E" },
    { id: 9, title: "Laboratory Techniques in Microbiology", description: "Advanced laboratory techniques for diagnosing microbial infections.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  },
    { id: 10, title: "Clinical Microbiology", description: "Microbiology in the clinical setting and its role in diagnosis and treatment.",videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E"  }
  ]
};

export const pharmacologyTopics = {
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

export const physiologyTopics = {
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