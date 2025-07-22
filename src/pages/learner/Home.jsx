import React, { useState } from 'react'

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full text-gray-800">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-20 bg-white">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Master Coding & ML with support<br />
            from the largest expert network.
          </h1>

          <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Register with Email
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://www.kaggle.com/static/images/home/logged-out/hero-illo@3x.png"
            alt="Hero"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* WHO'S ON EDUHIVE SECTION - MOVED UP */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-12">Who's on EduHive?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Learners</h3>
            <p>Dive into EduHive courses, competitions & forums.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Developers</h3>
            <p>Leverage EduHive models, notebooks & datasets.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Contributors</h3>
            <p>Advance ML with our pre-trained model hub & competitions.</p>
          </div>
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition"
          >
            {showMore ? 'See less' : 'See more'}
          </button>

          {/* Extra content shown when expanded */}
          {showMore && (
            <div className="mt-6 text-sm text-gray-600">
              <p>We also support educators, researchers, and open-source contributors.</p>
            </div>
          )}
        </div>
      </section>

      {/* MODELS SECTION */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">🏔️ Models</h2>
              <p className="text-gray-600">23,600 pre-trained, ready-to-deploy ML models.</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium">View all →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Gemma Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  G
                </div>
                <h3 className="font-semibold">Gemma</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">Google</p>
              <p className="text-sm text-gray-500">
                Gemma is a family of lightweight, state-of-the-art open models built from the research and...
              </p>
            </div>

            {/* Gemma 2 Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  G
                </div>
                <h3 className="font-semibold">Gemma 2</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">Google</p>
              <p className="text-sm text-gray-500">
                New implementation of the Gemma model. The Keras 3 implementation.
              </p>
            </div>

            {/* DeepSeek R1 Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  K
                </div>
                <h3 className="font-semibold">DeepSeek R1</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">DeepSeek</p>
              <p className="text-sm text-gray-500">
                DeepSeek-R1 is an intermediate reasoning model, DeepSeek-R1 for...
              </p>
            </div>

            {/* Llama 2 Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="font-semibold">Llama 2</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">Meta</p>
              <p className="text-sm text-gray-500">
                Llama 2 is a collection of pretrained and fine-tuned generative text models...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">🎓 Courses</h2>
              <p className="text-gray-600">Earn a signed certificate and learn new techniques in our no-cost, hands-on courses.</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium">View all →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Intro to Programming Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <div className="w-4 h-3 bg-white rounded-sm"></div>
                </div>
                <h3 className="font-semibold">Intro to Programming</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">5 hours to complete</p>
              <p className="text-sm text-gray-500">
                Get started with Python if you have no coding experience.
              </p>
            </div>

            {/* Python Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                </div>
                <h3 className="font-semibold">Python</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">7 hours to complete</p>
              <p className="text-sm text-gray-500">
                Learn the most important language for data science.
              </p>
            </div>

            {/* Intro to Machine Learning Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
                  <div className="w-4 h-4 grid grid-cols-2 gap-px">
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                  </div>
                </div>
                <h3 className="font-semibold">Intro to Machine Learning</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">7 hours to complete</p>
              <p className="text-sm text-gray-500">
                Learn the core ideas in machine learning, and build your first model.
              </p>
            </div>

            {/* Pandas Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded grid grid-cols-3 gap-px p-1">
                    <div className="bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="bg-white"></div>
                  </div>
                </div>
                <h3 className="font-semibold">Pandas</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">4 hours to complete</p>
              <p className="text-sm text-gray-500">
                Solve short hands-on challenges to perfect your data manipulation skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Box */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tackle your next project with EduHive
            </h2>
            <p className="text-gray-600 mb-8">
              On EduHive you'll find all the resources and knowledge needed
              for your next real-world ML project.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <h3 className="text-xl font-bold">508K</h3>
                <p className="text-sm text-gray-500 uppercase">Datasets</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">1.4M</h3>
                <p className="text-sm text-gray-500 uppercase">Courses</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">25,500</h3>
                <p className="text-sm text-gray-500 uppercase">Modules</p>
              </div>
            </div>
          </div>

          {/* Right Box */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Learn cutting edge techniques in EduHive competitions & courses
            </h2>
            <p className="text-gray-600 mb-8">
              EduHive competitions and courses provide a real-world setting
              to apply what you learn & connect with other ML practitioners.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <h3 className="text-xl font-bold">30,000</h3>
                <p className="text-sm text-gray-500 uppercase">Competitions</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">5,000</h3>
                <p className="text-sm text-gray-500 uppercase">Challenges</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">70+ hours</h3>
                <p className="text-sm text-gray-500 uppercase">Courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}