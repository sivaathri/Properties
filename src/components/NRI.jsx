import React from 'react';
import nriImg from '../assets/service_nri.png';
import footerImg from '../assets/footer.png';

export default function NRI({ setActiveTab }) {
  const nriServices = [
    {
      title: 'Tenant Management',
      desc: 'Finding reliable tenants, background verification and lease management.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Rent Collection',
      desc: 'Timely rent collection and monthly rent statements.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4h5M12 7h5M12 4c3 0 4 1.5 4 3s-1.5 3-4 3M14 9l3.5 4.5" strokeWidth="1.5" />
          <path d="M2 18h6.5l3.5-3.5a1.5 1.5 0 0 1 2.1 0h0a1.5 1.5 0 0 1 0 2.1L10 20.5H2v-2.5z" />
        </svg>
      )
    },
    {
      title: 'Property Maintenance',
      desc: 'Regular maintenance, repairs and renovation management.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M14.7 9.3l4 4M10 14.5a2.5 2.5 0 1 1-3.5-3.5 2.5 2.5 0 0 1 3.5 3.5zm0 0l5-5" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Property Inspection',
      desc: 'Routine inspections and detailed property reports.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M9 7h6M9 11h6M9 15h3" strokeWidth="1.5" />
          <path d="M14 15l2 2 3-3" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Legal & Compliance',
      desc: 'Ensuring legal compliance, documentation and tax assistance.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="12" y1="21" x2="16" y2="21" />
          <line x1="12" y1="21" x2="8" y2="21" />
          <line x1="6" y1="7" x2="18" y2="7" />
          <path d="M6 7l-2 6h4l-2-6zM18 7l-2 6h4l-2-6z" />
        </svg>
      )
    },
    {
      title: 'Utility Management',
      desc: 'Management of utility bills, payments and service providers.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 8.5c0-2.5-2-4.5-2-4.5s-2 2-2 4.5C4.5 9.9 5.6 11 7 11s1.5-1.1 1.5-2.5z" />
          <path d="m6.5 6.5-1 2h2l-1 1.5" strokeWidth="1" />
          
          <path d="M18.5 12.5c0-2.5-2-4.5-2-4.5s-2 2-2 4.5c0 1.4 1.1 2.5 2.5 2.5s1.5-1.1 1.5-2.5z" />
          <path d="m16.5 10.5-1 2h2l-1 1.5" strokeWidth="1" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#FCFBF8] min-h-screen">
      
      {/* 1. Hero / Banner Section */}
      <section className="relative w-full overflow-hidden bg-white flex items-start pt-4 sm:pt-6 lg:pt-8 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col z-10 animate-fade-in-up">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D49D0E] uppercase mb-2">
                NRI PROPERTY MANAGEMENT
              </span>
              
              <h1 className="text-serif text-4xl sm:text-5xl md:text-[3.2rem] font-bold tracking-tight text-[#281B10] mb-2 leading-none uppercase">
                Your Property.<br />
                <span className="text-[#D49D0E]">Our Responsibility.</span>
              </h1>
              
              {/* Divider Line */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="h-[2.5px] w-20 bg-[#D49D0E] rounded-l-full"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D49D0E]"></span>
              </div>
              
              <p className="text-sm sm:text-base font-semibold text-stone-500 mb-6 max-w-md leading-relaxed">
                End-to-end property management services for NRIs. <br />
                We take care of your property as if it were our own.
              </p>

              {/* 4 Quick Features Grid */}
              <div className="grid grid-cols-4 gap-2 border-t border-b border-stone-200/60 py-4 mb-6">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center px-1">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#D49D0E] mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-bold text-stone-850 leading-tight">
                    Trusted<br />Management
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="flex items-center justify-center">
                  <div className="w-[1px] h-8 bg-stone-200" />
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center px-1">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#D49D0E] mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-bold text-stone-850 leading-tight">
                    Regular<br />Updates
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="flex items-center justify-center">
                  <div className="w-[1px] h-8 bg-stone-200" />
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center px-1">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#D49D0E] mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" />
                    <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" />
                    <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" />
                    <path d="M3 20h18" />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-bold text-stone-850 leading-tight">
                    Maximum<br />Returns
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="flex items-center justify-center">
                  <div className="w-[1px] h-8 bg-stone-200" />
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center text-center px-1">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#D49D0E] mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" strokeWidth="2" />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-bold text-stone-850 leading-tight">
                    Complete<br />Peace of Mind
                  </span>
                </div>
              </div>
              
              {/* Call to Actions Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#services-list"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('services-list');
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
                  className="flex items-center justify-center gap-2.5 bg-[#E5A900] hover:bg-[#C99100] active:scale-98 text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider shadow-sm transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span>Our Services</span>
                </a>
                
                <a
                  href="#contact"
                  onClick={(e) => {
                    if (setActiveTab) {
                      e.preventDefault();
                      sessionStorage.setItem('contactSubject', 'NRI Property Management Enquiry');
                      sessionStorage.setItem('scrollToForm', 'true');
                      setActiveTab('Contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center justify-center gap-2.5 bg-white hover:bg-stone-50 active:scale-98 text-[#D49D0E] border-[1.5px] border-[#D49D0E] px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider shadow-sm transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Contact Us</span>
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
              src={nriImg}
              alt="NRI Property Management"
              className="w-full h-full object-cover object-center"
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
              {/* White Bottom Wave Overlay (Starting from x=150) */}
              <path d="M 150 280 C 350 280, 550 195, 810 30 L 810 295 L 150 295 Z" fill="white" />
              
              {/* Gold Stroke Ribbon Overlay (Starting from x=150) */}
              <path d="M 150 280 C 350 280, 550 195, 810 30" stroke="#F5BC04" strokeWidth="8" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-serif text-2.5xl font-bold tracking-tight text-[#D49D0E] uppercase">
              WHY CHOOSE THIRUMALAI PROPERTIES?
            </h2>
            <div className="flex items-center gap-1 mt-4">
              <span className="h-[2.5px] w-12 bg-[#D49D0E] rounded-l-full"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1 h-1 rounded-full bg-[#D49D0E]"></span>
            </div>
          </div>

          {/* Cards Grid (5 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            
            {/* Column 1: Trusted & Reliable */}
            <div className="relative flex flex-col items-center text-center px-4">
              <div className="mb-5 text-[#D49D0E] hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 18s5-2.5 5-6.5V7l-5-2-5 2v4.5c0 4 5 6.5 5 6.5z" strokeWidth="1" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2.5">Trusted & Reliable</h3>
              <p className="text-xs font-semibold text-stone-500 leading-relaxed max-w-[200px]">
                Your property is in safe hands with our experienced local team.
              </p>
              {/* Vertical Divider (Desktop Only) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#D49D0E]/20 hidden lg:block" />
            </div>

            {/* Column 2: Local Presence */}
            <div className="relative flex flex-col items-center text-center px-4">
              <div className="mb-5 text-[#D49D0E] hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2.5">Local Presence</h3>
              <p className="text-xs font-semibold text-stone-500 leading-relaxed max-w-[200px]">
                We have a strong local network to manage your property efficiently.
              </p>
              {/* Vertical Divider (Desktop Only) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#D49D0E]/20 hidden lg:block" />
            </div>

            {/* Column 3: Timely Updates */}
            <div className="relative flex flex-col items-center text-center px-4">
              <div className="mb-5 text-[#D49D0E] hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-1.19" />
                  <polyline points="12 7 12 12 16 14" />
                  <text x="13.2" y="19" className="text-[6.5px] font-extrabold fill-[#D49D0E] stroke-none">24</text>
                </svg>
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2.5">Timely Updates</h3>
              <p className="text-xs font-semibold text-stone-500 leading-relaxed max-w-[200px]">
                Get regular updates and reports about your property.
              </p>
              {/* Vertical Divider (Desktop Only) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#D49D0E]/20 hidden lg:block" />
            </div>

            {/* Column 4: Maximize Returns */}
            <div className="relative flex flex-col items-center text-center px-4">
              <div className="mb-5 text-[#D49D0E] hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 7h6M9 10.5h6M9 7c4 0 5.5 2 5.5 4.5S12.5 16 9.5 16M11.5 15l4.5 5.5" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2.5">Maximize Returns</h3>
              <p className="text-xs font-semibold text-stone-500 leading-relaxed max-w-[200px]">
                We ensure the best rental income and value for your property.
              </p>
              {/* Vertical Divider (Desktop Only) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#D49D0E]/20 hidden lg:block" />
            </div>

            {/* Column 5: Complete Peace of Mind */}
            <div className="relative flex flex-col items-center text-center px-4">
              <div className="mb-5 text-[#D49D0E] hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  <path d="M9 11.5l2 2 4-4" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2.5">Complete Peace of Mind</h3>
              <p className="text-xs font-semibold text-stone-500 leading-relaxed max-w-[200px]">
                Relax while we handle every detail of your property.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Grid Section */}
      <section id="services-list" className="w-full py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-serif text-2.5xl font-bold tracking-tight text-[#D49D0E] uppercase">
              OUR NRI PROPERTY MANAGEMENT SERVICES
            </h2>
            <div className="flex items-center gap-1 mt-4">
              <span className="h-[2.5px] w-12 bg-[#D49D0E] rounded-l-full"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1 h-1 rounded-full bg-[#D49D0E]"></span>
            </div>
          </div>

          {/* Grid Layout of NRI Services (6 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">
            {nriServices.map((service, index) => (
              <div 
                key={index}
                className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 p-5 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon Wrapper centered */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-base font-bold text-stone-900 mb-3 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-xs font-semibold text-stone-500 leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3.5. Our Management Process Section */}
      <section className="w-full pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-serif text-2.5xl font-bold tracking-tight text-[#D49D0E] uppercase">
              OUR MANAGEMENT PROCESS
            </h2>
            <div className="flex items-center gap-1 mt-4">
              <span className="h-[2.5px] w-12 bg-[#D49D0E] rounded-l-full"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1 h-1 rounded-full bg-[#D49D0E]"></span>
            </div>
          </div>

          {/* Process Timeline Flow Grid */}
          <div className="relative mt-12">
            {/* Horizontal timeline connector line (Desktop Only) */}
            <div className="absolute top-4 left-[10%] right-[10%] h-[1.5px] bg-[#D49D0E]/20 hidden lg:block z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center group">
                <div className="w-8 h-8 rounded-full bg-[#E5A900] text-white flex items-center justify-center font-bold text-sm shadow-md mb-6 relative z-20">
                  1
                </div>
                <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 p-6 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center w-full min-h-[220px]">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#5C4033] group-hover:scale-105 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#5C4033] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">Understand Your Needs</h3>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    We understand your property and management requirements.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center group">
                <div className="w-8 h-8 rounded-full bg-[#E5A900] text-white flex items-center justify-center font-bold text-sm shadow-md mb-6 relative z-20">
                  2
                </div>
                <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 p-6 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center w-full min-h-[220px]">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#5C4033] group-hover:scale-105 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#5C4033] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="9" y1="12" x2="13" y2="12" strokeWidth="1.5" />
                      <line x1="9" y1="16" x2="11" y2="16" strokeWidth="1.5" />
                      <path d="M16 11.5l1.5-1.5a1.06 1.06 0 0 1 1.5 0v0a1.06 1.06 0 0 1 0 1.5l-1.5 1.5M16 11.5L12.5 15H11v-1.5l3.5-3.5" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">Plan & Strategy</h3>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    We create a customized management plan for your property.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center group">
                <div className="w-8 h-8 rounded-full bg-[#E5A900] text-white flex items-center justify-center font-bold text-sm shadow-md mb-6 relative z-20">
                  3
                </div>
                <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 p-6 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center w-full min-h-[220px]">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#5C4033] group-hover:scale-105 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#5C4033] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">Execute & Manage</h3>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    Our team executes the plan and manages your property efficiently.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center group">
                <div className="w-8 h-8 rounded-full bg-[#E5A900] text-white flex items-center justify-center font-bold text-sm shadow-md mb-6 relative z-20">
                  4
                </div>
                <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 p-6 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center w-full min-h-[220px]">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#5C4033] group-hover:scale-105 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#5C4033] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <path d="M6 12l4-4 4 4 4-4" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">Regular Updates</h3>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    You receive regular updates and reports about your property.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center group">
                <div className="w-8 h-8 rounded-full bg-[#E5A900] text-white flex items-center justify-center font-bold text-sm shadow-md mb-6 relative z-20">
                  5
                </div>
                <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 p-6 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center w-full min-h-[220px]">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#5C4033] group-hover:scale-105 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#5C4033] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">Peace of Mind</h3>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    Sit back and relax while we take care of everything.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 1.5. Who Is This For Section */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-50 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-serif text-2.5xl font-bold tracking-tight text-[#D49D0E] uppercase">
              WHO IS THIS FOR?
            </h2>
            <div className="flex items-center gap-1 mt-4">
              <span className="h-[2.5px] w-12 bg-[#D49D0E] rounded-l-full"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1 h-1 rounded-full bg-[#D49D0E]"></span>
            </div>
          </div>

          {/* 4-Column Pill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            
            {/* Pill 1: NRIs living abroad */}
            <div className="relative flex items-center justify-between">
              <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 px-6 py-4 rounded-[1.25rem] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-all duration-300 w-full justify-start group">
                <div className="flex-shrink-0 text-[#D49D0E] group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-stone-900 leading-tight">
                  NRIs living abroad
                </span>
              </div>
              {/* Divider (Desktop Only) */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-[#D49D0E]/20 z-10" />
            </div>

            {/* Pill 2: Frequent travelers */}
            <div className="relative flex items-center justify-between">
              <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 px-6 py-4 rounded-[1.25rem] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-all duration-300 w-full justify-start group">
                <div className="flex-shrink-0 text-[#D49D0E] group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5l7 2.5z" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-stone-900 leading-tight">
                  Frequent travelers
                </span>
              </div>
              {/* Divider (Desktop Only) */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-[#D49D0E]/20 z-10" />
            </div>

            {/* Pill 3: Busy professionals */}
            <div className="relative flex items-center justify-between">
              <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 px-6 py-4 rounded-[1.25rem] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-all duration-300 w-full justify-start group">
                <div className="flex-shrink-0 text-[#D49D0E] group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <circle cx="9" cy="11" r="2.5" />
                    <path d="M4 17.5c0-1.5 2-2.5 5-2.5s5 1 5 2.5" />
                    <line x1="15" y1="9" x2="19" y2="9" strokeWidth="1.5" />
                    <line x1="15" y1="12" x2="19" y2="12" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-stone-900 leading-tight">
                  Busy professionals
                </span>
              </div>
              {/* Divider (Desktop Only) */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-[#D49D0E]/20 z-10" />
            </div>

            {/* Pill 4: Elderly property owners */}
            <div className="relative flex items-center justify-between">
              <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 px-6 py-4 rounded-[1.25rem] flex items-center gap-3.5 shadow-sm hover:shadow-md transition-all duration-300 w-full justify-start group">
                <div className="flex-shrink-0 text-[#D49D0E] group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-stone-900 leading-tight">
                  Elderly property owners
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Help / Contact CTA Banner */}
      <section className="w-full pt-8 pb-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto w-full">
          <div className="relative rounded-2xl md:rounded-[1.5rem] bg-[#D29F13] py-6 px-6 md:px-10 overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Faint skyline background silhouette */}
            <img 
              src={footerImg} 
              alt="City skyline background" 
              className="absolute right-0 bottom-0 h-full w-[45%] object-cover object-left opacity-[0.08] pointer-events-none mix-blend-multiply"
            />

            {/* Left Info Panel */}
            <div className="flex flex-col md:flex-row items-center gap-4 relative z-10 text-white w-full md:w-auto text-center md:text-left">
              
              {/* House Badge Circle */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#D29F13] fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                  <path d="M12 15.5s-1.8-.9-1.8-2.1a1.2 1.2 0 0 1 2.04-.84 1.2 1.2 0 0 1 2.04.84c0 1.2-1.8 2.1-1.8 2.1z" strokeWidth="1.2" />
                </svg>
              </div>

              {/* Text Group */}
              <div className="flex flex-col">
                <h3 className="font-serif text-lg sm:text-[1.25rem] font-extrabold text-[#281B10] leading-tight">
                  Your Property Deserves the Best Care!
                </h3>
                <p className="text-[#281B10]/95 font-semibold text-xs sm:text-[0.875rem] mt-1 leading-relaxed">
                  Let us manage your property while you enjoy peace of mind.
                </p>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="relative z-10 w-full md:w-auto flex justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  if (setActiveTab) {
                    e.preventDefault();
                    sessionStorage.setItem('contactSubject', 'NRI Property Management Enquiry');
                    sessionStorage.setItem('scrollToForm', 'true');
                    setActiveTab('Contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="bg-white hover:bg-stone-50 active:scale-95 text-[#8C5E01] font-extrabold py-3.5 px-7 rounded-xl flex items-center gap-2 shadow-md transition-all duration-300 w-full md:w-auto justify-center text-sm tracking-wide hover:shadow-lg"
              >
                <span>Contact Us Today</span>
                <svg className="w-4 h-4 text-[#8C5E01] stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
