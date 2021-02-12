import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuestions } from './services/service_questions'
import { UsefulQuestion } from './Types/quiz_types'
import QuestionCard from './Compnents/QuestionDisplay';

function App() {

  let [quiz, setquiz] = useState<UsefulQuestion[]>([])
  let [showResult, setShowResult] = useState(false)
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const questions: UsefulQuestion[] = await getQuestions(5, "easy")
      console.log(questions);
      setquiz(questions);
    }
    fetchData();
  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    if (userAns === quiz[currentStep].answer) {
      setScore(++score)
    }
    e.preventDefault();
    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep);
    }
    else {
      setShowResult(true);
    }
  }

  if (!quiz.length) {
    return (<h3>Loading...</h3>)
  }
  if (showResult) {
    return (
      <div className="question-container result-container">
        <h2>Result</h2>
        <p className="result-text">
          Your Final Result is
          <b> {score}</b> out of <b>{quiz.length}</b>
          <p>PLEASE REFRESH THIS PAGE TO PLAY AGAIN!</p>
        </p>
      </div>
    )
  }
  return (
    <div>
      <div className="Intro-Text">
        <p className="Welcome">
          <b>
            Welcome to The Trivia-5-Questions Quiz App
          </b>
        </p>
        <p>
          Here We Will Test Your General-Knowledge By Asking Five Questions In A Row.
        </p>
        <p>
          For Each Answer Please Select A <b>Correct Answer</b> From The Given Options!
        </p>
      </div>
      

      <QuestionCard
        options={quiz[currentStep].options}
        question={quiz[currentStep].question}
        callback={handleSubmit}
        questionNo={currentStep}
        totalQuestions={quiz.length}
      />
    </div>
  );
}

export default App;
