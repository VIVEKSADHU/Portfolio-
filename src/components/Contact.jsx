import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Add current date and time to the hidden input
    const currentDate = new Date();
    const dateString = currentDate.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    // Set the date in the hidden field
    const dateField = form.current.querySelector('input[name="sent_date"]');
    if (dateField) {
      dateField.value = dateString;
    }

    // EmailJS configuration
    emailjs.sendForm(
      'service_tqmohnx',
      'template_nke7ufe',
      form.current,
      '3zxYsmBZuZ88i1R7R'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      form.current.reset();
    }, (error) => {
      console.log('Email failed to send:', error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
  <section id="contact" className="py-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Let's Connect</h2>
      <p className="text-lg text-gray-300 text-center mb-8 leading-relaxed">
        Ready to collaborate on something exceptional? I'd love to hear from you.
      </p>
      <form ref={form} onSubmit={sendEmail} className="bg-charcoal-800/80 rounded-xl shadow-2xl p-8 flex flex-col gap-6 border border-maroon-800/30">
        <input 
          type="text" 
          name="from_name"
          placeholder="Your Name" 
          className="px-4 py-3 rounded-lg border border-maroon-700/50 bg-charcoal-900/50 text-white placeholder-gray-400 focus:border-maroon-500 focus:outline-none transition-colors duration-300" 
          required 
        />
        <input 
          type="email" 
          name="from_email"
          placeholder="Your Email" 
          className="px-4 py-3 rounded-lg border border-maroon-700/50 bg-charcoal-900/50 text-white placeholder-gray-400 focus:border-maroon-500 focus:outline-none transition-colors duration-300" 
          required 
        />
        <input 
          type="text" 
          name="subject"
          placeholder="Subject (Optional)" 
          className="px-4 py-3 rounded-lg border border-maroon-700/50 bg-charcoal-900/50 text-white placeholder-gray-400 focus:border-maroon-500 focus:outline-none transition-colors duration-300" 
        />
        <textarea 
          name="message"
          placeholder="Your Message" 
          rows={5} 
          className="px-4 py-3 rounded-lg border border-maroon-700/50 bg-charcoal-900/50 text-white placeholder-gray-400 focus:border-maroon-500 focus:outline-none transition-colors duration-300 resize-none" 
          required 
        />
        
        {/* Hidden field for timestamp */}
        <input type="hidden" name="sent_date" />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`px-8 py-4 rounded-lg font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
            isSubmitting 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-maroon-gradient hover:shadow-xl'
          } text-white`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-900/50 border border-green-700 text-green-300 px-4 py-3 rounded-lg">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg">
            ❌ Failed to send message. Please try again or email me directly.
          </div>
        )}
      </form>
      <div className="text-center mt-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:viveksadhu369@gmail.com" className="text-maroon-400 hover:text-maroon-300 hover:underline transition-colors duration-300 text-lg">
            viveksadhu369@gmail.com
          </a>
          <span className="hidden sm:block text-gray-500">|</span>
          <a href="tel:+918297310979" className="text-maroon-400 hover:text-maroon-300 hover:underline transition-colors duration-300 text-lg">
            +91-8297310979
          </a>
        </div>
        <div className="flex gap-6 justify-center mt-6">
          <a href="https://github.com/VIVEKSADHU" className="text-gray-400 hover:text-maroon-400 transition-colors duration-300 font-medium">
            GitHub Profile
          </a>
          <a href="https://www.linkedin.com/in/vivek-sadhu-6211a4250" className="text-gray-400 hover:text-maroon-400 transition-colors duration-300 font-medium">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
