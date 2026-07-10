import React from 'react';
import buyingImg from '../assets/service_buying.png';
import docsImg from '../assets/service_documents.png';
import nriImg from '../assets/service_nri.png';

export default function Services() {
  const servicesData = [
    {
      title: 'Buying & Selling of Properties',
      image: buyingImg,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-white fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      points: [
        'Residential & Commercial',
        'Property Consultation',
        'Market Analysis',
        'Hassle-free Transactions',
      ],
      link: '#contact-buying',
    },
    {
      title: 'Document Registration & Writing',
      image: docsImg,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-white fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      points: [
        'Sale Deed Registration',
        'Agreement Drafting',
        'Legal Verification',
        'Document Writing Services',
      ],
      link: '#contact-docs',
    },
    {
      title: 'NRI Property Management',
      image: nriImg,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-white fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      points: [
        'Property Monitoring',
        'Rental Management',
        'Tax & Legal Assistance',
        'Power of Attorney Support',
      ],
      link: '#contact-nri',
    },
  ];

  return (
    <section id="services" className="w-full pt-6 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1.5px] w-8 bg-brand-gold"></span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D49D0E] uppercase">
              OUR SERVICES
            </span>
            <span className="h-[1.5px] w-8 bg-brand-gold"></span>
          </div>
          <h2 className="text-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#281B10] leading-tight">
            Complete Property Solutions
          </h2>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image and Icon Header */}
              <div className="relative h-60 w-full overflow-hidden flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Yellow Icon Badge Overlay */}
                <div className="absolute top-5 left-5 w-14 h-14 rounded-full bg-[#F5BC04] flex items-center justify-center shadow-lg border-2 border-white z-10 transform group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Ambient Subtle Shadow on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Card Content Body */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Service Title */}
                <h3 className="text-serif text-2xl font-bold text-[#281B10] mb-5 leading-snug tracking-tight">
                  {service.title}
                </h3>

                {/* Bullet Points List */}
                <ul className="space-y-3.5 flex-grow">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-600 font-medium text-sm">
                      {/* Checkmark icon inside circle */}
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#D49D0E] fill-none stroke-current stroke-3 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" className="opacity-15 fill-[#F5BC04]" />
                        <polyline points="9 11 12 14 17 9" />
                      </svg>
                      <span className="leading-tight">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Footer Link */}
                <a 
                  href={service.link}
                  className="flex items-center justify-between mt-8 pt-5 border-t border-stone-100 text-[#281B10] hover:text-[#D49D0E] font-bold text-sm tracking-wider transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <svg className="w-5 h-5 text-[#D49D0E] transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
