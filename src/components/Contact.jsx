import React, { useState } from 'react';
import { 
  Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, 
  Copy, Check, ArrowRight, MessageSquare, Clock, Globe
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (formError) setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email, and message.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    // Simulate sending (frontend only)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger festive confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#38bdf8', '#c084fc', '#ffffff']
      });

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 500);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#05070e]">
      {/* Background radial accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-violet-600/10 via-indigo-600/10 to-transparent blur-[160px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>06 // GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <span className="text-gradient-purple">Something Together!</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-xl">
            Have a project in mind, an open full-time position, or just want to discuss modern web technologies? I’d love to hear from you.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Quick Status Pill */}
            <div className="glass-panel p-6 rounded-2xl border border-violet-500/30">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
                  Currently Available
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-2">Ready for High-Impact Roles</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Actively seeking Full Stack Developer, Frontend Developer, and Software Engineer opportunities.
              </p>
            </div>

            {/* Email Card with Copy button */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-all group">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Direct Email</span>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-violet-300 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
                
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-violet-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-violet-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-all flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Phone & WhatsApp</span>
                <a 
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                  className="text-base font-bold text-white hover:text-violet-300 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-violet-600/20 text-violet-300 hover:bg-violet-600 hover:text-white transition-all border border-violet-500/30"
                title="Call Dushyant"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 text-white group-hover:bg-violet-600/20 group-hover:text-violet-300 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Repository</span>
                  <span className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">GitHub Profile</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 text-white group-hover:bg-violet-600/20 group-hover:text-violet-300 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Professional</span>
                  <span className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">LinkedIn Network</span>
                </div>
              </a>
            </div>

            {/* Location & Timezone info */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>Based in {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Open to Remote & Relocation</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form UI (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Send Me a Message</h3>
                    <p className="text-xs text-slate-400">Frontend interactive contact form</p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-violet-400 bg-violet-950/60 px-2.5 py-1 rounded border border-violet-500/20">
                  Quick Response
                </span>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-violet-300 font-semibold">{formData.name || 'there'}</span>! Your message has been logged in this demo preview. I will get back to you promptly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-medium">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                        Your Name <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                        Your Email <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Opportunity / Full Stack Role"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Message <span className="text-violet-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Dushyant, I came across your portfolio and wanted to discuss..."
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500 font-mono pt-2">
                    Direct inquiries can also be emailed to{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-violet-400 hover:underline">
                      {personalInfo.email}
                    </a>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
