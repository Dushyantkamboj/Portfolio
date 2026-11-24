import React, { useState } from 'react';
import { Sparkles, Briefcase, GraduationCap, Code2, Calendar, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import { experienceEducation } from '../data/portfolioData';

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all' 
    ? experienceEducation 
    : experienceEducation.filter(item => item.type === activeTab);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#060810]/60">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>04 // CAREER & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-gradient-purple">Academic Background</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            My journey through intensive full-stack development training, computer science engineering studies, and applied project development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Milestones' },
            { id: 'experience', label: 'MERN Training' },
            { id: 'education', label: 'Education & Academics' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l-2 border-violet-500/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredItems.map((item, index) => {
            const isEducation = item.type === 'education';
            const isPractical = item.type === 'practical';

            return (
              <div key={index} className="relative group">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-[#0a0c16] border-2 border-violet-500 shadow-md shadow-violet-500/30 group-hover:scale-110 group-hover:border-violet-400 transition-all">
                  {isEducation ? (
                    <GraduationCap className="w-4 h-4 text-violet-400" />
                  ) : isPractical ? (
                    <Code2 className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-violet-300" />
                  )}
                </div>

                {/* Content Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all group-hover:shadow-xl group-hover:shadow-violet-600/10">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/30">
                      {item.badge}
                    </span>

                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-sm font-semibold text-slate-300 mt-1 flex items-center gap-2">
                    <span className="text-violet-400 font-mono">@</span>
                    <span>{item.organization}</span>
                  </div>

                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
