import React, { useState } from 'react';
import { ArrowDown, Download, Mail, Sparkles, Terminal, Code2, Layers, Cpu, CheckCircle2, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const codeSnippet = `const developer = {
  name: "Dushyant Kamboj",
  title: "Full Stack Developer",
  location: "Yamunanagar, Haryana, India",
  education: "B.Tech CSE (2022 - 2026)",
  training: "TechGlock Software Solutions (MERN Trainee)",
  coreStack: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
  certifications: {
    leetCode: "150+ Solved (50-Day & 100-Day Badges)",
    aiml: "Infosys Foundation AIML Training (Grade B)",
    ncc: "National Cadet Corps 'A', 'B' & 'C' (Grade B)"
  },
  status: "Available for full-time roles & projects",
  hireable: () => true
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols on LG) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-200 text-xs font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">{personalInfo.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-sm font-semibold tracking-widest uppercase text-violet-400 font-mono flex items-center gap-2">
                <span>&lt;Hello World /&gt;</span>
                <span className="w-12 h-[1px] bg-violet-500/40"></span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                I'm <span className="text-gradient-purple">{personalInfo.name}</span>
                <br />
                <span className="text-gradient-accent text-3xl sm:text-4xl lg:text-5xl font-bold">
                  {personalInfo.role}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Crafting modern, responsive web experiences with expertise in{' '}
              <span className="text-white font-semibold">JavaScript</span>,{' '}
              <span className="text-violet-300 font-semibold">React.js</span>,{' '}
              <span className="text-indigo-300 font-semibold">Node.js</span>, and{' '}
              <span className="text-cyan-300 font-semibold">Express.js</span>. 
              Dedicated to clean architecture, algorithmic problem solving, and building scalable full-stack applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={handleScrollToProjects}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-4 h-4 text-violet-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Highlights */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 w-full">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-violet-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/40 transition-all shadow-sm group"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-violet-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/40 transition-all shadow-sm group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-violet-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/40 transition-all shadow-sm group"
                  aria-label="Email Dushyant"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-4 ml-auto text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                  150+ DSA Solved
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  MERN Stack
                </span>
              </div>
            </div>

          </div>

          {/* Right Hero: Attractive Developer Coding Terminal & Interactive Mockup (5 Cols on LG) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/25 via-indigo-600/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10 animate-pulse-slow transform scale-95" />

            {/* Main Terminal Window Card */}
            <div className="w-full max-w-lg rounded-2xl bg-[#090b14]/90 border border-violet-500/30 shadow-2xl backdrop-blur-xl overflow-hidden text-left relative z-10">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#0d0f1e] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] font-mono text-slate-400 ml-2">dushyant-workspace</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'profile' ? 'bg-violet-600/30 text-violet-300 font-semibold' : 'hover:bg-white/5'
                    }`}
                  >
                    profile.js
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'terminal' ? 'bg-violet-600/30 text-violet-300 font-semibold' : 'hover:bg-white/5'
                    }`}
                  >
                    bash
                  </button>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 text-slate-400 hover:text-white transition-colors ml-1"
                    title="Copy code"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[300px]">
                {activeTab === 'profile' ? (
                  <div className="space-y-1">
                    <p className="text-slate-500">// Full Stack Developer Specification</p>
                    <p><span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;</p>
                    <p className="pl-4">
                      <span className="text-slate-300">name:</span> <span className="text-emerald-300">"{personalInfo.name}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-300">role:</span> <span className="text-emerald-300">"{personalInfo.role}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-300">education:</span> <span className="text-emerald-300">"B.Tech in Computer Science"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-300">training:</span> <span className="text-emerald-300">"TechGlock Software Solutions"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-300">coreStack:</span> [
                      <span className="text-cyan-300">"React.js"</span>, <span className="text-cyan-300">"Node.js"</span>, <span className="text-cyan-300">"Express"</span>
                      ],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-300">credentials:</span> &#123;
                    </p>
                    <p className="pl-8 text-slate-300">
                      leetCode: <span className="text-amber-300">"150+ Solved (50 & 100 Days Badges)"</span>,
                    </p>
                    <p className="pl-8 text-slate-300">
                      aiml: <span className="text-amber-300">"Infosys Foundation Grade B"</span>,
                    </p>
                    <p className="pl-8 text-slate-300">
                      ncc: <span className="text-amber-300">"'A', 'B' & 'C' Grade B"</span>
                    </p>
                    <p className="pl-4">&#125;,</p>
                    <p className="pl-4">
                      <span className="text-slate-300">status:</span> <span className="text-emerald-400">"Available to build impactful tech"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">hireable:</span> () =&gt; <span className="text-violet-400 font-bold">true</span>
                    </p>
                    <p>&#125;;</p>
                    <div className="pt-2 text-violet-400 flex items-center gap-1 animate-pulse">
                      <span>&gt;</span>
                      <span className="w-2 h-4 bg-violet-400 inline-block"></span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-slate-300">
                    <p className="text-slate-500">// Shell terminal execution</p>
                    <p className="text-emerald-400">$ dushyant --status</p>
                    <p className="text-slate-300">✔ Full Stack Developer ready for projects</p>
                    <p className="text-emerald-400">$ git log -1 --pretty=format:"%s"</p>
                    <p className="text-slate-300">"feat: optimized MERN architecture with clean UI"</p>
                    <p className="text-emerald-400">$ npm run dev</p>
                    <p className="text-cyan-300">🚀 Local: http://localhost:5173/</p>
                    <p className="text-slate-400 text-[11px]">Ready in 240ms. Everything compiling flawlessly.</p>
                    <div className="pt-2 text-violet-400 flex items-center gap-1 animate-pulse">
                      <span>$</span>
                      <span className="w-2 h-4 bg-emerald-400 inline-block"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 bg-[#0d0f1e] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Git: main*
                  </span>
                  <span>UTF-8</span>
                </div>
                <span className="text-violet-400">JavaScript ES6</span>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111322]/90 border border-violet-500/40 shadow-xl backdrop-blur-md animate-float-slow z-20">
              <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">React & Tailwind</span>
                <span className="text-[10px] text-slate-400 font-mono">Modern Frontend UI</span>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-5 -right-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111322]/90 border border-emerald-500/40 shadow-xl backdrop-blur-md animate-float-reverse z-20">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Node & Express</span>
                <span className="text-[10px] text-slate-400 font-mono">Robust APIs & Logic</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
