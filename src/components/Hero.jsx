import React from 'react';
import luxuryVilla from '../assets/herobg.png';

export default function Hero({ setActiveTab }) {
  return (
    <section className="relative w-full overflow-hidden bg-white flex items-start pt-6 sm:pt-10 lg:pt-14">
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (Text, Stats, CTAs) */}
          <div className="lg:col-span-6 flex flex-col z-10 animate-fade-in-up">
            
            {/* Welcome Tag */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="h-[1.5px] w-8 bg-brand-gold"></span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D49D0E] uppercase">
                WELCOME TO
              </span>
              <span className="h-[1.5px] w-8 bg-brand-gold"></span>
            </div>

            {/* Main Headings */}
            <h1 className="text-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#281B10] mb-5 leading-[1.08]">
              THIRUMALAI
              <span className="block text-[#D49D0E] mt-1">PROPERTIES</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#3a3530] mb-10 leading-snug">
              Trusted Real Estate Solutions <br className="hidden sm:inline" />
              For A Better Tomorrow
            </p>



            {/* Action Buttons Row */}
            <div className="flex flex-row items-center gap-4 sm:gap-6">
              {/* Explore Services */}
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('services');
                  if (element) {
                    const offset = 100; // Account for the sticky navbar height
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="group flex items-center justify-center gap-2 bg-brand-yellow hover:bg-[#E5B002] active:scale-98 text-brand-dark px-6 sm:px-8 py-4 sm:py-4.5 rounded-lg font-bold text-sm tracking-wider shadow-sm hover:shadow-md transition-all duration-300"
              >
                Explore Services
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Contact Us */}
              <a
                href="#contact"
                onClick={(e) => {
                  if (setActiveTab) {
                    e.preventDefault();
                    setActiveTab('Contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="group flex items-center justify-center gap-2 bg-white hover:bg-stone-50 active:scale-98 text-brand-dark border-[1.5px] border-[#D49D0E] px-6 sm:px-8 py-4 sm:py-4.5 rounded-lg font-bold text-sm tracking-wider shadow-sm transition-all duration-300"
              >
                Contact Us
                <svg className="w-5 h-5 text-[#D49D0E] transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>

          {/* Spacer for desktop layout (so left content aligns inside grid correctly) */}
          <div className="lg:col-span-6 hidden lg:block" />

          {/* Mobile Image Container (Visible only on mobile/tablet) */}
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden  mt-6 lg:hidden animate-scale-in">
            <img
              src={luxuryVilla}
              alt="Thirumalai Properties"
              className="w-full h-full object-cover object-center"
            />
            {/* Ambient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Sweeping Waves Overlay */}
            <svg 
              className="absolute -bottom-[1px] -right-[1px] w-[calc(100%+2px)] h-[28%] pointer-events-none z-10" 
              viewBox="0 0 800 280" 
              preserveAspectRatio="none" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Yellow Top Layer */}
              <path 
                d="M 150 295 C 350 295, 550 210, 810 45 L 810 295 Z" 
                fill="#F5BC04" 
              />
              {/* Gold Middle Layer */}
              <path 
                d="M 210 295 C 390 295, 570 220, 810 80 L 810 295 Z" 
                fill="#D29F13" 
              />
              {/* White Bottom Layer to match page background */}
              <path 
                d="M 270 295 C 430 295, 590 230, 810 115 L 810 295 Z" 
                fill="#FFFFFF" 
              />
            </svg>
          </div>

        </div>
      </div>

      {/* Desktop Image Block (Aligned top-0 bottom-0 to cover full section height) */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] z-0 hidden lg:block overflow-hidden animate-scale-in pointer-events-none">
        <div className="relative w-full h-full text-stone-700">
          {/* Villa Photo */}
          <img
            src={luxuryVilla}
            alt="Thirumalai Properties Luxury Villa"
            className="w-full h-full object-cover object-center  transition-transform duration-1000 ease-out"
          />
          
          {/* Smooth Left Gradient Overlay for fading into the white text area */}
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none"></div>
          
          {/* Sweeping Gold Vector Waves Overlay at the Bottom Right */}
          <svg 
            className="absolute -bottom-[1px] -right-[1px] w-[calc(100%+2px)] h-[28%] pointer-events-none z-10" 
            viewBox="0 0 800 280" 
            preserveAspectRatio="none" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Yellow Top Layer */}
            <path 
              d="M 150 295 C 350 295, 550 210, 810 45 L 810 295 Z" 
              fill="#F5BC04" 
            />
            {/* Gold Middle Layer */}
            <path 
              d="M 210 295 C 390 295, 570 220, 810 80 L 810 295 Z" 
              fill="#D29F13" 
            />
            {/* White Bottom Layer to match page background */}
            <path 
              d="M 270 295 C 430 295, 590 230, 810 115 L 810 295 Z" 
              fill="#FFFFFF" 
            />
          </svg>
        </div>
      </div>

    </section>
  );
}
