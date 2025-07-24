import React, { useState, useEffect } from 'react';

export default function Index() {
  const [lessonProgress, setLessonProgress] = useState({
    1: { tutorial: 75, exercise: 50, tutorialCompleted: false, exerciseCompleted: false },
    2: { tutorial: 40, exercise: 0, tutorialCompleted: false, exerciseCompleted: false },
    3: { tutorial: 0, exercise: 0, tutorialCompleted: false, exerciseCompleted: false },
    4: { tutorial: 0, exercise: 0, tutorialCompleted: false, exerciseCompleted: false }
  });

  const [courseProgress, setCourseProgress] = useState(31);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    const totalLessons = Object.keys(lessonProgress).length;
    const totalItems = totalLessons * 2;

    let completedItems = 0;
    let totalProgressSum = 0;

    Object.values(lessonProgress).forEach(lesson => {
      totalProgressSum += lesson.tutorial + lesson.exercise;
      if (lesson.tutorial >= 100) completedItems += 1;
      if (lesson.exercise >= 100) completedItems += 1;
    });

    const newProgress = Math.round((totalProgressSum / (totalLessons * 200)) * 100);
    setCourseProgress(newProgress);
  }, [lessonProgress]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(courseProgress);
    }, 300);
    return () => clearTimeout(timer);
  }, [courseProgress]);

  const updateProgress = (lessonId, type, newProgress) => {
    setLessonProgress(prev => ({
      ...prev,
      [lessonId]: {
        ...prev[lessonId],
        [type]: Math.min(newProgress, 100),
        [`${type}Completed`]: newProgress >= 100
      }
    }));
  };

  const incrementProgress = (lessonId, type) => {
    const currentProgress = lessonProgress[lessonId][type];
    const increment = Math.random() * 25 + 10;
    updateProgress(lessonId, type, currentProgress + increment);
  };

  const lessons = [
    { id: 1, title: "Arithmetic and Variables", description: "Make calculations, and define and modify variables.", estimatedTime: "45 min" },
    { id: 2, title: "Functions", description: "Organize your code and avoid redundancy.", estimatedTime: "60 min" },
    { id: 3, title: "Data Types", description: "Explore integers, floats, booleans, and strings.", estimatedTime: "50 min" },
    { id: 4, title: "Conditions and Conditional Statements", description: "Modify how functions run, depending on the input.", estimatedTime: "55 min" }
  ];

  const getLessonStatus = (lesson) => {
    const tutorialComplete = lesson.tutorial >= 100;
    const exerciseComplete = lesson.exercise >= 100;
    if (tutorialComplete && exerciseComplete) return 'completed';
    if (lesson.tutorial > 0 || lesson.exercise > 0) return 'in-progress';
    return 'not-started';
  };

  const completedLessons = Object.values(lessonProgress).filter(lesson =>
    lesson.tutorial >= 100 && lesson.exercise >= 100
  ).length;

  const inProgressLessons = Object.values(lessonProgress).filter(lesson =>
    (lesson.tutorial > 0 || lesson.exercise > 0) && !(lesson.tutorial >= 100 && lesson.exercise >= 100)
  ).length;

  const hoursRemaining = Math.max(0, Math.round((5 - (animatedProgress / 100) * 5) * 10) / 10);

  const ProgressCircle = ({ progress, size = 40, isCompleted = false, isActive = false }) => {
    const radius = (size - 4) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute -rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="#E8EAED" strokeWidth="3" fill="none" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={isCompleted ? "#34A853" : progress > 0 ? "#4285F4" : "#E8EAED"}
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-700 ease-out"
            style={{ filter: isActive ? 'drop-shadow(0 0 6px rgba(66, 133, 244, 0.4))' : 'none' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {isCompleted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-600">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
            </svg>
          ) : (
            <div className="text-xs font-semibold text-gray-600">{Math.round(progress)}%</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 max-w-4xl">
            <h1 className="text-4xl font-bold text-[#202124] mb-4">Intro to Programming</h1>
            <p className="text-base text-[#5f6368] mb-8">
              Get started with Python, even if you have no coding experience.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <button className="bg-[#202124] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#303134] transition-all">
                Continue Course
              </button>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-[#202124] font-medium">{hoursRemaining} hours to go</span>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${completedLessons > 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${inProgressLessons > 0 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${courseProgress > 50 ? 'bg-yellow-500' : 'bg-gray-300'}`}></div>
                  </div>
                </div>
                <div className="w-80 h-3 bg-[#e8eaed] rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-[#4285F4] to-[#34A853] rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${animatedProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 animate-pulse rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-[#5f6368]">{animatedProgress}% complete</span>
                  <span className="text-xs text-[#5f6368]">{completedLessons}/{lessons.length} lessons done</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {lessons.map(lesson => {
                const data = lessonProgress[lesson.id];
                const status = getLessonStatus(data);
                const isSelected = selectedLesson === lesson.id;

                return (
                  <div
                    key={lesson.id}
                    className={`p-4 border rounded-lg transition-all duration-200 cursor-pointer ${isSelected ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'}`}
                    onClick={() => setSelectedLesson(isSelected ? null : lesson.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-lg font-semibold">{lesson.title}</h2>
                        <p className="text-sm text-gray-600">{lesson.description}</p>
                        <p className="text-xs mt-1 text-gray-500">⏱️ {lesson.estimatedTime}</p>
                        <p className={`text-xs font-medium mt-1 ${
                          status === 'completed' ? 'text-green-600' :
                          status === 'in-progress' ? 'text-blue-600' :
                          'text-gray-500'
                        }`}>
                          {status.replace('-', ' ').toUpperCase()}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div onClick={(e) => { e.stopPropagation(); incrementProgress(lesson.id, 'tutorial'); }}>
                          <ProgressCircle progress={data.tutorial} isCompleted={data.tutorial >= 100} isActive={isSelected} />
                        </div>
                        <div onClick={(e) => { e.stopPropagation(); incrementProgress(lesson.id, 'exercise'); }}>
                          <ProgressCircle progress={data.exercise} isCompleted={data.exercise >= 100} isActive={isSelected} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-300">
              <h3 className="text-lg font-semibold text-[#202124] mb-2">Bonus Content</h3>
              <p className="text-sm text-[#5f6368]">
                Track your progress and unlock bonus content once all lessons are completed.
              </p>
            </div>
          </div>

          <div className="hidden lg:block w-full max-w-xs">
            <div className="bg-white border border-[#dadce0] rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#202124] mb-2">Your Stats</h3>
              <ul className="text-sm text-[#5f6368] space-y-2">
                <li>🎯 Course Progress: <span className="font-medium text-[#202124]">{courseProgress}%</span></li>
                <li>📚 Lessons Completed: <span className="font-medium text-[#202124]">{completedLessons}/{lessons.length}</span></li>
                <li>🕐 Estimated Time Left: <span className="font-medium text-[#202124]">{hoursRemaining} hrs</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
