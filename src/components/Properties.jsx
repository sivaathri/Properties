import React, { useState } from 'react';
import heroBg from '../assets/propertiesbg.png';
import villaImg from '../assets/luxury_villa.png';
import buyingImg from '../assets/service_buying.png';
import nriImg from '../assets/service_nri.png';

export default function Properties() {
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
                  href="#contact"
                  className="flex items-center justify-center gap-2.5 bg-[#D49D0E] hover:bg-[#B5820C] active:scale-98 text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.2c2.4 2.1 4.7 4.2 7 6.3v6.5h-2v-6h-6v6H7v-6.5c2.3-2.1 4.6-4.2 7-6.3z" />
                  </svg>
                  <span>I Want to Buy</span>
                </a>
                
                <a
                  href="#contact"
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
        <div className="absolute right-0 top-0 bottom-0 w-[58%] xl:w-[56%] z-0 hidden lg:block overflow-hidden animate-scale-in">
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
              <path d="M 150 295 C 350 295, 550 210, 810 45 L 810 295 Z" fill="#F5BC04" />
              <path d="M 210 295 C 390 295, 570 220, 810 80 L 810 295 Z" fill="#D29F13" />
              <path d="M 270 295 C 430 295, 590 230, 810 115 L 810 295 Z" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. Listed Properties Grid Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-stone-50/50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#D49D0E] uppercase">
              WHY CHOOSE THIRUMALAI PROPERTIES?
            </h2>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="h-[2px] w-8 bg-[#D49D0E]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D49D0E]"></span>
              <span className="h-[2px] w-8 bg-[#D49D0E]"></span>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 mt-10 bg-stone-100 p-1.5 rounded-xl border border-stone-200/50">
              {['all', 'villa', 'apartment', 'plot'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-5 py-2 rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 capitalize ${
                    filter === tab 
                      ? 'bg-white text-[#D49D0E] shadow-sm' 
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {tab === 'all' ? 'All Properties' : tab + 's'}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-8">
            {filteredProperties.map((property) => (
              <div 
                key={property.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group animate-fade-in-up"
              >
                {/* Image panel */}
                <div className="relative h-[220px] overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-md text-[#F5BC04] text-[10px] sm:text-xs font-bold tracking-wide px-3 py-1.5 rounded-lg">
                    {property.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-stone-900 text-sm sm:text-base font-extrabold px-3.5 py-1.5 rounded-xl shadow-sm border border-stone-100/50">
                    {property.price}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#D49D0E] uppercase mb-1">
                    {property.type}
                  </span>
                  <h3 className="text-serif text-lg font-bold text-[#281B10] leading-snug mb-2 group-hover:text-[#D49D0E] transition-colors">
                    {property.title}
                  </h3>
                  
                  {/* Location with Pin */}
                  <div className="flex items-center gap-1.5 text-stone-500 mb-5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#D49D0E] flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-semibold">{property.location}</span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-stone-100 mb-5 mt-auto"></div>

                  {/* Specs */}
                  <div className="flex items-center justify-between gap-4 text-xs font-bold text-stone-500 mb-6">
                    {property.beds && (
                      <span className="flex items-center gap-1">
                        {property.beds} Beds
                      </span>
                    )}
                    {property.baths && (
                      <span className="flex items-center gap-1">
                        {property.baths} Baths
                      </span>
                    )}
                    <span className="flex items-center gap-1 ml-auto">
                      {property.area}
                    </span>
                  </div>

                  {/* Button */}
                  <a
                    href="#contact"
                    className="w-full py-3 bg-[#D49D0E] hover:bg-[#B5820C] text-white rounded-xl font-bold text-xs tracking-wider uppercase text-center shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    Enquire Now
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
