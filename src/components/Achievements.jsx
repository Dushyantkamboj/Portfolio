import React from 'react';
import { Sparkles, Code, Award, ShieldCheck, Flame, ExternalLink, CheckCircle } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const iconMap = {
    Code,
    Award,
    ShieldCheck,
    Sparkles,
    Flame
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>05 // RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Milestones & <span className="text-gradient-purple">Key Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A testament to continuous discipline, algorithmic problem solving, leadership, and technical credentials.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={item.id}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-600/15 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle corner gradient aura */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.color} blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  {/* Top Row: Icon + Stat Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-violet-600/20 group-hover:border-violet-500/30 transition-all">
                      <IconComponent className={`w-6 h-6 ${item.iconColor} group-hover:scale-110 transition-transform`} />
                    </div>

                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-white block tracking-tight font-mono">
                        {item.stat}
                      </span>
                      <span className="text-[11px] font-mono text-violet-400 uppercase tracking-wider block">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                    {item.issuer}
                  </span>

                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Strip */}
                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 text-slate-400 group-hover:text-white transition-colors">
                    <CheckCircle className="w-3.5 h-3.5 text-violet-400" />
                    {item.highlight}
                  </span>
                  <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* LeetCode & Coding Philosophy Highlight Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-panel border border-violet-500/25 bg-gradient-to-r from-violet-950/30 via-[#0a0c16] to-[#080912] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Daily Coding Consistency & Algorithmic Grit</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Solving problems every day builds intuition for memory efficiency, optimal time complexity, and edge cases—skills directly reflected in the robust, bug-free web architectures I create.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Active LeetCode Solver
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
