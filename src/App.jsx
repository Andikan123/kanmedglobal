import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/newspage/NewsPage";
import Quizzes from "./pages/quiz/Quizzes";
import CoursesPage from "./pages/coursepage/CoursePage";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Anatomy from "./pages/singlePages/anatomy/Anatomy";
import Physiology from "./pages/singlePages/physiology/Physiology";
import Pharmacology from "./pages/singlePages/pharmacology/Pharmocology";
import Microbiology from "./pages/singlePages/microbiology/Microbiology";
import TopicPage from './pages/topicspage/TopicPage'; // Import the TopicPage component
import './components/I18n'; // Import the i18n configuration to initialize i18next

function App() {
  const { t } = useTranslation(); // Use the hook to access translations

  return (
    <Router>
      <React.Fragment>
        <Navbar /> {/* Navbar component will be present on all pages */}
        
        {/* Define the routes here */}
        <Routes>
          {/* General Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          {/* Course Pages */}
          <Route path="/anatomy" element={<Anatomy />} />
          <Route path="/physiology" element={<Physiology />} />
          <Route path="/pharmacology" element={<Pharmacology />} />
          <Route path="/microbiology" element={<Microbiology />} />

          {/* Dynamic Topic Pages */}
          <Route path="/:course/:year/:id" element={<TopicPage />} /> {/* Add a dynamic route for all courses */}
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
