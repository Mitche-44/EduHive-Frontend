import React, { useState, useEffect } from 'react';

const quizData = [
  {
    id: '03',
    unit: '03',
    subject: 'CRP',
    issueDate: '03/02/2025',
    deadline: '03/05/2025',
    status: 'Submitted',
    isCompleted: true,
  },
  {
    id: '01',
    unit: '01',
    subject: 'Introduction to Programming',
    issueDate: '03/09/2025',
    deadline: '03/09/2025',
    status: 'Pending',
    isCompleted: false,
  },
  {
    id: '01-2',
    unit: '01',
    subject: 'Database',
    issueDate: '03/02/2025',
    deadline: '03/10/2025',
    status: 'Pending',
    isCompleted: false,
  },
  {
    id: '01-3',
    unit: '01',
    subject: 'Networking',
    issueDate: '02/05/2025',
    deadline: '03/11/2025',
    status: 'Pending',
    isCompleted: false,
  },
  {
    id: '02',
    unit: '02',
    subject: 'Security',
    issueDate: '02/08/2025',
    deadline: '03/10/2025',
    status: 'Submitted',
    isCompleted: true,
  },
];

export default function QuizInterface() {
  const [checkedItems, setCheckedItems] = useState(
    new Set(quizData.filter(item => item.isCompleted).map(item => item.id))
  );
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const toggleCheck = (id) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const CheckIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5 h-3.5"
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
    </svg>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Submitted':
        return 'text-green-600';
      case 'Pending':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case 'Submitted':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const completedQuizzes = quizData.filter(quiz => quiz.status === 'Submitted').length;
  const pendingQuizzes = quizData.filter(quiz => quiz.status === 'Pending').length;
  const completionRate = Math.round((completedQuizzes / quizData.length) * 100);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-5xl">
            <h1 className="text-4xl font-bold text-[#202124] mb-4">Quizzes</h1>
            <p className="text-base text-[#5f6368] mb-8">
              Track and manage your quiz assignments across all modules.
            </p>

            {/* Progress Overview */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <button className="bg-[#202124] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#303134] transition-all">
                View All Quizzes
              </button>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-[#202124] font-medium">{pendingQuizzes} quizzes pending</span>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${completedQuizzes > 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${pendingQuizzes > 0 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  </div>
                </div>
                <div className="w-80 h-3 bg-[#e8eaed] rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-[#4285F4] to-[#34A853] rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${completionRate}%` }}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 animate-pulse rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-[#5f6368]">{completionRate}% complete</span>
                  <span className="text-xs text-[#5f6368]">{completedQuizzes}/{quizData.length} quizzes done</span>
                </div>
              </div>
            </div>

            {/* Quiz List */}
            <div className="space-y-4">
              {quizData.map((quiz, index) => {
                const isSelected = selectedQuiz === quiz.id;
                const isCompleted = quiz.status === 'Submitted';

                return (
                  <div
                    key={quiz.id}
                    className={`p-6 border border-[#dadce0] rounded-lg transition-all duration-200 cursor-pointer ${
                      isSelected ? 'bg-[#e8f0fe] border-[#1a73e8]' : 'hover:bg-[#f8f9fa]'
                    }`}
                    onClick={() => setSelectedQuiz(isSelected ? null : quiz.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        {/* Checkbox */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCheck(quiz.id);
                          }}
                          className={`w-6 h-6 rounded-md border-2 flex justify-center items-center transition-all ${
                            checkedItems.has(quiz.id)
                              ? 'bg-[#34A853] border-[#34A853] text-white'
                              : 'border-[#dadce0] hover:border-[#1a73e8]'
                          }`}
                        >
                          {checkedItems.has(quiz.id) && <CheckIcon />}
                        </button>

                        {/* Quiz Info */}
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-[#e8f0fe] text-[#1a73e8] rounded-full text-sm font-bold">
                              {quiz.unit}
                            </span>
                            <h3 className="text-lg font-semibold text-[#202124]">{quiz.subject}</h3>
                          </div>

                          <div className="flex items-center gap-2 mt-2">
                            <div className={`w-2 h-2 rounded-full ${getStatusDot(quiz.status)}`}></div>
                            <span className={`text-xs font-medium ${getStatusColor(quiz.status)}`}>
                              {quiz.status.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Status Indicator */}
                      <div className="flex items-center">
                        {isCompleted ? (
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="mt-8 pt-6 border-t border-[#dadce0]">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#5f6368]">
                  Showing 1-{quizData.length} of {quizData.length} quizzes
                </span>
                <div className="flex gap-2">
                  <button
                    className="px-4 py-2 text-sm text-[#5f6368] border border-[#dadce0] rounded-md hover:bg-[#f8f9fa] transition-colors"
                    disabled
                  >
                    Previous
                  </button>
                  <button className="px-4 py-2 text-sm text-white bg-[#1a73e8] rounded-md hover:bg-[#1557b0] transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="hidden lg:block w-full max-w-xs">
            <div className="bg-white border border-[#dadce0] rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#202124] mb-4">Quiz Statistics</h3>
              <ul className="text-sm text-[#5f6368] space-y-3">
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    Completed
                  </span>
                  <span className="font-medium text-[#202124]">{completedQuizzes}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    Pending
                  </span>
                  <span className="font-medium text-[#202124]">{pendingQuizzes}</span>
                </li>
                <li className="pt-2 border-t border-[#dadce0]">
                  <span className="flex items-center justify-between">
                    <span>📊 Success Rate</span>
                    <span className="font-medium text-[#202124]">{completionRate}%</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-white border border-[#dadce0] rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#202124] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 text-sm text-[#1a73e8] hover:bg-[#e8f0fe] rounded-md transition-colors">
                  📋 View Schedule
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-[#1a73e8] hover:bg-[#e8f0fe] rounded-md transition-colors">
                  📈 Progress Report
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-[#1a73e8] hover:bg-[#e8f0fe] rounded-md transition-colors">
                  🔔 Set Reminders
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}