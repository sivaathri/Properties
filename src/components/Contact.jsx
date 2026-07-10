import React, { useState } from 'react';
import contactImg from '../assets/contact_living.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="w-full bg-white flex flex-col">
      
      {/* 1. Hero Section */}
      <section className="relative w-full bg-white overflow-hidden min-h-[460px] lg:min-h-[580px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-5 flex flex-col items-start relative z-10 animate-fade-in-up">
              
              {/* Category Tag */}
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D49D0E] uppercase mb-4">
                GET IN TOUCH
              </span>

              {/* Headings */}
              <h1 className="font-serif text-3.5xl sm:text-4.5xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                We're Here to Help
                <span className="block mt-1">
                  You Find the <span className="text-[#D49D0E]">Right Property</span>
                </span>
              </h1>

              {/* Decorative Bullet Line */}
              <div className="flex items-center gap-1.5 mt-5 mb-6">
                <span className="h-[2px] w-12 bg-[#D49D0E]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              </div>

              {/* Description Paragraphs */}
              <p className="text-stone-600 font-semibold text-xs sm:text-sm leading-relaxed max-w-lg mb-2">
                Have questions about buying, selling or managing properties? Our team is ready to assist you.
              </p>
              <p className="text-stone-500 font-semibold text-xs sm:text-sm leading-relaxed max-w-lg mb-10">
                Reach out to us today!
              </p>

              {/* Core Values Row (3 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-4 border-t border-stone-100">
                
                {/* Support */}
                <div className="flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-full bg-[#FFFDF9] border border-[#D49D0E]/20 flex items-center justify-center mb-3 text-[#D49D0E]">
                    <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="10" r="2" />
                    </svg>
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-stone-900 mb-1">Expert Support</h4>
                  <p className="text-[10px] font-semibold text-stone-500 leading-relaxed">
                    Talk to our property experts.
                  </p>
                </div>

                {/* Response */}
                <div className="flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-full bg-[#FFFDF9] border border-[#D49D0E]/20 flex items-center justify-center mb-3 text-[#D49D0E]">
                    <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-stone-900 mb-1">Quick Response</h4>
                  <p className="text-[10px] font-semibold text-stone-500 leading-relaxed">
                    We value your time and respond fast.
                  </p>
                </div>

                {/* Service */}
                <div className="flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-full bg-[#FFFDF9] border border-[#D49D0E]/20 flex items-center justify-center mb-3 text-[#D49D0E]">
                    <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-[#D49D0E] stroke-current stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-stone-900 mb-1">Trusted Service</h4>
                  <p className="text-[10px] font-semibold text-stone-500 leading-relaxed">
                    Your satisfaction is our priority.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Right Desktop Image block with parallel sweeps */}
        <div className="absolute right-0 top-0 bottom-0 w-[58%] xl:w-[56%] z-0 hidden lg:block overflow-hidden animate-scale-in">
          <div className="relative w-full h-full text-stone-700">
            <img
              src={contactImg}
              alt="Cozy modern living room interior"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft gradient fade overlay to merge with white background */}
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none"></div>
            
            {/* Parallel sweeps with custom gold stroke overlay starting from x=150 */}
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

      {/* 2. Contact Form & Details Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-50 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Get In Touch (5 Columns) */}
            <div className="lg:col-span-5 bg-[#FFFDF9]/60 border border-[#D49D0E]/10 rounded-[2rem] p-6 sm:p-10 shadow-sm flex flex-col items-start text-left">
              
              {/* Title */}
              <h2 className="font-serif text-2xl font-extrabold text-stone-900 mb-1">Get In Touch</h2>
              <div className="w-10 h-[2px] bg-[#D49D0E] mb-6"></div>

              {/* Sub-texts */}
              <p className="text-xs sm:text-sm font-bold text-stone-700 leading-snug">
                Have a question or need assistance?
              </p>
              <p className="text-xs sm:text-sm font-semibold text-stone-500 mb-8 leading-snug">
                Reach out to us using the details below.
              </p>

              {/* Info Items */}
              <ul className="space-y-6 w-full font-semibold">
                
                {/* Phone */}
                <li className="flex items-center gap-4.5">
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F0] border border-[#D49D0E]/10 flex items-center justify-center text-[#D49D0E] flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-[#D49D0E] fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.56 11.56 0 018.82 4c0-.55-.45-1-1-1H4a1 1 0 00-1 1c0 9.39 7.61 17 17 17a1 1 0 001-1v-3.58c0-.56-.45-1.04-1-1.04z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold text-stone-400 uppercase tracking-wider mb-0.5">Phone</span>
                    <span className="text-stone-800 text-sm font-extrabold leading-tight">95141 15556 | 96556 11234</span>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-center gap-4.5">
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F0] border border-[#D49D0E]/10 flex items-center justify-center text-[#D49D0E] flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-[#D49D0E] fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold text-stone-400 uppercase tracking-wider mb-0.5">Email</span>
                    <span className="text-[#D49D0E] text-sm font-extrabold leading-tight select-all">thirumalaipropertiespy@gmail.com</span>
                  </div>
                </li>

                {/* Office Address */}
                <li className="flex items-start gap-4.5">
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F0] border border-[#D49D0E]/10 flex items-center justify-center text-[#D49D0E] flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-[#D49D0E] fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold text-stone-400 uppercase tracking-wider mb-0.5">Office Address</span>
                    <span className="text-stone-800 text-sm font-extrabold leading-relaxed max-w-[280px]">No. 45, Kamarajar Salai, Puducherry - 605001, India</span>
                  </div>
                </li>

                {/* Working Hours */}
                <li className="flex items-start gap-4.5">
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F0] border border-[#D49D0E]/10 flex items-center justify-center text-[#D49D0E] flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-[#D49D0E] fill-current" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold text-stone-400 uppercase tracking-wider mb-0.5">Working Hours</span>
                    <span className="text-stone-800 text-sm font-extrabold leading-snug">Mon - Sat: 9:00 AM - 7:00 PM</span>
                    <span className="text-stone-500 text-xs font-bold mt-0.5 leading-snug">Sunday: By Appointment</span>
                  </div>
                </li>

              </ul>
            </div>

            {/* Right Column: Send Us a Message (7 Columns) */}
            <div className="lg:col-span-7 bg-[#FFFDF9]/60 border border-[#D49D0E]/10 rounded-[2rem] p-6 sm:p-10 shadow-sm">
              <h2 className="font-serif text-2xl font-extrabold text-stone-900 mb-1">Send Us a Message</h2>
              <div className="w-10 h-[2px] bg-[#D49D0E] mb-6"></div>
              
              <p className="text-xs sm:text-sm font-semibold text-stone-500 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you soon.
              </p>

              {isSubmitted ? (
                <div className="bg-[#FFFDF9] border border-[#D49D0E]/20 rounded-xl p-6 text-center text-[#D49D0E] animate-fade-in">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#D49D0E] mx-auto mb-3 stroke-current stroke-2 fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 className="font-bold text-base mb-1">Message Sent Successfully!</h3>
                  <p className="text-xs font-medium opacity-90">Thank you for reaching out. We will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-stone-700 tracking-wide">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name" 
                        className="w-full bg-white border border-stone-200/80 px-4 py-3 rounded-xl text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#D49D0E] placeholder:text-stone-300 transition-colors"
                      />
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-stone-700 tracking-wide">Your Phone *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number" 
                        className="w-full bg-white border border-stone-200/80 px-4 py-3 rounded-xl text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#D49D0E] placeholder:text-stone-300 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-stone-700 tracking-wide">Your Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address" 
                      className="w-full bg-white border border-stone-200/80 px-4 py-3 rounded-xl text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#D49D0E] placeholder:text-stone-300 transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-stone-700 tracking-wide">Subject *</label>
                    <input 
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Enter subject" 
                      className="w-full bg-white border border-stone-200/80 px-4 py-3 rounded-xl text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#D49D0E] placeholder:text-stone-300 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-stone-700 tracking-wide">Your Message *</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message here..." 
                      className="w-full bg-white border border-stone-200/80 px-4 py-3 rounded-xl text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#D49D0E] placeholder:text-stone-300 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button & Info Note */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
                    <button 
                      type="submit"
                      className="bg-[#D49D0E] hover:bg-[#C08C0C] active:scale-95 text-white font-extrabold py-3.5 px-8 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide"
                    >
                      <span>Send Message</span>
                      <svg className="w-4 h-4 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </button>
                    
                    <div className="flex items-center gap-1.5 text-stone-400">
                      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-stone-400 stroke-current stroke-[2] fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 11 11 13 15 9" />
                      </svg>
                      <span className="text-xs font-semibold">Your information is safe with us.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Other Ways to Connect Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 text-center">
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="h-[2px] w-12 bg-[#D49D0E] rounded-l-full"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Other Ways to Connect
            </h2>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D49D0E]"></span>
              <span className="h-[2px] w-12 bg-[#D49D0E] rounded-r-full"></span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: WhatsApp */}
            <a 
              href="https://wa.me/919514115556" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-stone-100/80 hover:border-emerald-100 hover:shadow-md rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-7.5 h-7.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.91 0c3.19.001 6.188 1.242 8.444 3.498 2.256 2.256 3.493 5.253 3.493 8.447-.003 6.587-5.328 11.91-11.91 11.91-2.008-.002-3.978-.507-5.73-1.467L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.402 0 9.799-4.394 9.802-9.796.002-2.617-1.017-5.078-2.872-6.934-1.854-1.854-4.312-2.873-6.93-2.873-5.405 0-9.801 4.394-9.805 9.798-.001 1.657.437 3.275 1.271 4.722L1.802 22.25l6.09-1.597z" />
                  <path d="M15.86 12.87c-.246-.123-1.46-.72-1.687-.803-.228-.083-.393-.123-.558.123-.165.247-.638.803-.78 1-.143.197-.287.222-.533.1-.247-.125-1.04-.383-1.98-1.222-.733-.655-1.228-1.464-1.372-1.71-.144-.247-.015-.38.11-.502.112-.11.247-.288.37-.432.124-.144.165-.247.248-.412.083-.165.04-.31-.02-.432-.063-.124-.558-1.344-.764-1.838-.2-.486-.404-.42-.558-.428-.144-.007-.31-.008-.475-.008-.165 0-.433.062-.66.31-.227.247-.866.845-.866 2.06 0 1.216.887 2.39 1.01 2.556.124.165 1.745 2.664 4.226 3.732.59.255 1.05.407 1.41.52.593.189 1.133.162 1.56.098.476-.072 1.46-.597 1.666-1.174.207-.577.207-1.07.145-1.173-.062-.103-.227-.165-.474-.288z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-stone-900 group-hover:text-[#D49D0E] transition-colors">WhatsApp</span>
                <span className="text-[11px] font-semibold text-stone-400 mt-0.5">Chat with us for quick assistance</span>
                <span className="text-sm font-extrabold text-[#128C7E] mt-2 tracking-wide">95141 15556</span>
              </div>
            </a>

            {/* Card 2: Call Us */}
            <a 
              href="tel:+919655611234" 
              className="bg-white border border-stone-100/80 hover:border-blue-100 hover:shadow-md rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.56 11.56 0 018.82 4c0-.55-.45-1-1-1H4a1 1 0 00-1 1c0 9.39 7.61 17 17 17a1 1 0 001-1v-3.58c0-.56-.45-1.04-1-1.04z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-stone-900 group-hover:text-[#D49D0E] transition-colors">Call Us</span>
                <span className="text-[11px] font-semibold text-stone-400 mt-0.5">Speak directly with our experts</span>
                <span className="text-sm font-extrabold text-[#006097] mt-2 tracking-wide">96556 11234</span>
              </div>
            </a>

            {/* Card 3: Email Us */}
            <a 
              href="mailto:thirumalaipropertiespy@gmail.com" 
              className="bg-white border border-stone-100/80 hover:border-purple-100 hover:shadow-md rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-purple-600 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="flex flex-col max-w-[160px] sm:max-w-none">
                <span className="text-sm font-extrabold text-stone-900 group-hover:text-[#D49D0E] transition-colors">Email Us</span>
                <span className="text-[11px] font-semibold text-stone-400 mt-0.5">Drop us an email anytime</span>
                <span className="text-xs font-extrabold text-[#673AB7] mt-2 truncate">thirumalaipropertiespy@gmail.com</span>
              </div>
            </a>

            {/* Card 4: Visit Office */}
            <a 
              href="https://maps.google.com/?q=No.+45,+Kamarajar+Salai,+Puducherry+-+605001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-stone-100/80 hover:border-[#D49D0E]/30 hover:shadow-md rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-amber-50 text-[#D49D0E] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-[#D49D0E] fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-stone-900 group-hover:text-[#D49D0E] transition-colors">Visit Office</span>
                <span className="text-[11px] font-semibold text-stone-400 mt-0.5">Come and meet our team</span>
                <span className="text-sm font-extrabold text-[#D49D0E] mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                  Get Directions <span className="text-base leading-none">&rarr;</span>
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}
