import React from 'react';
import docsImg from '../assets/service_documents.png';
import footerImg from '../assets/footer.png';
import aptImg from '../assets/tes.png';

export default function Documents() {
  const documentServices = [
    {
      title: 'Document Writing',
      desc: 'We draft all types of property documents with accuracy and legal validity.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="12" x2="13" y2="12" strokeWidth="1.5" />
          <line x1="9" y1="16" x2="11" y2="16" strokeWidth="1.5" />
          <path d="M16 11.5l1.5-1.5a1.06 1.06 0 0 1 1.5 0v0a1.06 1.06 0 0 1 0 1.5l-1.5 1.5M16 11.5L12.5 15H11v-1.5l3.5-3.5" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Document Registration',
      desc: 'Hassle-free registration of sale deeds, title deeds and other documents.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <rect x="13" y="14" width="6" height="5" rx="1" strokeWidth="1.5" />
          <path d="M16 14v-3" strokeWidth="1.5" />
          <circle cx="16" cy="11" r="1.5" />
        </svg>
      )
    },
    {
      title: 'Agreement Drafting',
      desc: 'Sale Agreement, Lease Agreement, Rent Agreement and more.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M9 7h6M9 11h6M9 15h3" strokeWidth="1.5" />
          <path d="M14 15l2 2 3-3" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'EC & Patta Assistance',
      desc: 'Assistance for Encumbrance Certificate, Patta transfer and related services.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="16" cy="15" r="2" />
          <path d="M16 17l1.5 2.5-1.5-1-1.5 1z" />
        </svg>
      )
    },
    {
      title: 'Power of Attorney',
      desc: 'Drafting and registration of Power of Attorney documents.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* 1. Header Hero Banner */}
      <section className="relative w-full overflow-hidden bg-white flex items-start pt-4 sm:pt-6 lg:pt-8 pb-8 md:pb-12">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col z-10 animate-fade-in-up">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D49D0E] uppercase mb-2">
                THIRUMALAI PROPERTIES SERVICES
              </span>
              
              <h1 className="text-serif text-4xl sm:text-5xl md:text-[3.4rem] font-bold tracking-tight text-[#281B10] mb-2 leading-none uppercase">
                DOCUMENT <br />
                <span className="text-[#D49D0E]">REGISTRATION</span> <br />
                & WRITING
              </h1>
              
              {/* Divider Line */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="h-[2px] w-12 bg-[#D49D0E]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              </div>
              
              <p className="text-sm sm:text-base font-semibold text-black mb-5 max-w-md leading-relaxed">
                Secure, reliable and hassle-free document registration and writing services for all your property needs.
              </p>
              
              {/* Call to Actions Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#services-list"
                  className="flex items-center justify-center gap-2.5 bg-[#E5A900] hover:bg-[#C99100] active:scale-98 text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider shadow-sm transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  <span>Our Services</span>
                </a>
                
                <a
                  href="#contact"
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
        <div className="absolute right-0 top-0 bottom-0 w-[58%] xl:w-[56%] z-0 hidden lg:block overflow-hidden animate-scale-in">
          <div className="relative w-full h-full text-stone-700">
            <img
              src={docsImg}
              alt="Document Registration & Writing Services"
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

      {/* 2. Why Choose Section (Value Propositions) */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col items-center mb-10 text-center">
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

          {/* 4 Value Proposition Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 mt-14 pb-4">
            
            {/* Card 1: Legally Secure */}
            <div className="relative flex flex-col items-center text-center px-6">
              <div className="w-18 h-18 rounded-full bg-[#FFF7E8] flex items-center justify-center mb-5 hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Legally Secure</h3>
              <p className="text-sm font-semibold text-stone-500 leading-relaxed max-w-[220px]">
                All documents are handled as per legal norms and government regulations.
              </p>
              {/* Vertical Divider (Desktop Only) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#D49D0E]/20 hidden lg:block" />
            </div>

            {/* Card 2: Expert Assistance */}
            <div className="relative flex flex-col items-center text-center px-6">
              <div className="w-18 h-18 rounded-full bg-[#FFF7E8] flex items-center justify-center mb-5 hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" />
                  <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" />
                  <circle cx="17" cy="18" r="2.5" className="fill-[#FAF7F0] stroke-[#D49D0E]" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Expert Assistance</h3>
              <p className="text-sm font-semibold text-stone-500 leading-relaxed max-w-[220px]">
                Our experts guide you through every step of the process.
              </p>
              {/* Vertical Divider (Desktop Only) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#D49D0E]/20 hidden lg:block" />
            </div>

            {/* Card 3: Time Saving */}
            <div className="relative flex flex-col items-center text-center px-6">
              <div className="w-18 h-18 rounded-full bg-[#FFF7E8] flex items-center justify-center mb-5 hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Time Saving</h3>
              <p className="text-sm font-semibold text-stone-500 leading-relaxed max-w-[220px]">
                Fast and efficient service with minimal paperwork from your side.
              </p>
              {/* Vertical Divider (Desktop Only) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#D49D0E]/20 hidden lg:block" />
            </div>

            {/* Card 4: Confidential & Safe */}
            <div className="relative flex flex-col items-center text-center px-6">
              <div className="w-18 h-18 rounded-full bg-[#FFF7E8] flex items-center justify-center mb-5 hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <circle cx="12" cy="16" r="1" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Confidential & Safe</h3>
              <p className="text-sm font-semibold text-stone-500 leading-relaxed max-w-[220px]">
                Your information and documents are <strong className="font-bold">100%</strong> safe with us.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Services List Section */}
      <section id="services-list" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0]/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-serif text-2.5xl font-bold tracking-tight text-[#D49D0E] uppercase">
              OUR DOCUMENT SERVICES
            </h2>
            <div className="flex items-center gap-1 mt-4">
              <span className="h-[2.5px] w-12 bg-[#D49D0E] rounded-l-full"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              <span className="w-1 h-1 rounded-full bg-[#D49D0E]"></span>
            </div>
          </div>

          {/* Grid Layout of Document Types (5 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {documentServices.map((service, index) => (
              <div 
                key={index}
                className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 p-6 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
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

      {/* 3.5. Our Process Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-serif text-2.5xl font-bold tracking-tight text-[#D49D0E] uppercase">
              OUR PROCESS
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
                      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">Consultation</h3>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    Share your requirements with our experts.
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
                  <h3 className="text-base font-bold text-stone-900 mb-2">Document Preparation</h3>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    We draft and verify the documents.
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
                      <rect x="6" y="3" width="12" height="18" rx="2" />
                      <path d="M9 7h6M9 11h6M9 15h3" strokeWidth="1.5" />
                      <path d="M14 15l2 2 3-3" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">Review & Approval</h3>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    You review and approve the documents.
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
                      <path d="M12 22a7 7 0 0 0 7-7h-14a7 7 0 0 0 7 7z" />
                      <path d="M12 15V3" strokeWidth="1.5" />
                      <path d="M8 3h8" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">Registration</h3>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    We handle the registration process at the office.
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
                  <h3 className="text-base font-bold text-stone-900 mb-2">Delivery</h3>
                  <p className="text-xs font-semibold text-stone-500 leading-relaxed">
                    Registered documents delivered to you safely.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Statistics Bar (Placed above the Ready to Buy or Sell CTA Banner) */}
      <div className="max-w-5xl mx-auto w-full px-4 mb-4 mt-16">
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

            {/* Stat 2: Documents Written */}
            <div className="flex items-center gap-3 md:gap-4 justify-start pl-2 sm:pl-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9 text-white stroke-current stroke-[1.5] fill-none flex-shrink-0" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xl sm:text-2xl md:text-3.5xl font-extrabold tracking-tight">1000+</span>
                <span className="text-[10px] sm:text-xs font-semibold opacity-90 mt-1">Documents Written</span>
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

      {/* 5. Ready to Buy or Sell Call to Action Banner */}
      <section className="w-full pt-4 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2rem] bg-gradient-to-r from-[#FFFDF9] via-[#FAF7F0] to-[#FAF7F0]/30 overflow-hidden border border-[#D49D0E]/15 flex flex-col md:flex-row items-center min-h-[220px] shadow-sm">
            
            {/* Left Column Content */}
            <div className="w-full md:w-[45%] p-6 sm:p-8 md:py-6 md:pl-10 md:pr-4 relative z-20 flex flex-col items-start">
              <h2 className="font-serif text-xl sm:text-2.5xl font-extrabold text-[#281B10] mb-2 leading-tight">
                Need Professional <br className="hidden sm:inline" />
                Document Assistance?
              </h2>
              <p className="text-[11px] sm:text-xs font-semibold text-stone-500 mb-5 leading-relaxed max-w-sm">
                Get your property agreements drafted by certified legal writers quickly and securely.
              </p>
              
              <a
                href="#contact"
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
