"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/ui/progressBar";
import { ChevronLeft, X } from "lucide-react";
import ResultCard from "./ResultCard";

const questions = [
  {
    questionText: "What is React?",
    answers: [
      {
        answerText: "a library for building user interfaces",
        isCorrect: true,
        id: 1,
      },
      { answerText: "a front-end framework", isCorrect: false, id: 2 },
      { answerText: "a back-end framework", isCorrect: false, id: 3 },
      { answerText: "a database", isCorrect: false, id: 4 },
    ],
  },
  {
    questionText: "What is JSX?",
    answers: [
      { answerText: "JavaScript XML", isCorrect: true, id: 1 },
      { answerText: "JavaScript", isCorrect: false, id: 2 },
      { answerText: "JavaScript and XML", isCorrect: false, id: 3 },
      { answerText: "JavaScript and HTML", isCorrect: false, id: 4 },
    ],
  },
  {
    questionText: "What is the virtual DOM?",
    answers: [
      {
        answerText: "A virtual representation of the DOM",
        isCorrect: true,
        id: 1,
      },
      { answerText: "A real DOM", isCorrect: false, id: 2 },
      {
        answerText: "A virtual representation of the browser",
        isCorrect: false,
        id: 3,
      },
      {
        answerText: "A virtual representation of the server",
        isCorrect: false,
        id: 4,
      },
    ],
  },
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleNext = () => {
    if (!started) {
      setStarted(true); // This should start the quiz
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);

      setSelectedAnswer(null);
      setIsCorrect(null); // Reset correctness state
    } 
    // } else {
    //   // Handle quiz end
    //   alert("Quiz completed! Your score: " + score);
    //   setStarted(false);
    //   setCurrentQuestion(0);
    //   setScore(0);
    // }
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer.id); //needs to be defined or corrected!!!
    const isCurrentCorrect = answer.isCorrect;
    if (isCurrentCorrect) {
      setScore(score + 1);
    }
    setIsCorrect(isCurrentCorrect);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="position-sticky top-0 z-10 shadow-md py-4 w-full">
        <header className="grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between py-2 gap-2">
          <Button
            size="icon"
            variant="outline"
          >
            <ChevronLeft />
          </Button>
          <ProgressBar value={(currentQuestion / questions.length) * 100} />
          <Button
            size="icon"
            variant="outline"
          >
            <X />
          </Button>
        </header>
      </div>
      <main className="flex justify-center flex-1">
        {!started ? (
          <h1 className="text-3xl font-bold">Welcome to Quiz Time! 👋</h1>
        ) : (
          <div>
            <h2 className="text-3xl font-bold">
              {questions[currentQuestion].questionText}
            </h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
              {questions[currentQuestion].answers.map((answer) => (
                <Button
                  key={answer.id}
                  variant="secondary"
                  onClick={() => handleAnswer(answer)}
                >
                  {answer.answerText}
                </Button>
              ))}
            </div>
          </div>
        )}
      </main>
      <footer className="footer pb-9 px-6 relative mb-0">
        <ResultCard
          isCorrect={isCorrect}
          correctAnswer={
            questions[currentQuestion].answers.find(
              (answer) => answer.isCorrect === true
            )?.answerText
          }
        />
        <Button
          variant="neo"
          size="lg"
          onClick={handleNext}
        >
          {!started || currentQuestion === questions.length - 1
            ? "Start"
            : "Next"}
        </Button>
      </footer>
    </div>
  );
}
