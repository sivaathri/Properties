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
            <div className="lg:col-span-5 flex flex-col items-start relative z-10">
              
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
        <div className="absolute right-0 top-0 bottom-0 w-[58%] xl:w-[56%] z-0 hidden lg:block overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column (7 Columns) */}
            <div className="lg:col-span-7 bg-[#FFFDF9]/60 border border-[#D49D0E]/10 rounded-[2rem] p-6 sm:p-10 shadow-sm">
              <h2 className="font-serif text-2xl font-extrabold text-stone-900 mb-2">Send Us a Message</h2>
              <p className="text-xs font-semibold text-stone-500 mb-8 leading-relaxed">
                Fill out the form below and our real estate experts will get back to you shortly.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center text-emerald-800 animate-fade-in">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-emerald-500 mx-auto mb-3 stroke-current stroke-2 fill-none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
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
                      <label className="text-xs font-bold text-stone-700 tracking-wide">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe" 
                        className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#D49D0E] transition-colors"
                      />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-stone-700 tracking-wide">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com" 
                        className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#D49D0E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-stone-700 tracking-wide">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 12345 67890" 
                        className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#D49D0E] transition-colors"
                      />
                    </div>
                    {/* Subject */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-stone-700 tracking-wide">Subject</label>
                      <input 
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Property Inquiry" 
                        className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#D49D0E] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-stone-700 tracking-wide">Message *</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you today?" 
                      className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl text-stone-900 text-sm font-semibold focus:outline-none focus:border-[#D49D0E] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full sm:w-auto self-start mt-2 bg-[#D49D0E] hover:bg-[#C08C0C] active:scale-95 text-white font-extrabold py-3.5 px-8 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <svg className="w-4 h-4 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Info Column (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Card Container */}
              <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 rounded-[2rem] p-6 sm:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-extrabold text-stone-900 mb-6">Contact Information</h2>
                
                <ul className="space-y-6 text-sm font-semibold">
                  
                  {/* Address */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#D49D0E]/20 flex items-center justify-center text-[#D49D0E] flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#D49D0E] fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Our Office Address</span>
                      <span className="text-stone-800 leading-relaxed text-sm">123, Anna Salai, Pondicherry - 605001</span>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#D49D0E]/20 flex items-center justify-center text-[#D49D0E] flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#D49D0E] fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.56 11.56 0 018.82 4c0-.55-.45-1-1-1H4a1 1 0 00-1 1c0 9.39 7.61 17 17 17a1 1 0 001-1v-3.58c0-.56-.45-1.04-1-1.04z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Call Representative</span>
                      <span className="text-stone-800 leading-relaxed text-sm">+91 12345 67890</span>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#D49D0E]/20 flex items-center justify-center text-[#D49D0E] flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#D49D0E] fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Email Support</span>
                      <span className="text-stone-800 leading-relaxed text-sm">info@thirumalaiproperties.com</span>
                    </div>
                  </li>

                  {/* Business Hours */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#D49D0E]/20 flex items-center justify-center text-[#D49D0E] flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#D49D0E] fill-current" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Business Hours</span>
                      <span className="text-stone-800 leading-relaxed text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
                    </div>
                  </li>

                </ul>
              </div>

              {/* Styled Vector Map Placeholder */}
              <div className="bg-[#FFFDF9]/60 border border-[#D49D0E]/10 rounded-[2rem] p-4 shadow-sm overflow-hidden h-60 relative flex items-center justify-center group">
                {/* Styled Map Graphics */}
                <div className="absolute inset-0 bg-[#FAF7F0] opacity-40 group-hover:scale-105 transition-transform duration-500" style={{
                  backgroundImage: 'radial-gradient(#D49D0E 0.5px, transparent 0.5px), radial-gradient(#D49D0E 0.5px, #FAF7F0 0.5px)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px'
                }}></div>
                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md mb-3 text-[#D49D0E]">
                    <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 text-[#D49D0E] fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-extrabold text-stone-900">Interactive Location Map</h4>
                  <p className="text-[10px] font-semibold text-stone-500 mt-1 max-w-[220px]">
                    Anna Salai Road, Pondicherry, Puducherry 605001, India.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
