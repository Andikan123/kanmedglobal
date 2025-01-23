import React, { useState } from 'react';
import "./Quizzes.css"

// Define the quiz questions
const questions = {
  anatomy: [
    {
      question: "Which organ is responsible for pumping blood in the human body?",
      options: ["Lungs", "Heart", "Liver", "Kidneys"],
      answer: "Heart",
    },
    {
      question: "How many bones are there in the adult human body?",
      options: ["206", "208", "210", "212"],
      answer: "206",
    },
  ],
  physiology: [
    {
      question: "What is the primary function of red blood cells?",
      options: ["Transport oxygen", "Fight infections", "Clot blood", "Digest food"],
      answer: "Transport oxygen",
    },
    {
      question: "Which hormone regulates blood sugar levels?",
      options: ["Insulin", "Adrenaline", "Testosterone", "Cortisol"],
      answer: "Insulin",
    },
  ],
  microbiology: [
    {
      question: "What bacterium causes tuberculosis?",
      options: ["Mycobacterium tuberculosis", "E. coli", "Streptococcus pneumoniae", "Salmonella"],
      answer: "Mycobacterium tuberculosis",
    },
    {
      question: "Which microorganism is responsible for malaria?",
      options: ["Plasmodium", "Toxoplasma", "Giardia", "Trichomonas"],
      answer: "Plasmodium",
    },
  ],
};

const Quizzes = () => {
  // State to track category, question index, answers, and score
  const [category, setCategory] = useState('anatomy');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[category][currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions[category].length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }

    setSelectedAnswer(null);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Medical Quiz</h1>
        {!quizCompleted && (
          <div className="quiz-categories">
            <button onClick={() => handleCategoryChange('anatomy')}>Anatomy</button>
            <button onClick={() => handleCategoryChange('physiology')}>Physiology</button>
            <button onClick={() => handleCategoryChange('microbiology')}>Microbiology</button>
          </div>
        )}
      </div>

      <div className="quiz-body">
        {quizCompleted ? (
          <div className="quiz-results">
            <h2>Quiz Completed!</h2>
            <p>Your score: {score} out of {questions[category].length}</p>
          </div>
        ) : (
          <>
            <h2>{questions[category][currentQuestionIndex].question}</h2>
            <div className="quiz-options">
              {questions[category][currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelection(option)}
                  className={selectedAnswer === option ? 'selected' : ''}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="quiz-navigation">
              <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
                Next Question
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quizzes;
