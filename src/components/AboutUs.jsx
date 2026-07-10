import React from 'react';
import aboutImg from '../assets/about.png';
import storyImg from '../assets/about_story_living.png';
import sketchImg from '../assets/about_house_sketch-Photoroom.png';

export default function AboutUs() {
  return (
    <div className="w-full bg-white flex flex-col">
      
      {/* 1. Hero Section */}
      <section className="relative w-full bg-white overflow-hidden min-h-[460px] lg:min-h-[580px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-5 flex flex-col items-start relative z-10 animate-fade-in-up">
              
              {/* Category Tag */}
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D49D0E] uppercase mb-4">
                ABOUT US
              </span>

              {/* Headings */}
              <h1 className="font-serif text-3.5xl sm:text-4.5xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                Building Trust.
                <span className="block text-[#D49D0E] mt-1">Delivering Value.</span>
              </h1>

              {/* Decorative Bullet Line */}
              <div className="flex items-center gap-1.5 mt-6 mb-8">
                <span className="h-[2px] w-12 bg-[#D49D0E]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              </div>

              {/* Description Paragraphs */}
              <p className="text-stone-600 font-semibold text-xs sm:text-sm leading-relaxed max-w-lg mb-5">
                Thirumalai Properties is a trusted name in real estate, committed to helping clients buy, sell and manage properties with confidence.
              </p>
              <p className="text-stone-500 font-semibold text-xs sm:text-sm leading-relaxed max-w-lg mb-8">
                With years of experience, deep market knowledge and a client-first approach, we make every transaction smooth, transparent and successful.
              </p>

              {/* CTA Button */}
              <button className="flex items-center gap-3 bg-[#D49D0E] hover:bg-[#C08C0C] active:scale-95 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-all duration-300">
                {/* Home Outline Icon Badge */}
                <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <path d="M9 22V12h6v10" />
                  </svg>
                </div>
                <span className="text-sm tracking-wide">Get to Know Us</span>
              </button>

            </div>

          </div>
        </div>

        {/* Right Desktop Image block with parallel sweeps */}
        <div className="absolute right-0 top-0 bottom-0 w-[58%] xl:w-[56%] z-0 hidden lg:block overflow-hidden animate-scale-in">
          <div className="relative w-full h-full text-stone-700">
            <img
              src={aboutImg}
              alt="About Thirumalai Properties"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft gradient fade overlay to merge with white background */}
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none"></div>
            
            {/* Parallel sweeps */}
            <svg 
              className="absolute -bottom-[1px] -right-[1px] w-[calc(100%+2px)] h-[28%] pointer-events-none z-10" 
              viewBox="0 0 800 280" 
              preserveAspectRatio="none" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* White Bottom Wave Overlay */}
              <path d="M 150 280 C 350 280, 550 195, 810 30 L 810 295 L 150 295 Z" fill="white" />
              
              {/* Gold Stroke Ribbon Overlay */}
              <path d="M 150 280 C 350 280, 550 195, 810 30" stroke="#F5BC04" strokeWidth="8" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. Floating Stats Bar Section */}
      <section className="w-full pt-4 pb-20 px-4 bg-white relative z-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 rounded-2xl md:rounded-[2rem] py-6 md:py-8 px-6 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center justify-between">
              
              {/* Stat 1: Happy Clients */}
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-center sm:text-left">
                <div className="flex-shrink-0 mb-2 sm:mb-0">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl md:text-3.5xl font-serif font-extrabold text-[#281B10] leading-none">500+</span>
                  <span className="text-xs font-bold text-stone-500 mt-1.5 leading-tight">Happy Clients</span>
                </div>
                {/* Vertical Divider Line (Desktop Only) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#D49D0E]/20 hidden lg:block" />
              </div>

              {/* Stat 2: Properties Sold */}
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-center sm:text-left">
                <div className="flex-shrink-0 mb-2 sm:mb-0">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <path d="M9 22V12h6v10" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl md:text-3.5xl font-serif font-extrabold text-[#281B10] leading-none">1000+</span>
                  <span className="text-xs font-bold text-stone-500 mt-1.5 leading-tight">Properties Sold</span>
                </div>
                {/* Vertical Divider Line (Desktop Only) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#D49D0E]/20 hidden lg:block" />
              </div>

              {/* Stat 3: Years of Experience */}
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-center sm:text-left">
                <div className="flex-shrink-0 mb-2 sm:mb-0">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl md:text-3.5xl font-serif font-extrabold text-[#281B10] leading-none">15+</span>
                  <span className="text-xs font-bold text-stone-500 mt-1.5 leading-tight">Years of Experience</span>
                </div>
                {/* Vertical Divider Line (Desktop Only) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#D49D0E]/20 hidden lg:block" />
              </div>

              {/* Stat 4: Locations Covered */}
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-center sm:text-left">
                <div className="flex-shrink-0 mb-2 sm:mb-0">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl md:text-3.5xl font-serif font-extrabold text-[#281B10] leading-none">10+</span>
                  <span className="text-xs font-bold text-stone-500 mt-1.5 leading-tight">Locations Covered</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Cozy Living Room Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-[2rem] overflow-hidden shadow-md w-full max-w-lg lg:max-w-none aspect-[4/3] relative">
                <img
                  src={storyImg}
                  alt="Cozy luxury home interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Story Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Branded Category Tag */}
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D49D0E] uppercase mb-4">
                OUR STORY
              </span>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                Your Dream, Our Mission
              </h2>

              {/* Decorative Bullet Line */}
              <div className="flex items-center gap-1.5 mt-5 mb-6">
                <span className="h-[2px] w-12 bg-[#D49D0E]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              </div>

              {/* Paragraphs */}
              <p className="text-stone-600 font-semibold text-xs sm:text-sm leading-relaxed mb-4">
                Thirumalai Properties was founded with a simple goal – to provide honest, reliable and result-driven real estate services.
              </p>
              <p className="text-stone-500 font-semibold text-xs sm:text-sm leading-relaxed mb-10">
                We understand that every property decision is important. That's why we focus on building long-term relationships based on trust, integrity and transparency.
              </p>

              {/* Core Values Rows (3 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
                
                {/* Value 1 */}
                <div className="flex flex-col items-start text-left">
                  <div className="w-14 h-14 rounded-full bg-[#FFFDF9] border border-[#D49D0E]/20 flex items-center justify-center mb-4 text-[#D49D0E]">
                    <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-stone-900 mb-1.5">Client First</h4>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    We listen, understand and deliver what's best for you.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="flex flex-col items-start text-left">
                  <div className="w-14 h-14 rounded-full bg-[#FFFDF9] border border-[#D49D0E]/20 flex items-center justify-center mb-4 text-[#D49D0E]">
                    <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 11 11 13 15 9" strokeWidth="2" />
                    </svg>
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-stone-900 mb-1.5">Integrity</h4>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    Honesty and transparency in every step.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="flex flex-col items-start text-left">
                  <div className="w-14 h-14 rounded-full bg-[#FFFDF9] border border-[#D49D0E]/20 flex items-center justify-center mb-4 text-[#D49D0E]">
                    <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-stone-900 mb-1.5">Excellence</h4>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    High standards and commitment in everything we do.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Our Values Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 rounded-[2rem] p-8 md:p-12 shadow-sm">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-serif text-2xl font-bold tracking-tight text-[#D49D0E] uppercase">
                OUR VALUES
              </h2>
              <div className="flex items-center gap-1 mt-4">
                <span className="h-[2.5px] w-12 bg-[#D49D0E] rounded-l-full"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D49D0E]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
                <span className="w-1 h-1 rounded-full bg-[#D49D0E]"></span>
              </div>
            </div>

            {/* Values 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Value 1: Trust */}
              <div className="relative flex flex-col items-center text-center px-4">
                <div className="mb-5 text-[#D49D0E] hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">Trust</h3>
                <p className="text-xs font-semibold text-stone-500 leading-relaxed max-w-[200px]">
                  We believe in earning trust through our actions.
                </p>
                {/* Vertical Divider (Desktop Only) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-[#D49D0E]/20 hidden lg:block" />
              </div>

              {/* Value 2: Commitment */}
              <div className="relative flex flex-col items-center text-center px-4">
                <div className="mb-5 text-[#D49D0E] hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">Commitment</h3>
                <p className="text-xs font-semibold text-stone-500 leading-relaxed max-w-[200px]">
                  We are committed to our clients and their goals.
                </p>
                {/* Vertical Divider (Desktop Only) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-[#D49D0E]/20 hidden lg:block" />
              </div>

              {/* Value 3: Transparency */}
              <div className="relative flex flex-col items-center text-center px-4">
                <div className="mb-5 text-[#D49D0E] hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 11 11 13 15 9" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">Transparency</h3>
                <p className="text-xs font-semibold text-stone-500 leading-relaxed max-w-[200px]">
                  Clear communication and honest guidance.
                </p>
                {/* Vertical Divider (Desktop Only) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-[#D49D0E]/20 hidden lg:block" />
              </div>

              {/* Value 4: Results */}
              <div className="relative flex flex-col items-center text-center px-4">
                <div className="mb-5 text-[#D49D0E] hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="14" width="4" height="6" rx="1" />
                    <rect x="10" y="8" width="4" height="12" rx="1" />
                    <rect x="17" y="3" width="4" height="17" rx="1" />
                    <path d="M5 16l6-6 6-4 4 4" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">Results</h3>
                <p className="text-xs font-semibold text-stone-500 leading-relaxed max-w-[200px]">
                  We focus on delivering the best possible outcomes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet Our Team Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D49D0E] uppercase mb-3">
              MEET OUR TEAM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Experts Who Care
            </h2>
            <div className="flex items-center gap-1 mt-4 mb-6">
              <span className="h-[2.5px] w-12 bg-[#D49D0E] rounded-l-full"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1 h-1 rounded-full bg-[#D49D0E]"></span>
            </div>
            <p className="text-stone-500 font-semibold text-xs sm:text-sm leading-relaxed max-w-2xl">
              Our experienced professionals are dedicated to providing the best real estate solutions with personalized service and expert advice.
            </p>
          </div>
        </div>
      </section>

      {/* 3.5. Why Choose Us? Horizontal Banner Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0] border-t border-b border-[#D49D0E]/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col items-start relative">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D49D0E] uppercase">
                WHY CHOOSE US?
              </span>
              <h2 className="font-serif text-2.5xl sm:text-3.5xl font-extrabold text-stone-900 tracking-tight leading-tight mt-3 mb-5 max-w-sm">
                We Make Real Estate Simple & Stress-Free
              </h2>
              <p className="text-stone-500 font-semibold text-xs sm:text-sm leading-relaxed max-w-md">
                From finding the perfect property to handling all the paperwork, we're here to make the entire process easy and hassle-free.
              </p>
            </div>

            {/* Middle Vertical Divider Line (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-1 justify-self-center">
              <div className="w-[1.25px] h-36 bg-[#D49D0E]/20"></div>
            </div>

            {/* Center Checklist Column */}
            <div className="lg:col-span-3 flex flex-col gap-3.5">
              {[
                'Wide range of verified properties',
                'End-to-end support',
                'Expert guidance at every step',
                'Hassle-free documentation',
                'After-sales support'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="w-5.5 h-5.5 rounded-full bg-[#E5A900] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[3]" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-stone-700 leading-snug">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Line-Art House Graphic Column */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end items-center relative">
              <div className="w-full max-w-[260px] lg:max-w-none relative aspect-[4/3] mix-blend-multiply">
                <img
                  src={sketchImg}
                  alt="Luxury Villa sketch illustration"
                  className="w-full h-full object-contain filter contrast-125 saturate-50"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
