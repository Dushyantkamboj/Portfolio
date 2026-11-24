import React, { useState } from 'react';
import { X, Download, Printer, ExternalLink, ZoomIn, ZoomOut, RotateCcw, FileImage } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open('/Dushyant_Kamboj_Resume.pdf', '_blank');
    if (printWindow) {
      printWindow.focus();
      printWindow.print();
    } else {
      window.print();
    }
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.15, 1.8));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.15, 0.7));
  const handleZoomReset = () => setZoomLevel(1);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[96vh] bg-[#0d0f1a] border border-violet-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Header */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-[#090b14] gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <FileImage className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                Dushyant Kamboj — Official Resume
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Original Document
                </span>
              </h3>
            </div>
          </div>

          {/* Actions & Zoom Controls */}
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={handleZoomOut}
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleZoomReset}
                className="px-2 text-[11px] font-mono text-slate-300 hover:text-white"
                title="Reset Zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct Download Original PDF */}
            <a
              href="/Dushyant_Kamboj_Resume.pdf"
              download="Dushyant_Kamboj_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-all shadow-md shadow-violet-600/30 active:scale-95"
              title="Download exact PDF document"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open Raw PDF in Browser */}
            <a
              href="/Dushyant_Kamboj_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg transition-all border border-white/10 active:scale-95"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg transition-all border border-white/10 active:scale-95"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Exact Resume Image Container */}
        <div className="flex-1 overflow-y-auto overflow-x-auto p-3 sm:p-6 bg-[#05060b] flex items-start justify-center">
          <div 
            className="transition-transform duration-200 ease-out origin-top flex justify-center w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src="/Dushyant_Kamboj_Resume.png"
              alt="Dushyant Kamboj Official Resume"
              className="w-full max-w-[820px] h-auto shadow-2xl rounded-sm border border-slate-300/40 select-none bg-white"
              draggable={false}
            />
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="px-5 py-2.5 border-t border-white/10 bg-[#090b14] flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Original Document: <code className="text-violet-400 font-mono">Dushyant_Kamboj_Resume.pdf</code>
          </span>

          <div className="flex items-center gap-3">
            <a
              href="/Dushyant_Kamboj_Resume.png"
              download="Dushyant_Kamboj_Resume.png"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Save as PNG Image
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="/Dushyant_Kamboj_Resume.pdf"
              download="Dushyant_Kamboj_Resume.pdf"
              className="text-violet-400 hover:text-violet-300 font-semibold flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" /> Save as Official PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
