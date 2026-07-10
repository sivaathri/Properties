import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'We understand your requirements.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#D49D0E] stroke-current stroke-[1.75] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'Property Verification',
      desc: 'We verify all property details & documents.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#D49D0E] stroke-current stroke-[1.75] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10.5L12 2.5L21 10.5V21.5H12" />
          <circle cx="16" cy="16" r="3" />
          <line x1="18.5" y1="18.5" x2="21" y2="21" />
          <path d="M3 21.5h6" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'Documentation',
      desc: 'We prepare & verify all legal documents.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#D49D0E] stroke-current stroke-[1.75] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'Registration',
      desc: 'Smooth registration with legal compliance.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#D49D0E] stroke-current stroke-[1.75] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.5" cy="15.5" r="4.5" />
          <path d="M11.5 11.5L20 3" />
          <path d="M16 7l2 2" />
          <path d="M13 10l2 2" />
          <path d="M20 3h1v1v2h-1v-2z" />
        </svg>
      )
    },
    {
      num: '05',
      title: 'Successful Completion',
      desc: 'Peace of mind & lifelong relationship.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#D49D0E] stroke-current stroke-2 fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" />
          <polyline points="8 12 11 15 16 10" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1.5px] w-8 bg-[#D49D0E]"></span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D49D0E] uppercase">
              OUR PROCESS
            </span>
            <span className="h-[1.5px] w-8 bg-[#D49D0E]"></span>
          </div>
          <h2 className="text-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#281B10] leading-tight">
            Simple. Transparent. Effective.
          </h2>
        </div>

        {/* Stepper Flow Grid */}
        <div className="relative">
          
          {/* Desktop Connecting Line & Dots */}
          <div className="absolute top-[36px] -translate-y-1/2 left-[10%] right-[10%] h-[2px] bg-[#D49D0E] z-0 hidden lg:block" />
          
          {/* Centered Dots Between Nodes on Desktop */}
          <div className="absolute top-[36px] -translate-y-1/2 left-0 right-0 w-full z-0 hidden lg:block">
            <div className="absolute left-[20%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#D49D0E]" />
            <div className="absolute left-[40%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#D49D0E]" />
            <div className="absolute left-[60%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#D49D0E]" />
            <div className="absolute left-[80%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#D49D0E]" />
          </div>

          {/* Mobile Connecting Line (Vertical) */}
          <div className="absolute left-[36px] top-6 bottom-6 w-[2px] bg-[#D49D0E] z-0 lg:hidden" />

          {/* Steps Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                
                {/* Node Circle Container */}
                <div className="flex-shrink-0 mr-6 lg:mr-0 lg:mb-2">
                  <div className="w-[72px] h-[72px] rounded-full border-[2px] border-[#D49D0E] bg-white flex items-center justify-center shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-105">
                    {step.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col pt-1.5 lg:pt-0 items-start lg:items-center text-left lg:text-center">
                  {/* Step Num */}
                  <span className="text-[#D49D0E] font-sans text-base font-extrabold mt-1 lg:mt-3 leading-none">
                    {step.num}
                  </span>
                  {/* Step Title */}
                  <h3 className="text-serif text-base md:text-lg font-bold text-[#281B10] mt-1 lg:mt-2 leading-tight">
                    {step.title}
                  </h3>
                  {/* Step Desc */}
                  <p className="text-xs sm:text-sm text-stone-500 font-medium mt-1.5 leading-relaxed max-w-[200px] lg:mx-auto">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
