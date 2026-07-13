import React, { useState } from 'react';
import heroBg from '../assets/propertiesbg.png';
import villaImg from '../assets/luxury_villa.png';
import buyingImg from '../assets/service_buying.png';
import nriImg from '../assets/service_nri.png';

// Category Images
import aptImg from '../assets/tes.png';
import villaCategoryImg from '../assets/luxury_villa.png';
import plotImg from '../assets/empty_plot.png';
import commercialImg from '../assets/commercial_building.png';
import agriImg from '../assets/agricultural_land.png';
import footerImg from '../assets/footer.png';


export default function Properties({ setActiveTab }) {
  const [filter, setFilter] = useState('all');

  const propertiesList = [
    {
      id: 1,
      type: 'villa',
      title: 'Premium 4 BHK Luxury Villa',
      location: 'ECR Road, Pondicherry',
      price: '₹ 2.4 Cr',
      beds: 4,
      baths: 4,
      area: '3,200 Sq.Ft',
      image: villaImg,
      tag: 'New Launch'
    },
    {
      id: 2,
      type: 'apartment',
      title: 'Modern 3 BHK Premium Apartment',
      location: 'Anna Salai, Pondicherry',
      price: '₹ 1.25 Cr',
      beds: 3,
      baths: 3,
      area: '1,800 Sq.Ft',
      image: nriImg,
      tag: 'Ready to Move'
    },
    {
      id: 3,
      type: 'plot',
      title: 'Residential Villa Plot near Auroville',
      location: 'Auroville, Pondicherry',
      price: '₹ 85 Lakhs',
      beds: null,
      baths: null,
      area: '2,400 Sq.Ft Plot',
      image: buyingImg,
      tag: 'Hot Deal'
    }
  ];

  const filteredProperties = filter === 'all'
    ? propertiesList
    : propertiesList.filter(p => p.type === filter);

  return (
    <div className="w-full bg-white min-h-screen">

      {/* 1. Header Hero Banner */}
      <section className="relative w-full overflow-hidden bg-white flex items-start pt-6 sm:pt-10 lg:pt-14 pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col z-10 animate-fade-in-up">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D49D0E] uppercase mb-3">
                BUYING & SELLING
              </span>

              <h1 className="text-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#281B10] mb-4 leading-none">
                OF <span className="text-[#D49D0E]">PROPERTIES</span>
              </h1>

              {/* Divider Line */}
              <div className="w-16 h-[2px] bg-[#D49D0E] mb-6"></div>

              <p className="text-base sm:text-lg font-semibold text-black mb-8 max-w-md leading-relaxed">
                Helping you buy your dream property or sell with trust and ease.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-row items-center gap-4 sm:gap-5">
                <a
                  
                  className="flex items-center justify-center gap-2.5 bg-[#D49D0E] hover:bg-[#B5820C] active:scale-98 text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.2c2.4 2.1 4.7 4.2 7 6.3v6.5h-2v-6h-6v6H7v-6.5c2.3-2.1 4.6-4.2 7-6.3z" />
                  </svg>
                  <span>I Want to Buy</span>
                </a>

                <a
                 
                  
                  className="flex items-center justify-center gap-2.5 bg-white hover:bg-stone-50 active:scale-98 text-[#D49D0E] border-[1.5px] border-[#D49D0E] px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider shadow-sm transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                  <span>I Want to Sell</span>
                </a>
              </div>
            </div>

            {/* Right Graphic Space Spacer */}
            <div className="lg:col-span-6 hidden lg:block" />
          </div>

        </div>

        {/* Desktop Image Block */}
        <div className="absolute right-0 top-0 bottom-0 w-[58%] xl:w-[56%] z-0 hidden lg:block overflow-hidden animate-scale-in pointer-events-none">
          <div className="relative w-full h-full text-stone-700">
            <img
              src={heroBg}
              alt="Luxury Villas Properties"
              className="w-full h-full object-cover object-right"
            />
            {/* Soft gradient fade overlay to merge with white background */}
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none"></div>

            {/* Gold Bottom Sweeping Wave Overlay */}
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

      {/* 2. Why Choose Section (Value Propositions) */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-serif text-2.5xl font-bold tracking-tight text-[#D49D0E] uppercase">
              WHY CHOOSE THIRUMALAI PROPERTIES?
            </h2>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="h-[2px] w-8 bg-[#D49D0E]"></span>
              <span className="w-2 h-2 rounded-full bg-[#D49D0E]"></span>
              <span className="w-2 h-2 rounded-full bg-[#D49D0E]"></span>
              <span className="h-[2px] w-8 bg-[#D49D0E]"></span>
            </div>
          </div>

          {/* 4 Value Proposition Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 mt-14 pb-4">

            {/* Card 1: Trusted & Transparent */}
            <div className="relative flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F0] flex items-center justify-center mb-5 shadow-sm border border-[#D49D0E]/10">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#D49D0E] stroke-current stroke-[2.2] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5.5c-4 0-7-1.5-7-1.5v7c0 5 7 9 7 9s7-4 7-9V4c0 0-3 1.5-7 1.5z" />
                  <path d="m9 11.5 2 2 4.5-4.5" />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-[#281B10]">
                Trusted & Transparent
              </h3>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed mt-2 text-stone-500 max-w-[210px]">
                We ensure complete transparency in every transaction.
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-stone-200 hidden lg:block" />
            </div>

            {/* Card 2: Best Market Value */}
            <div className="relative flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F0] flex items-center justify-center mb-5 shadow-sm border border-[#D49D0E]/10">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#D49D0E] stroke-current stroke-[2.2] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-[#281B10]">
                Best Market Value
              </h3>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed mt-2 text-stone-500 max-w-[210px]">
                Get the best value whether you are buying or selling.
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-stone-200 hidden lg:block" />
            </div>

            {/* Card 3: Expert Guidance */}
            <div className="relative flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F0] flex items-center justify-center mb-5 shadow-sm border border-[#D49D0E]/10">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#D49D0E] stroke-current stroke-[2] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-[#281B10]">
                Expert Guidance
              </h3>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed mt-2 text-stone-500 max-w-[210px]">
                Our property experts guide you at every step.
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-stone-200 hidden lg:block" />
            </div>

            {/* Card 4: Hassle Free Process */}
            <div className="relative flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F0] flex items-center justify-center mb-5 shadow-sm border border-[#D49D0E]/10">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#D49D0E] stroke-current stroke-[2] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <rect x="8" y="12" width="8" height="6" rx="1" />
                  <path d="M10 12v-2a2 2 0 0 1 4 0v2" />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-[#281B10]">
                Hassle Free Process
              </h3>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed mt-2 text-stone-500 max-w-[210px]">
                Smooth and hassle-free process from start to finish.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Buying or Selling Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-stone-50/30 border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-serif text-2.5xl font-bold tracking-tight text-[#D49D0E] uppercase">
              BUYING OR SELLING? WE MAKE IT SIMPLE
            </h2>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="h-[2px] w-8 bg-[#D49D0E]"></span>
              <span className="w-2 h-2 rounded-full bg-[#D49D0E]"></span>
              <span className="w-2 h-2 rounded-full bg-[#D49D0E]"></span>
              <span className="h-[2px] w-8 bg-[#D49D0E]"></span>
            </div>
          </div>

          {/* Side-by-side Action Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

            {/* Card 1: Buying a Property */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 bg-[#FAF7F0]/60 rounded-[2rem] border border-[#D49D0E]/10 shadow-sm transition-all duration-300 hover:shadow-md">
              {/* Circle Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E5A900] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 24 24" className="w-11 h-11 text-white stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="3" width="6" height="18" rx="1" />
                  <line x1="7" y1="6" x2="7.01" y2="6" strokeWidth="2.5" />
                  <line x1="7" y1="10" x2="7.01" y2="10" strokeWidth="2.5" />
                  <line x1="7" y1="14" x2="7.01" y2="14" strokeWidth="2.5" />
                  <line x1="7" y1="18" x2="7.01" y2="18" strokeWidth="2.5" />
                  <path d="M10 14l4-3 4 3v7h-8v-7z" />
                  <path d="M14 17h2" />
                </svg>
              </div>

              {/* Divider Line */}
              <div className="w-[1px] h-16 bg-stone-200 hidden sm:block flex-shrink-0" />

              {/* Text info block */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                  Buying a Property?
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-stone-500 mb-5 leading-relaxed max-w-sm">
                  Find the perfect property that suits your needs and budget. We help you find the right one.
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center gap-2 bg-[#E5A900] hover:bg-[#C99100] active:scale-95 text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider transition-all duration-300 shadow-sm"
                >
                  <span>Explore Buying</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2: Selling a Property */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 bg-[#FAF7F0]/60 rounded-[2rem] border border-[#D49D0E]/10 shadow-sm transition-all duration-300 hover:shadow-md">
              {/* Circle Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E5A900] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-white stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 10l9-7 9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z" />
                  <rect x="7" y="11" width="10" height="6" rx="0.5" />
                  <text x="12" y="15.2" fill="currentColor" stroke="none" fontSize="3.8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">SALE</text>
                </svg>
              </div>

              {/* Divider Line */}
              <div className="w-[1px] h-16 bg-stone-200 hidden sm:block flex-shrink-0" />

              {/* Text info block */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                  Selling a Property?
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-stone-500 mb-5 leading-relaxed max-w-sm">
                  List your property with us and reach genuine buyers. We get you the best deal.
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center gap-2 bg-[#E5A900] hover:bg-[#C99100] active:scale-95 text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider transition-all duration-300 shadow-sm"
                >
                  <span>Explore Selling</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Deal in Types Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-serif text-2.5xl font-bold tracking-tight text-[#D49D0E] uppercase">
              WE DEAL IN ALL TYPES OF PROPERTIES
            </h2>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="h-[2px] w-8 bg-[#D49D0E]"></span>
              <span className="w-2 h-2 rounded-full bg-[#D49D0E]"></span>
              <span className="w-2 h-2 rounded-full bg-[#D49D0E]"></span>
              <span className="h-[2px] w-8 bg-[#D49D0E]"></span>
            </div>
          </div>



          {/* 5-Column Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">

            {/* Card 1: Apartments */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/40 flex flex-col group">
              <div className="h-40 overflow-hidden relative">
                <img src={aptImg} alt="Apartments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#E5A900] border-[4px] border-white flex items-center justify-center -mt-7 mx-auto relative z-20 shadow-md flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="9" y1="6" x2="9" y2="6" strokeWidth="2.5" />
                  <line x1="9" y1="10" x2="9" y2="10" strokeWidth="2.5" />
                  <line x1="9" y1="14" x2="9" y2="14" strokeWidth="2.5" />
                  <line x1="9" y1="18" x2="9" y2="18" strokeWidth="2.5" />
                  <line x1="15" y1="6" x2="15" y2="6" strokeWidth="2.5" />
                  <line x1="15" y1="10" x2="15" y2="10" strokeWidth="2.5" />
                  <line x1="15" y1="14" x2="15" y2="14" strokeWidth="2.5" />
                  <line x1="15" y1="18" x2="15" y2="18" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="bg-white pb-6 pt-4 text-center rounded-b-3xl">
                <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
                  Apartments
                </h3>
              </div>
            </div>

            {/* Card 2: Villas */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/40 flex flex-col group">
              <div className="h-40 overflow-hidden relative">
                <img src={villaCategoryImg} alt="Villas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#E5A900] border-[4px] border-white flex items-center justify-center -mt-7 mx-auto relative z-20 shadow-md flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="bg-white pb-6 pt-4 text-center rounded-b-3xl">
                <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
                  Villas
                </h3>
              </div>
            </div>

            {/* Card 3: Plots */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/40 flex flex-col group">
              <div className="h-40 overflow-hidden relative">
                <img src={plotImg} alt="Plots" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#E5A900] border-[4px] border-white flex items-center justify-center -mt-7 mx-auto relative z-20 shadow-md flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M3 15h18" />
                  <path d="M9 3v18" />
                  <path d="M15 3v18" />
                </svg>
              </div>
              <div className="bg-white pb-6 pt-4 text-center rounded-b-3xl">
                <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
                  Plots
                </h3>
              </div>
            </div>

            {/* Card 4: Commercial */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/40 flex flex-col group">
              <div className="h-40 overflow-hidden relative">
                <img src={commercialImg} alt="Commercial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#E5A900] border-[4px] border-white flex items-center justify-center -mt-7 mx-auto relative z-20 shadow-md flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="8" width="8" height="14" rx="1" />
                  <rect x="13" y="3" width="8" height="19" rx="1" />
                  <line x1="6" y1="12" x2="8" y2="12" />
                  <line x1="6" y1="16" x2="8" y2="16" />
                  <line x1="16" y1="7" x2="18" y2="7" />
                  <line x1="16" y1="11" x2="18" y2="11" />
                  <line x1="16" y1="15" x2="18" y2="15" />
                </svg>
              </div>
              <div className="bg-white pb-6 pt-4 text-center rounded-b-3xl">
                <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
                  Commercial
                </h3>
              </div>
            </div>

            {/* Card 5: Agricultural Land */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/40 flex flex-col group">
              <div className="h-40 overflow-hidden relative">
                <img src={agriImg} alt="Agricultural Land" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#E5A900] border-[4px] border-white flex items-center justify-center -mt-7 mx-auto relative z-20 shadow-md flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
              </div>
              <div className="bg-white pb-6 pt-4 text-center rounded-b-3xl">
                <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
                  Agricultural Land
                </h3>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Statistics Bar (Placed above the Ready to Buy or Sell CTA Banner) */}
      <div className="max-w-5xl mx-auto w-full px-4 mb-4">
        <div className="w-full bg-[#D29F13] rounded-2xl md:rounded-[1.5rem] py-6 px-6 md:px-10 relative overflow-hidden shadow-lg z-20 animate-fade-in">
          {/* Faint skyline background silhouette */}
          <img 
            src={footerImg} 
            alt="City skyline background" 
            className="absolute left-0 bottom-0 h-full w-auto object-contain opacity-[0.08] pointer-events-none mix-blend-multiply"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10 text-white items-center">
            
            {/* Stat 1: Happy Clients */}
            <div className="flex items-center gap-3 md:gap-4 justify-start pl-2 sm:pl-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9 text-white stroke-current stroke-[1.5] fill-none flex-shrink-0" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xl sm:text-2xl md:text-3.5xl font-extrabold tracking-tight">500+</span>
                <span className="text-[10px] sm:text-xs font-semibold opacity-90 mt-1">Happy Clients</span>
              </div>
            </div>

            {/* Stat 2: Properties Sold */}
            <div className="flex items-center gap-3 md:gap-4 justify-start pl-2 sm:pl-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9 text-white stroke-current stroke-[1.5] fill-none flex-shrink-0" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xl sm:text-2xl md:text-3.5xl font-extrabold tracking-tight">1000+</span>
                <span className="text-[10px] sm:text-xs font-semibold opacity-90 mt-1">Properties Sold</span>
              </div>
            </div>

            {/* Stat 3: Years of Experience */}
            <div className="flex items-center gap-3 md:gap-4 justify-start pl-2 sm:pl-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9 text-white stroke-current stroke-[1.5] fill-none flex-shrink-0" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xl sm:text-2xl md:text-3.5xl font-extrabold tracking-tight">15+</span>
                <span className="text-[10px] sm:text-xs font-semibold opacity-90 mt-1">Years of Experience</span>
              </div>
            </div>

            {/* Stat 4: Locations Covered */}
            <div className="flex items-center gap-3 md:gap-4 justify-start pl-2 sm:pl-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9 text-white stroke-current stroke-[1.5] fill-none flex-shrink-0" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="3" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xl sm:text-2xl md:text-3.5xl font-extrabold tracking-tight">10+</span>
                <span className="text-[10px] sm:text-xs font-semibold opacity-90 mt-1">Locations Covered</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 6. Ready to Buy or Sell Call to Action Banner */}
      <section className="w-full pt-4 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2rem] bg-gradient-to-r from-[#FFFDF9] via-[#FAF7F0] to-[#FAF7F0]/30 overflow-hidden border border-[#D49D0E]/15 flex flex-col md:flex-row items-center min-h-[220px] shadow-sm">

          {/* Left Column Content */}
          <div className="w-full md:w-[45%] p-6 sm:p-8 md:py-6 md:pl-10 md:pr-4 relative z-20 flex flex-col items-start">
            <h2 className="font-serif text-xl sm:text-2.5xl font-extrabold text-[#281B10] mb-2 leading-tight">
              Ready to Buy or Sell <br className="hidden sm:inline" />
              Your Property?
            </h2>
            <p className="text-[11px] sm:text-xs font-semibold text-stone-500 mb-5 leading-relaxed max-w-sm">
              Connect with our property experts today and get the best guidance.
            </p>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2.5 bg-[#E5A900] hover:bg-[#C99100] active:scale-95 text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right Column Cozy Living Room Image */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[58%] z-10 hidden md:block overflow-hidden">
            <div className="relative w-full h-full">
              <img
                src={aptImg}
                alt="Cozy Living Room interior design"
                className="w-full h-full object-cover object-center"
              />
              {/* Smooth left gradient fade to merge into text panel background */}
              <div className="absolute inset-y-0 left-0 w-72 bg-gradient-to-r from-[#FFFDF9] via-[#FAF7F0] to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
      </section>

    </div>
  );
}
