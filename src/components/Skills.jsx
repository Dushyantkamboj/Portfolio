import React, { useState } from 'react';
import { 
  Sparkles, Code2, FileCode, Palette, Layout, Server, Cpu, Network, 
  Database, Table2, Binary, Terminal, Boxes, GitBranch, Laptop, TerminalSquare, Cloud,
  CheckCircle, Layers, Send, Award, Users, CheckCircle2
} from 'lucide-react';
import { skillsData, technicalSkills } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Code2,
    FileCode,
    Palette,
    Layout,
    Server,
    Cpu,
    Network,
    Database,
    Table2,
    Binary,
    Terminal,
    Boxes,
    GitBranch,
    Laptop,
    TerminalSquare,
    Cloud,
    Send,
    Award,
    Sparkles
  };

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'programming', label: 'Languages' },
    { id: 'aiml', label: 'AI & ML' },
    { id: 'tools', label: 'Tools & Version Control' }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skillsData).flatMap(([cat, skills]) => 
        skills.map(s => ({ ...s, category: cat }))
      );
    }
    return (skillsData[activeCategory] || []).map(s => ({ ...s, category: activeCategory }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#060810]/60">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-b from-indigo-600/10 via-purple-600/10 to-transparent blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-purple">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive overview of my technical stack across programming languages, frontend frameworks, backend servers, databases, AI/ML concepts, and tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25 border border-violet-400/40 scale-105'
                    : 'bg-[#0e101d] text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="glass-panel p-5 rounded-2xl glass-panel-hover flex flex-col justify-between relative group overflow-hidden border border-white/5"
              >
                {/* Subtle top corner gradient glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${skill.color} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white group-hover:border-violet-500/40 group-hover:bg-violet-600/20 transition-all">
                      <IconComponent className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-violet-300 border border-violet-500/20 font-medium">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Bottom Category Tag */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="capitalize">{skill.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 group-hover:bg-violet-400"></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies Row */}
        <div className="mt-10 p-6 rounded-2xl glass-panel border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-violet-400 uppercase tracking-wider block">Professional Strengths</span>
              <h4 className="text-base font-bold text-white mt-0.5">Core Competencies</h4>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {technicalSkills.competencies.map((comp, idx) => (
                <div 
                  key={idx} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-950/40 border border-violet-500/30 text-xs text-violet-200 font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Core Tech Badge Strip */}
        <div className="mt-6 p-6 rounded-2xl glass-panel border border-violet-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Full Stack Ready & Continuously Learning</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Hands-on with MERN stack, Python automation, and RESTful APIs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Python', 'Tailwind', 'LeetCode'].map((item, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                #{item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
