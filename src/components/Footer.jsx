import React from 'react';
import logoSymbol from '../assets/logo1.png';

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden">
      
      {/* 1. Top CTA Banner (Bright Gold Gradient) */}
      <div className="w-full bg-gradient-to-r from-[#F5BC04] via-[#F4B400] to-[#E5A900] relative py-10 md:py-12 px-4 sm:px-6 lg:px-8 border-b border-stone-200/20 z-10 shadow-inner">
        {/* City Skyscraper Vector Silhouette */}
        <svg className="absolute left-6 bottom-0 h-[85%] w-auto text-[#23190E]/8 pointer-events-none hidden md:block" viewBox="0 0 300 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
          <rect x="10" y="40" width="16" height="60" rx="1" />
          <rect x="30" y="20" width="20" height="80" rx="1" />
          <rect x="54" y="5" width="22" height="95" rx="1" />
          <rect x="80" y="35" width="18" height="65" rx="1" />
          <rect x="102" y="50" width="14" height="50" rx="1" />
          <rect x="120" y="15" width="24" height="85" rx="1" />
          <rect x="148" y="30" width="20" height="70" rx="1" />
          <rect x="172" y="45" width="16" height="55" rx="1" />
        </svg>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-20">
          {/* CTA Text */}
          <div className="text-center md:text-left md:pl-48">
            <span className="text-xs sm:text-sm font-semibold text-[#23190E]/80 tracking-wider uppercase">
              Need Property Assistance?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#23190E] mt-1 leading-tight">
              We're Here to Help You!
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center gap-4 sm:gap-6 flex-wrap justify-center">
            {/* Call Now Button */}
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2.5 bg-white text-[#23190E] hover:bg-stone-50 active:scale-95 px-6 sm:px-8 py-3.5 rounded-xl font-extrabold text-sm tracking-wide shadow-md transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F5BC04]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.1 15.1 0 01-6.59-6.59l2.2-2.2a1 1 0 00.25-1.02A11.36 11.36 0 008.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                <path d="M14 6.5c1.5 0 3 1.5 3 3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M14 3.5c3.2 0 6 2.8 6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span>Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-white text-[#23190E] hover:bg-stone-50 active:scale-95 px-6 sm:px-8 py-3.5 rounded-xl font-extrabold text-sm tracking-wide shadow-md transition-all duration-300"
            >
              <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.666.988 3.536 1.509 5.44 1.51h.005c5.847 0 10.605-4.754 10.608-10.604.002-2.834-1.1-5.5-3.103-7.501C17.098 4.557 14.437 3.452 11.603 3.45c-5.85 0-10.609 4.756-10.612 10.606-.001 2.01.524 3.973 1.523 5.724L1.353 22.048l2.42-.635.031.018-.007.015c1.62.962 3.477 1.47 5.372 1.472h.005l.006-.002z" />
                <path d="M17.472 14.382c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.51-.16-.723.16-.213.32-.823.16-.823.16l-.213.32-.475-.24c-.452-.226-1.5-.55-2.863-1.76-1.06-.946-1.776-2.115-1.984-2.472-.208-.358-.022-.55.156-.728.16-.16.32-.32.48-.48.16-.16.213-.27.32-.48.11-.21.05-.4-.03-.56-.08-.16-.723-1.74-.99-2.39-.26-.63-.52-.54-.723-.55-.186-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.293.32-1.12 1.1-1.12 2.68s1.15 3.12 1.3 3.32c.16.2 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.89-.77 2.15-1.48.26-.71.26-1.32.18-1.44-.08-.12-.29-.18-.61-.34z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Bottom Links Bar (Solid Gold Background) */}
      <div className="w-full bg-[#D29F13] py-14 px-4 sm:px-6 lg:px-8 text-[#23190E] z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            
            {/* Column 1: Brand Logo & Socials */}
            <div className="flex flex-col items-start lg:pr-8 lg:border-r border-[#23190E]/10">
              <div className="flex items-center gap-3 select-none mb-4">
                <img src={logoSymbol} alt="Thirumalai Properties Icon" className="h-11 w-auto object-contain brightness-0 invert" />
                <div className="flex flex-col items-start mt-0.5">
                  <span className="font-serif font-bold text-lg tracking-[0.1em] leading-none text-white">
                    THIRUMALAI
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-[1px] w-3 bg-white/70"></span>
                    <span className="text-[9px] font-bold tracking-[0.25em] text-white/90 leading-none uppercase">
                      PROPERTIES
                    </span>
                    <span className="h-[1px] w-3 bg-white/70"></span>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#23190E] mb-6 leading-relaxed max-w-[280px]">
                Your Trusted Partner in Real Estate & Documentation Services.
              </p>
              
              {/* Social Icon Rings */}
              <div className="flex items-center gap-3.5">
                {[
                  { icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', label: 'Facebook' },
                  { icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01', label: 'Instagram', isInsta: true },
                  { icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z', label: 'LinkedIn' },
                  { icon: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z', label: 'YouTube' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-[#23190E]/20 flex items-center justify-center text-[#23190E] hover:border-[#23190E] hover:bg-[#23190E]/5 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      {social.isInsta ? (
                        <>
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </>
                      ) : (
                        <path d={social.icon} />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start lg:pl-12 lg:pr-8 lg:border-r border-[#23190E]/10">
              <h4 className="text-base font-extrabold text-[#23190E] mb-5 uppercase tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-3.5 text-sm font-semibold">
                {['Home', 'Services', 'About Us', 'Why Us', 'Testimonials', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-all duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="flex flex-col items-start lg:pl-12 lg:pr-8 lg:border-r border-[#23190E]/10">
              <h4 className="text-base font-extrabold text-[#23190E] mb-5 uppercase tracking-wide">
                Our Services
              </h4>
              <ul className="space-y-3.5 text-sm font-semibold leading-snug">
                {[
                  { text: 'Buying & Selling of Properties', href: '#services' },
                  { text: 'Document Registration & Writing', href: '#services' },
                  { text: 'NRI Property Management', href: '#services' }
                ].map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="hover:text-white transition-all duration-300">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="flex flex-col items-start lg:pl-12">
              <h4 className="text-base font-extrabold text-[#23190E] mb-5 uppercase tracking-wide">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-start gap-3 leading-snug">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>123, Anna Salai, Pondicherry - 605001</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 12345 67890</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>info@thirumalaiproperties.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright & Legal Row */}
          <div className="border-t border-[#23190E]/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold">
            <span>
              © 2024 Thirumalai Properties. All Rights Reserved.
            </span>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="hover:text-white transition-all duration-300">Privacy Policy</a>
              <span className="text-[#23190E]/30">|</span>
              <a href="#" className="hover:text-white transition-all duration-300">Terms & Conditions</a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
