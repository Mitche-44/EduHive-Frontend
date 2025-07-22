import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 md:px-16 py-24 space-y-28">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Unleash Your <span className="text-blue-600">Learning Potential</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Master in-demand skills with expert-led courses designed to boost your
            career at your own pace.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
              Browse Courses
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/600"
            alt="Hero illustration"
            className="rounded-lg shadow-lg w-full max-w-lg"
          />
        </div>
      </section>

      {/* Stats Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { num: "10K+", label: "Students" },
          { num: "200+", label: "Courses" },
          { num: "95%", label: "Satisfaction Rate" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-8 hover:shadow-md transition"
          >
            <p className="text-3xl font-display font-semibold text-gray-900">
              {s.num}
            </p>
            <p className="mt-2 text-gray-600">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Why EduHive */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-display font-semibold text-gray-900">
          Why EduHive?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Instructors",
              desc: "Learn from industry pros passionate about teaching.",
            },
            {
              title: "Flexible Learning",
              desc: "Study anytime, anywhere, on your schedule.",
            },
            {
              title: "Gamified Experience",
              desc: "Earn XP, badges, and stay motivated along the way.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-50 rounded-lg py-12 px-6 md:px-12 text-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Stay Updated
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Subscribe to our newsletter for the latest courses, tips, and offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none flex-1"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
