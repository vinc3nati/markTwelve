import React, { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      questionText:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      answerOptions: [
        { answerText: "45°", isCorrect: false },
        { answerText: "90°", isCorrect: true },
        { answerText: "60°", isCorrect: false }
      ]
    },
    {
      questionText:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      answerOptions: [
        { answerText: "obtuse", isCorrect: false },
        { answerText: "acute", isCorrect: false },
        { answerText: "right angled triangle", isCorrect: true }
      ]
    },
    {
      questionText: "A triangle can have ?",
      answerOptions: [
        { answerText: "1 right angle", isCorrect: true },
        { answerText: "2 right angles", isCorrect: false }
      ]
    },
    {
      questionText: "Which of the following can form a right angled triangle?",
      answerOptions: [
        { answerText: "14, 15, 26", isCorrect: false },
        { answerText: "12, 16, 20", isCorrect: true }
      ]
    },
    {
      questionText: "Which of the following triangles are always similar?",
      answerOptions: [
        { answerText: "Equilateral triangle", isCorrect: true },
        { answerText: "Isosceles triangle", isCorrect: false }
      ]
    },
    {
      questionText:
        "If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?",
      answerOptions: [
        { answerText: "100°", isCorrect: true },
        { answerText: "85°", isCorrect: false }
      ]
    },
    {
      questionText:
        "If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?",
      answerOptions: [
        { answerText: "30°", isCorrect: true },
        { answerText: "10°", isCorrect: false }
      ]
    },
    {
      questionText: "The perimeter of scalene triangle with sides a, b, c is ?",
      answerOptions: [
        { answerText: "a + b + c", isCorrect: true },
        { answerText: "2a", isCorrect: false },
        { answerText: "None of these", isCorrect: false }
      ]
    },
    {
      questionText: "A scalene triangle has ___ lines of symmetry",
      answerOptions: [
        { answerText: "no", isCorrect: true },
        { answerText: "2", isCorrect: false },
        { answerText: "15", isCorrect: false }
      ]
    },
    {
      questionText:
        "There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",
      answerOptions: [
        { answerText: "45°", isCorrect: true },
        { answerText: "65°", isCorrect: false },
        { answerText: "85°", isCorrect: false }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function reset() {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  }
  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}{" "}
          {score > 0 ? <span>🥳🎊</span> : <span>🙁</span>}
          <button onClick={reset} className="btn btn-reset">
            reset
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="btn"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
