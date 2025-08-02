import React, { useState, useEffect } from 'react';

const quizQuestionsData = {
  '01': {
    subject: 'Introduction to Programming',
    unit: '01',
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: "What is the primary purpose of a variable in programming?",
        options: [
          "To store and manipulate data",
          "To create loops",
          "To define functions",
          "To handle errors"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which of the following is NOT a primitive data type in most programming languages?",
        options: [
          "Integer",
          "String",
          "Array",
          "Boolean"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What does IDE stand for?",
        options: [
          "Internet Development Environment",
          "Integrated Development Environment",
          "Interactive Design Editor",
          "Internal Data Exchange"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Which programming paradigm focuses on objects and classes?",
        options: [
          "Functional Programming",
          "Procedural Programming",
          "Object-Oriented Programming",
          "Logic Programming"
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "What is the time complexity of accessing an element in an array by index?",
        options: [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n²)"
        ],
        correctAnswer: 2
      }
    ]
  },
  '01-2': {
    subject: 'Database',
    unit: '01',
    totalQuestions: 8,
    questions: [
      {
        id: 1,
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "Standard Query Language",
          "System Query Language"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which of the following is a NoSQL database?",
        options: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Oracle"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What is a primary key in a database table?",
        options: [
          "A key that can be null",
          "A unique identifier for each record",
          "A foreign key reference",
          "An index for faster searches"
        ],
        correctAnswer: 1
      }
    ]
  }
};

export default function QuizQuestionsPage() {
  const [currentQuiz, setCurrentQuiz] = useState('01');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const quiz = quizQuestionsData[currentQuiz];
  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  const getQuestionStatus = (index) => {
    if (selectedAnswers.hasOwnProperty(index)) {
      return 'answered';
    }
    if (index === currentQuestion) {
      return 'current';
    }
    return 'unanswered';
  };

  if (showResults) {
    const score = calculateScore();
    const correctAnswers = quiz.questions.filter((q, index) => selectedAnswers[index] === q.correctAnswer).length;

    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#202124] mb-2">Quiz Results</h1>
            <p className="text-lg text-[#5f6368]">{quiz.subject}</p>
          </div>

          {/* Results Card */}
          <div className="bg-white border border-[#dadce0] rounded-xl p-8 shadow-sm mb-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-[#4285F4] to-[#34A853] rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{score}%</span>
              </div>

              <h2 className="text-2xl font-semibold text-[#202124] mb-2">
                {score >= 70 ? 'Congratulations!' : 'Keep Learning!'}
              </h2>

              <p className="text-[#5f6368] mb-6">
                You scored {correctAnswers} out of {quiz.questions.length} questions correctly
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => window.location.reload()}
                  className="bg-[#1a73e8] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1557b0] transition-colors"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={() => setCurrentQuiz('01-2')}
                  className="border border-[#dadce0] text-[#202124] px-6 py-3 rounded-lg font-medium hover:bg-[#f8f9fa] transition-colors"
                >
                  Next Quiz
                </button>
              </div>
            </div>
          </div>

          {/* Answer Review */}
          <div className="bg-white border border-[#dadce0] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#202124] mb-6">Answer Review</h3>
            <div className="space-y-4">
              {quiz.questions.map((q, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === q.correctAnswer;

                return (
                  <div key={q.id} className="border-b border-[#dadce0] pb-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                        isCorrect ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {isCorrect ? '✓' : '✗'}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-[#202124] mb-2">
                          {index + 1}. {q.question}
                        </p>
                        <p className="text-sm text-[#5f6368]">
                          <span className="font-medium">Your answer:</span> {q.options[userAnswer] || 'Not answered'}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-green-600">
                            <span className="font-medium">Correct answer:</span> {q.options[q.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#202124] mb-2">{quiz.subject}</h1>
            <p className="text-[#5f6368]">Unit {quiz.unit} • {quiz.totalQuestions} Questions</p>
          </div>

          <button
            onClick={handleSubmitQuiz}
            className="bg-[#34A853] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2d8f47] transition-colors"
          >
            Submit Quiz
          </button>
        </div>

        <div className="flex gap-8">
          {/* Main Question Area */}
          <div className="flex-1">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-[#202124]">Progress</span>
                <span className="text-sm text-[#5f6368]">
                  {currentQuestion + 1} of {quiz.questions.length}
                </span>
              </div>
              <div className="w-full h-2 bg-[#e8eaed] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#4285F4] to-[#34A853] rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white border border-[#dadce0] rounded-xl p-8 shadow-sm mb-8">
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#e8f0fe] text-[#1a73e8] rounded-full text-sm font-bold mb-4">
                  {currentQuestion + 1}
                </span>
                <h2 className="text-xl font-semibold text-[#202124] leading-relaxed">
                  {question.question}
                </h2>
              </div>

              {/* Answer Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 border-2 rounded-lg transition-all ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-[#1a73e8] bg-[#e8f0fe] text-[#1a73e8]'
                        : 'border-[#dadce0] hover:border-[#1a73e8] hover:bg-[#f8f9fa]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-[#1a73e8] bg-[#1a73e8]'
                          : 'border-[#dadce0]'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium">{String.fromCharCode(65 + index)}.</span>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className="px-6 py-3 text-[#5f6368] border border-[#dadce0] rounded-lg hover:bg-[#f8f9fa] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>

              {currentQuestion === quiz.questions.length - 1 ? (
                <button
                  onClick={handleSubmitQuiz}
                  className="px-6 py-3 bg-[#34A853] text-white rounded-lg font-medium hover:bg-[#2d8f47] transition-colors"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 bg-[#1a73e8] text-white rounded-lg font-medium hover:bg-[#1557b0] transition-colors"
                >
                  Next →
                </button>
              )}
            </div>
          </div>

          {/* Sidebar - Question Navigation */}
          <div className="w-80">
            <div className="bg-white border border-[#dadce0] rounded-xl p-6 shadow-sm sticky top-8">
              <h3 className="text-lg font-semibold text-[#202124] mb-4">Question Navigation</h3>

              <div className="grid grid-cols-5 gap-2 mb-6">
                {quiz.questions.map((_, index) => {
                  const status = getQuestionStatus(index);
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentQuestion(index)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                        status === 'current'
                          ? 'bg-[#1a73e8] text-white'
                          : status === 'answered'
                          ? 'bg-[#34A853] text-white'
                          : 'bg-[#f8f9fa] text-[#5f6368] hover:bg-[#e8eaed]'
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#34A853] rounded"></div>
                  <span className="text-[#5f6368]">Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#1a73e8] rounded"></div>
                  <span className="text-[#5f6368]">Current</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#f8f9fa] border border-[#dadce0] rounded"></div>
                  <span className="text-[#5f6368]">Not answered</span>
                </div>
              </div>

              {/* Quiz Stats */}
              <div className="mt-6 pt-4 border-t border-[#dadce0]">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Answered:</span>
                    <span className="font-medium text-[#202124]">
                      {Object.keys(selectedAnswers).length}/{quiz.questions.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}