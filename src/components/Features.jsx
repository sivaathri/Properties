import React from 'react';

export default function Features() {
  const items = [
    {
      title: 'Experienced Team',
      desc: 'Skilled professionals with deep real estate expertise.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-11 h-11 text-[#F5BC04] stroke-[#F5BC04] fill-none stroke-[1.75]" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          {/* Front/Center Person */}
          <circle cx="12" cy="7" r="3" />
          <path d="M6 16.5a3.5 3.5 0 0 1 3.5-3.5h5a3.5 3.5 0 0 1 3.5 3.5v1.5H6v-1.5z" />
          
          {/* Left Person */}
          <circle cx="6" cy="10" r="2" />
          <path d="M2 17.5v-.5a2.5 2.5 0 0 1 2.5-2.5h1" />
          
          {/* Right Person */}
          <circle cx="18" cy="10" r="2" />
          <path d="M18.5 14.5h1a2.5 2.5 0 0 1 2.5 2.5v.5" />
        </svg>
      )
    },
    {
      title: 'Transparent Process',
      desc: 'Honest, transparent & client-first approach always.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10.5 h-10.5 text-[#F5BC04] stroke-[#F5BC04] fill-none stroke-[1.75]" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: 'Legally Secure',
      desc: 'All documentation handled with complete legal compliance.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10.5 h-10.5 text-[#F5BC04] stroke-[#F5BC04] fill-none stroke-[1.75]" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          {/* Document sheet */}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="10" y1="17" x2="8" y2="17" />
          <line x1="12" y1="9" x2="8" y2="9" />
          {/* Shield overlay at bottom right */}
          <path d="M18 14.5s3 1.5 3 3.5v2.5c0 1.8-3 3-3 3s-3-1.2-3-3v-2.5c0-2 3-3.5 3-3.5z" strokeWidth="1.5" />
          <polyline points="17 19.2 18 20.2 19 19.2" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Dedicated Support',
      desc: 'We are with you at every step before & after the service.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10.5 h-10.5 text-[#F5BC04] stroke-[#F5BC04] fill-none stroke-[1.75]" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 14c0-4.97 4.03-9 9-9s9 4.03 9 9" />
          <rect x="2" y="12" width="3" height="5" rx="1" />
          <rect x="19" y="12" width="3" height="5" rx="1" />
          <path d="M19 17c0 1.66-1.34 3-3 3h-2" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20">
      <div className="bg-[#FAF9F5]/70 border border-stone-100 rounded-[2rem] py-10 px-6 sm:px-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-start">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center px-4 lg:px-6 ${
                idx < 3 ? 'lg:border-r lg:border-[#F5BC04]/25' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="mb-5 flex items-center justify-center h-14 w-14">
                {item.icon}
              </div>
              
              {/* Feature Title */}
              <h3 className="text-base font-bold text-[#281B10] tracking-tight">
                {item.title}
              </h3>
              
              {/* Feature Description */}
              <p className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed mt-2 max-w-[240px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
