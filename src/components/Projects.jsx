import React, { useState } from 'react';
import { 
  Sparkles, ExternalLink, CheckCircle2, Layers, ArrowUpRight, 
  Terminal, ShieldCheck, ShoppingCart, Bot, Mic, Monitor, Code2, Users, Database, KeyRound, Lock, UserCheck
} from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  // Custom visual mockup renderer for each project
  const renderProjectMockup = (projectId) => {
    switch (projectId) {
      case 'hr-management-system':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-sans text-xs select-none">
            {/* Top Mockup Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-violet-600/30 text-violet-300 font-bold font-mono">HRMS</span>
                <span className="text-slate-300 font-semibold">Admin Workspace</span>
              </div>
              <a 
                href="http://hr.54.253.99.131.nip.io/login" 
                target="_blank" 
                rel="noreferrer"
                className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] flex items-center gap-1.5 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                title="Open live HR Management System"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live Demo</span>
              </a>
            </div>

            {/* Simulated UI Cards */}
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block">Total Staff</span>
                <span className="text-sm font-bold text-white">128 Members</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block">Attendance</span>
                <span className="text-sm font-bold text-emerald-400">96.4%</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block">Pending Leaves</span>
                <span className="text-sm font-bold text-amber-400">4 Requests</span>
              </div>
            </div>

            {/* Simulated Table Rows */}
            <div className="space-y-1.5 bg-black/40 p-2 rounded-lg border border-white/5 text-[11px]">
              <div className="flex justify-between text-slate-400 border-b border-white/5 pb-1 text-[10px]">
                <span>Employee</span>
                <span>Role</span>
                <span>Status</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span className="font-medium">Sarah Jenkins</span>
                <span className="text-violet-400">Frontend Dev</span>
                <span className="text-emerald-400 font-mono text-[10px]">Present</span>
              </div>
            </div>

            {/* Bottom System Pill */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-2">
              <span>Stack: MERN + REST APIs</span>
              <span className="text-violet-400">Role: Administrator</span>
            </div>
          </div>
        );

      case 'ecommerce-website':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-sans text-xs select-none">
            {/* Top Mockup Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300 font-semibold">Storefront & Admin Panels</span>
              </div>
              <a 
                href="http://shop.54.253.99.131.nip.io/" 
                target="_blank" 
                rel="noreferrer"
                className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] flex items-center gap-1.5 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                title="Open live E-Commerce Store"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live Demo</span>
              </a>
            </div>

            {/* Product Grid Mockup */}
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-between">
                <div className="h-9 w-full rounded bg-gradient-to-tr from-cyan-900/50 to-blue-900/30 flex items-center justify-center text-[10px] text-cyan-300 font-mono">
                  Mechanical Pro
                </div>
                <div className="flex justify-between items-center mt-1.5">
                  <span className="text-white font-bold">$119.00</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">Coupon -15%</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-between">
                <div className="h-9 w-full rounded bg-gradient-to-tr from-indigo-900/50 to-purple-900/30 flex items-center justify-center text-[10px] text-indigo-300 font-mono">
                  Audio Monitor
                </div>
                <div className="flex justify-between items-center mt-1.5">
                  <span className="text-white font-bold">$79.00</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-violet-600/30 text-violet-300">In Stock</span>
                </div>
              </div>
            </div>

            {/* Admin Stats Pill */}
            <div className="bg-black/40 p-2 rounded-lg border border-white/5 flex justify-between items-center text-[10px]">
              <span className="text-slate-400">Admin Metrics:</span>
              <span className="text-emerald-400 font-semibold">Sequelize + MySQL</span>
              <span className="text-slate-400">Discounts & Orders</span>
            </div>
          </div>
        );

      case 'password-manager':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-sans text-xs select-none">
            {/* Top Mockup Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-bold">Secure Password Manager</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">Vault: 24 Credentials</span>
            </div>

            {/* Passwords list */}
            <div className="space-y-2 my-2 text-[11px]">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="text-white font-semibold">GitHub Account</span>
                </div>
                <span className="font-mono text-slate-400 text-[10px]">••••••••••••••</span>
                <span className="text-[10px] text-violet-400 font-mono">Copy</span>
              </div>

              <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                  <span className="text-white font-semibold">Google Workspace</span>
                </div>
                <span className="font-mono text-slate-400 text-[10px]">••••••••••••••</span>
                <span className="text-[10px] text-violet-400 font-mono">Copy</span>
              </div>
            </div>

            {/* Footer tools */}
            <div className="p-1.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[10px] text-slate-400">
              <span>Add, Edit, Delete & Search</span>
              <span className="text-emerald-400 font-semibold">React.js Client-Side</span>
            </div>
          </div>
        );

      case 'user-authentication-system':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-xs select-none">
            {/* Top Mockup Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300 font-bold">Auth & Token Engine</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px]">JWT + Bcrypt</span>
            </div>

            {/* Token Flow Architecture Mockup */}
            <div className="my-2 space-y-1.5 bg-black/50 p-2.5 rounded-lg border border-white/5 text-[10px]">
              <div className="text-emerald-400">&gt; POST /api/auth/login</div>
              <div className="text-slate-400 pl-2">Response: 200 OK | AccessToken (15m) + RefreshToken (7d)</div>
              <div className="text-cyan-400">&gt; GET /api/protected/profile</div>
              <div className="text-slate-400 pl-2">Bearer Token Verified: User Authorized</div>
            </div>

            {/* Bottom Security Pill */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
              <span>Bcrypt Salt Rounds: 10</span>
              <span className="text-emerald-400">Protected Routes Active</span>
            </div>
          </div>
        );

      case 'ai-virtual-assistant':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-xs select-none">
            {/* Top Mockup Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-amber-400 animate-pulse" />
                <span className="text-slate-300 font-bold">Python Voice Engine</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">NLP Listening...</span>
            </div>

            {/* Waveform graphic & command response */}
            <div className="my-2 space-y-2 text-[11px]">
              {/* Waveform */}
              <div className="flex items-center justify-center gap-1.5 py-3 bg-black/40 rounded-lg border border-white/5">
                {[8, 16, 24, 12, 32, 20, 28, 14, 22, 10, 18, 6].map((h, i) => (
                  <span 
                    key={i} 
                    className="w-1 bg-gradient-to-t from-amber-500 to-orange-400 rounded-full" 
                    style={{ height: `${h}px` }} 
                  />
                ))}
              </div>

              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[10px] text-slate-300">
                <span className="text-amber-400 font-semibold block">&gt; Voice Input:</span>
                "Open YouTube and search for Full Stack MERN tutorial"
              </div>
            </div>

            {/* Output status */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
              <span>SpeechRecognition + NLP</span>
              <span className="text-emerald-400">✔ Command Automated</span>
            </div>
          </div>
        );

      case 'ai-chatbot':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-xs select-none">
            {/* Top Mockup Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-bold">Groq AI Chatbot</span>
              </div>
              <a 
                href="http://ai.54.253.99.131.nip.io/" 
                target="_blank" 
                rel="noreferrer"
                className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] flex items-center gap-1.5 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                title="Open live AI Chatbot application"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live Demo</span>
              </a>
            </div>

            {/* Chat Stream Messages */}
            <div className="space-y-2 my-2 text-[11px]">
              <div className="flex justify-end">
                <span className="p-2 rounded-xl bg-violet-600/30 text-violet-200 border border-violet-500/30 max-w-[85%]">
                  Explain the MERN stack architecture with JWT auth
                </span>
              </div>
              <div className="flex justify-start">
                <div className="p-2 rounded-xl bg-white/5 text-slate-300 border border-white/5 max-w-[90%] space-y-1">
                  <span className="text-emerald-400 text-[10px] block font-bold">🤖 Assistant (Groq Engine)</span>
                  <p className="text-[10px] text-slate-300">
                    MERN decouples React client-side rendering from Express/Node backend APIs with MongoDB persistence.
                  </p>
                </div>
              </div>
            </div>

            {/* Streaming prompt bar */}
            <div className="p-1.5 rounded-lg bg-black/50 border border-white/10 flex items-center justify-between text-[10px] text-slate-400">
              <span>Ask coding questions... (Groq API)</span>
              <span className="text-emerald-400 font-bold">Send ⏎</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafted Projects & <span className="text-gradient-purple">Software Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Key applications developed across full-stack MERN development, e-commerce architectures, security systems, and AI automation.
          </p>
        </div>

        {/* Projects Grid: 2 columns on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-600/15 flex flex-col group"
            >
              {/* Project Visual / Screenshot / Mockup Header */}
              <div className={`relative h-60 w-full bg-gradient-to-br ${project.fallbackColor} border-b border-white/10 overflow-hidden`}>
                {/* Background grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                
                {/* Mockup Container */}
                <div className="relative z-10 h-full p-2">
                  <div className="w-full h-full rounded-xl bg-[#090b14]/85 border border-white/10 shadow-lg backdrop-blur-md overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                    {renderProjectMockup(project.id)}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-violet-900/80 text-violet-200 border border-violet-400/30 backdrop-blur-md shadow-md">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-violet-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mt-4 space-y-1.5 border-t border-white/5 pt-3">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5 hover:border-violet-500/30 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 transition-all group/btn"
                  >
                    <Github className="w-4 h-4 text-violet-400 group-hover/btn:scale-110 transition-transform" />
                    <span>View Repository</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all group/btn ${
                      project.hasLiveDemo
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/30 ring-1 ring-emerald-400/40'
                        : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-600/25'
                    }`}
                  >
                    {project.hasLiveDemo ? (
                      <>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        <span>Live Demo</span>
                      </>
                    ) : (
                      <span>Project Details</span>
                    )}
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repos CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-violet-950/40 via-[#0e101d] to-[#0a0c16] border border-violet-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white">Explore More Code on GitHub</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Browse full repositories, commits, and source code directly at github.com/Dushyantkamboj.
            </p>
          </div>

          <a
            href="https://github.com/Dushyantkamboj"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-violet-600/20 border border-white/15 hover:border-violet-500/40 transition-all shrink-0"
          >
            <Github className="w-4 h-4 text-violet-400" />
            <span>Visit GitHub Profile</span>
          </a>
        </div>

      </div>
    </section>
  );
}
