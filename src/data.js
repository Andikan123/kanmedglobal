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
