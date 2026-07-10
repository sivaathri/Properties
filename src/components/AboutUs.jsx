import React from 'react';
import aboutImg from '../assets/about_building.png';

export default function AboutUs() {
  return (
    <div className="w-full bg-white flex flex-col">
      
      {/* 1. Hero Section */}
      <section className="relative w-full bg-white overflow-hidden min-h-[460px] lg:min-h-[580px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-5 flex flex-col items-start relative z-10">
              
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
        <div className="absolute right-0 top-0 bottom-0 w-[58%] xl:w-[56%] z-0 hidden lg:block overflow-hidden">
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

    </div>
  );
}
