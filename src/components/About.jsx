import React from 'react';
import { GraduationCap, Briefcase, Code, Sparkles, Terminal, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code,
      title: "Frontend Engineering",
      desc: "Architecting responsive, intuitive user interfaces in React.js and Tailwind CSS with smooth micro-interactions."
    },
    {
      icon: Terminal,
      title: "Backend & REST APIs",
      desc: "Building reliable server-side services with Node.js and Express.js, connecting clean data flows and authentication."
    },
    {
      icon: Award,
      title: "Problem Solving & DSA",
      desc: "Demonstrated discipline with 150+ LeetCode problems solved and an official 100 Days LeetCode Badge."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Modern Web Apps & <span className="text-gradient-purple">Solving Real-World Problems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A look into my academic background, industry training, and passion for software craftsmanship.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-violet-600/10 to-transparent rounded-bl-full pointer-events-none transition-all group-hover:scale-110" />

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span>Who I Am</span>
                <span className="w-10 h-[2px] bg-violet-500/40"></span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm <strong className="text-white font-semibold">Dushyant Kamboj</strong>, a{' '}
                  <span className="text-violet-300 font-semibold">B.Tech Computer Science graduate</span> based in{' '}
                  <span className="text-white font-semibold">Yamunanagar, Haryana, India</span>, with hands-on experience in full-stack development using the MERN stack.
                </p>

                <p>
                  I completed a 3-month industry training program as a{' '}
                  <strong className="text-white font-semibold">MERN Stack Development Trainee at TechGlock Software Solutions</strong> (2/July/2026 – 30/September/2026), mastering MongoDB, Express.js, React.js, and Node.js while gaining practical experience in RESTful API development, database design, and responsive UI implementation.
                </p>

                <p>
                  I have solved <strong className="text-white font-semibold">150+ DSA problems on LeetCode</strong>, earning both the <span className="text-amber-300 font-semibold">50-Day and 100-Day badges</span>. Skilled in JavaScript, Python, REST APIs, and database management, with practical knowledge of AI/ML (certified by <strong className="text-white font-semibold">Infosys Foundation with Grade B</strong>) and strong leadership skills (awarded <strong className="text-white font-semibold">NCC 'A', 'B', and 'C' Certificates with Grade B</strong>).
                </p>
              </div>

              {/* Quick Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 mt-6 border-t border-white/10">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all">
                      <div className="p-2 w-fit rounded-lg bg-violet-600/20 text-violet-400 mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1">{pillar.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-snug">{pillar.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Highlights & Credentials Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Education */}
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-violet-500 hover:border-violet-400/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30 transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-violet-400 uppercase tracking-wider block">Education</span>
                  <h4 className="text-base font-bold text-white mt-0.5">B.Tech in Computer Science</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Strong theoretical core in Data Structures, Algorithms, Software Engineering, and Operating Systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Professional Training */}
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-cyan-500 hover:border-cyan-400/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400 group-hover:bg-cyan-600/30 transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">Professional Training</span>
                  <h4 className="text-base font-bold text-white mt-0.5">TechGlock Software Solutions</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Full Stack Development hands-on program focusing on MERN architecture, RESTful APIs, and responsive design.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Key Numerical Stats */}
            <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-[#0c0e1a] to-[#121426] border border-white/10">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Key Numbers</span>
                <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Verified Stats
                </span>
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {personalInfo.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-2xl font-extrabold text-white block bg-gradient-to-r from-violet-300 to-indigo-200 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 block mt-0.5">{stat.label}</span>
                    <span className="text-[10px] text-slate-400 font-mono block">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
