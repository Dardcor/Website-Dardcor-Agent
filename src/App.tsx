import { useState, useEffect } from 'react';
import { Terminal, Shield, Zap, Layout, Activity, ArrowRight, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalDemo = () => {
  const [lines, setLines] = useState<any[]>([]);
  const [phase, setPhase] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const script = [
    { type: 'input', text: 'dardcor run' },
    { type: 'system', text: '[SYSTEM] Initializing Dardcor Agent v1.0.0...' },
    { type: 'system', text: '[SYSTEM] Connecting to local memory vault...' },
    { type: 'agent', text: '[AGENT] Online. Ready for autonomous execution.' },
    { type: 'input', text: 'Create a modern dashboard with real-time stats and dark theme.' },
    { type: 'action', label: '[RESEARCH]', text: 'Searching for optimal dashboard components...', color: 'text-blue-400' },
    { type: 'action', label: '[RESEARCH]', text: 'Selected: React, Framer Motion, and Tailwind CSS.', color: 'text-blue-400' },
    { type: 'action', label: '[EXECUTING]', text: 'Scaffolding project structure...', color: 'text-yellow-400' },
    { type: 'action', label: '[EXECUTING]', text: 'Created: src/components/Sidebar.tsx', color: 'text-yellow-400' },
    { type: 'action', label: '[EXECUTING]', text: 'Created: src/components/StatsCard.tsx', color: 'text-yellow-400' },
    { type: 'action', label: '[EXECUTING]', text: 'Created: src/hooks/useRealtimeData.ts', color: 'text-yellow-400' },
    { type: 'action', label: '[PLANNING]', text: 'Integrating theme system...', color: 'text-blue-400' },
    { type: 'action', label: '[EXECUTING]', text: 'Applying dark-purple aesthetic tokens.', color: 'text-yellow-400' },
    { type: 'action', label: '[PLANNING]', text: 'Setting up API integration layer...', color: 'text-blue-400' },
    { type: 'action', label: '[EXECUTING]', text: 'Generated Zod schemas for API validation.', color: 'text-yellow-400' },
    { type: 'action', label: '[EXECUTING]', text: 'Implemented React Query hooks for fetching.', color: 'text-yellow-400' },
    { type: 'action', label: '[SECURITY]', text: 'Conducting automated security audit...', color: 'text-brand-500' },
    { type: 'action', label: '[SECURITY]', text: 'Scanned 42 dependencies. 0 vulnerabilities found.', color: 'text-brand-500' },
    { type: 'action', label: '[VERIFYING]', text: 'Running local test suite...', color: 'text-green-400' },
    { type: 'system', text: '[ERROR] Module not found: "lucide-react" in StatsCard.tsx' },
    { type: 'action', label: '[DOCTOR]', text: 'Self-healing triggered. Diagnosing...', color: 'text-red-400' },
    { type: 'action', label: '[DOCTOR]', text: 'Installing missing dependency: npm install lucide-react', color: 'text-red-400' },
    { type: 'action', label: '[VERIFYING]', text: 'Retrying build... Success.', color: 'text-green-400' },
    { type: 'action', label: '[OPTIMIZE]', text: 'Minifying assets and optimizing bundle size...', color: 'text-blue-300' },
    { type: 'action', label: '[TESTING]', text: 'Verifying responsive layout (Mobile, Tablet, Desktop)...', color: 'text-green-400' },
    { type: 'action', label: '[TESTING]', text: 'Lighthouse score: 100/100/100/100.', color: 'text-green-400' },
    { type: 'action', label: '[IMAGES]', text: 'WebP conversion triggered for /assets/hero.jpg.', color: 'text-yellow-400' },
    { type: 'action', label: '[IMAGES]', text: 'Optimized 12 assets. Saved 2.4MB.', color: 'text-yellow-400' },
    { type: 'action', label: '[GIT]', text: 'Committing changes: "feat: add real-time dashboard"', color: 'text-slate-400' },
    { type: 'action', label: '[GIT]', text: 'Pushed to origin main.', color: 'text-slate-400' },
    { type: 'action', label: '[COMPLETED]', text: 'Dashboard built successfully at http://127.0.0.1:25000', color: 'text-brand-300' },
    { type: 'agent', text: '[AGENT] All systems optimal. Mission accomplished.' },
  ];

  useEffect(() => {
    if (phase < script.length) {
      const current = script[phase];

      if (current.type === 'input') {
        setIsTyping(true);
        let i = 0;
        setTypedText("");
        const typingTimer = setInterval(() => {
          const char = current.text[i];
          if (char !== undefined) {
            setTypedText((prev) => prev + char);
            i++;
          }

          if (i >= current.text.length) {
            clearInterval(typingTimer);
            setTimeout(() => {
              setLines((prev) => [...prev, current]);
              setTypedText("");
              setIsTyping(false);
              setPhase((prev) => prev + 1);
            }, 600);
          }
        }, 50);
        return () => clearInterval(typingTimer);
      } else {
        const timer = setTimeout(() => {
          setLines((prev) => [...prev, current]);
          setPhase((prev) => prev + 1);
        }, 400);
        return () => clearTimeout(timer);
      }
    } else {
      const resetTimer = setTimeout(() => {
        setLines([]);
        setPhase(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [phase]);

  // Auto-scroll to bottom
  useEffect(() => {
    const el = document.getElementById('terminal-content');
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, typedText]);

  return (
    <div className="w-full max-w-4xl bg-[#090310] border border-brand-800 rounded-xl overflow-hidden shadow-2xl relative group">
      <div className="flex items-center px-4 py-3 border-b border-brand-800/50 bg-[#0e0518]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="mx-auto text-xs text-slate-500 font-mono tracking-widest uppercase">Autonomous Agent</div>
      </div>
      <div id="terminal-content" className="p-6 text-left font-mono text-xs sm:text-sm md:text-base leading-relaxed h-[400px] overflow-y-auto custom-scrollbar bg-[#05010a]">
        <AnimatePresence mode="popLayout">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-1.5"
            >
              {line.type === 'input' && (
                <div className="flex gap-3">
                  <span className="text-brand-500 font-bold">❯</span>
                  <span className="text-white">{line.text}</span>
                </div>
              )}
              {line.type === 'system' && <div className="text-slate-500 italic">{line.text}</div>}
              {line.type === 'agent' && <div className="text-brand-400 font-bold">{line.text}</div>}
              {line.type === 'action' && (
                <div className="text-slate-300 pl-4 border-l border-brand-900/50 ml-1.5 py-0.5">
                  <span className={`${line.color} font-bold mr-2 uppercase text-[10px]`}>{line.label}</span>
                  <span className="opacity-90">{line.text}</span>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <div className="flex gap-3 mb-1.5">
            <span className="text-brand-500 font-bold">❯</span>
            <span className="text-white">{typedText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2.5 h-5 bg-brand-500 translate-y-1"
            />
          </div>
        )}

        {!isTyping && phase < script.length && (
          <div className="flex gap-3">
            <span className="text-brand-500 font-bold">❯</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2.5 h-5 bg-brand-500 translate-y-1"
            />
          </div>
        )}
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none border border-brand-500/10 rounded-xl"></div>
    </div>
  );
};



function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md sticky top-0 z-50 border-b border-brand-900/30">
        <div className="flex items-center gap-3">
          <img src="/dardcor.png" alt="Dardcor Logo" className="h-10 w-auto object-contain rounded-md" />
          <span className="font-mono font-bold text-xl tracking-tight text-brand-800">Dardcor Agent</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center relative overflow-hidden">
        {/* Background Glare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          The agent that <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-300 to-brand-600 text-glow">actually executes.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10">
          End-to-end autonomous execution with zero hand-holding. Your relentless local agent for coding and systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#quickstart" className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-lg font-medium transition-all box-glow flex items-center justify-center gap-2">
            Get Started <ArrowRight size={18} />
          </a>
          <a href="https://github.com/Dardcor/Dardcor-Agent" target="_blank" rel="noreferrer" className="bg-bg-panel border border-brand-800 hover:border-brand-600 text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
            <svg
              height="18"
              width="18"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            View on GitHub
          </a>
        </div>

        <TerminalDemo />
      </header>

      {/* Quick Start */}
      <section id="quickstart" className="py-20 px-6 border-t border-brand-900/30 bg-bg-panel/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 font-mono flex items-center gap-2">
            <span className="text-brand-600">⟩</span> Quick Start
          </h2>
          <p className="text-slate-400 mb-8">Works globally via NPM. One command to rule them all.</p>

          <div className="bg-[#090310] border border-brand-800 rounded-lg p-5 flex items-center justify-between group">
            <code className="font-mono text-brand-300">npm install -g dardcor-agent</code>
            <button className="text-slate-500 hover:text-white transition-colors" onClick={() => navigator.clipboard.writeText('npm install -g dardcor-agent')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 font-mono flex items-center gap-2">
            <span className="text-brand-600">⟩</span> What It Does
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-bg-panel border border-brand-900/50 p-6 rounded-xl hover:border-brand-600/50 transition-colors">
              <Zap className="text-brand-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Ultra Token Efficient</h3>
              <p className="text-slate-400">Leaner responses, faster results, lower cost. No fluff, no filler, just pure execution.</p>
            </div>

            <div className="bg-bg-panel border border-brand-900/50 p-6 rounded-xl hover:border-brand-600/50 transition-colors">
              <Command className="text-brand-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Fully Autonomous</h3>
              <p className="text-slate-400">Analyzes, decides, and executes operations directly on your local system without babysitting.</p>
            </div>

            <div className="bg-bg-panel border border-brand-900/50 p-6 rounded-xl hover:border-brand-600/50 transition-colors">
              <Activity className="text-brand-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Self-Healing Doctor</h3>
              <p className="text-slate-400">Broken config? Run <code className="text-brand-300">dardcor doctor</code> to diagnose and repair your system automatically.</p>
            </div>

            <div className="bg-bg-panel border border-brand-900/50 p-6 rounded-xl hover:border-brand-600/50 transition-colors">
              <Shield className="text-brand-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">100% Local & Private</h3>
              <p className="text-slate-400">Zero telemetry. Your code and secrets never leave your machine. Privacy is the architecture.</p>
            </div>

            <div className="bg-bg-panel border border-brand-900/50 p-6 rounded-xl hover:border-brand-600/50 transition-colors">
              <Layout className="text-brand-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Modern Web UI</h3>
              <p className="text-slate-400">A sleek, interactive browser dashboard with live session history via <code className="text-brand-300">dardcor run</code>.</p>
            </div>

            <div className="bg-bg-panel border border-brand-900/50 p-6 rounded-xl hover:border-brand-600/50 transition-colors">
              <Terminal className="text-brand-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Lightweight CLI</h3>
              <p className="text-slate-400">Zero overhead native terminal interface. Perfect for automation pipelines and scripting.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Usage Modes */}
      <section className="py-20 px-6 bg-bg-panel/30 border-t border-brand-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 font-mono flex items-center gap-2">
            <span className="text-brand-600">⟩</span> Usage Modes
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-white mb-2">Web UI</h3>
                <p className="text-slate-400 text-sm">Real-time session dashboard, interactive conversation history, clean responsive interface.</p>
              </div>
              <div className="md:w-2/3 w-full bg-[#090310] border border-brand-800 rounded-lg p-5 font-mono text-sm">
                <span className="text-brand-500">❯</span> <span className="text-white">dardcor run</span><br />
                <span className="text-slate-500">Starts local server at http://127.0.0.1:25000</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-white mb-2">CLI Mode</h3>
                <p className="text-slate-400 text-sm">Rapid coding sessions directly in terminal. Built for automation and lightweight workflows.</p>
              </div>
              <div className="md:w-2/3 w-full bg-[#090310] border border-brand-800 rounded-lg p-5 font-mono text-sm">
                <span className="text-brand-500">❯</span> <span className="text-white">dardcor cli</span><br />
                <span className="text-slate-500">Drops you into a native terminal shell.</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-white mb-2">Doctor Mode</h3>
                <p className="text-slate-400 text-sm">Agent will scan, diagnose, and repair your system configuration and broken dependencies automatically.</p>
              </div>
              <div className="md:w-2/3 w-full bg-[#090310] border border-brand-800 rounded-lg p-5 font-mono text-sm">
                <span className="text-brand-500">❯</span> <span className="text-white">dardcor doctor</span><br />
                <span className="text-slate-500">Diagnosing system health...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-brand-900/30">
        <p className="text-slate-500 font-mono text-xs sm:text-sm">
          &copy; 2026 Dardcor Agent build by Team The Dardcor Society
        </p>
      </footer>
    </div>
  );
}

export default App;
