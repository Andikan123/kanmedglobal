import React from 'react';
import { useParams } from 'react-router-dom';
import { physiologyTopics, anatomyTopics, pharmacologyTopics, microbiologyTopics } from '../../data';
import "./TopicPage.css"

// Function to get topics based on the course
const getTopicsForCourse = (course) => {
  switch(course) {
    case 'anatomy':
      return anatomyTopics;
    case 'microbiology':
      return microbiologyTopics;
    case 'physiology':
      return physiologyTopics;
    case 'pharmacology':
      return pharmacologyTopics;
    default:
      return null;
  }
};

const TopicPage = () => {
  const { course, year, id } = useParams();  // Get course, year, and topic ID from URL params
  const topics = getTopicsForCourse(course);  // Get the topics based on course
  const topic = topics?.[year]?.find(t => t.id === parseInt(id));  // Find the correct topic based on year and ID

  if (!topic) {
    return <div>Topic not found!</div>;  // If topic doesn't exist, show a fallback message
  }
  console.log(topic.videoUrl)

  return (
    <div className="topic-page">
      <h1>{topic.title}</h1>
      <p>{topic.description}</p>
      {/* Video Container */}
      <div className="video-container">
        <iframe 
          title={topic.title} 
          src= "https://www.youtube.com/embed/QMKFxwRHlIo"
          frameBorder="0" 
          allowFullScreen
        ></iframe>
       
      </div>
    </div>
  );
  

};

export default TopicPage;
