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

      {/* WHO'S ON EDUHIVE SECTION */}
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

  
