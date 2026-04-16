import { Terminal, Shield, Zap, Layout, Activity, GitBranch, ArrowRight, Command } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md sticky top-0 z-50 border-b border-brand-900/30">
        <div className="flex items-center gap-2">
          <Terminal className="text-brand-500" size={24} />
          <span className="font-mono font-bold text-xl tracking-tight text-white">Dardcor<span className="text-brand-500">_</span></span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Dardcor/Dardcor-Agent" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-brand-300 transition-colors">
            <GitBranch size={20} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
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
            <GitBranch size={18} /> View on GitHub
          </a>
        </div>

        {/* Terminal Visual */}
        <div className="w-full max-w-4xl bg-[#090310] border border-brand-800 rounded-xl overflow-hidden shadow-2xl relative">
          <div className="flex items-center px-4 py-3 border-b border-brand-800/50 bg-[#0e0518]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            </div>
            <div className="mx-auto text-xs text-slate-500 font-mono">dardcor — bash</div>
          </div>
          <div className="p-6 text-left font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
            <div className="flex gap-4">
              <span className="text-brand-500">❯</span>
              <span className="text-white">dardcor run</span>
            </div>
            <div className="mt-2 text-slate-400">
              [SYSTEM] Initializing Dardcor Agent...<br />
              [SYSTEM] Loaded Memory & Skills.<br />
              <span className="text-brand-300">[AGENT] Ready. Awaiting objective.</span>
            </div>
            <div className="flex gap-4 mt-4">
              <span className="text-brand-500">❯</span>
              <span className="text-white">Fix the build errors in my project and commit the changes.</span>
            </div>
            <div className="mt-2 text-slate-400">
              <span className="text-blue-400">↳ [PLANNING]</span> Analyzing logs... found 3 TypeScript errors.<br />
              <span className="text-yellow-400">↳ [EXECUTING]</span> Updating type definitions in src/types.ts.<br />
              <span className="text-green-400">↳ [VERIFYING]</span> Running `npm run build`... Success.<br />
              <span className="text-brand-300">↳ [COMPLETED]</span> Pushed fix to branch `fix/types`.
            </div>
          </div>
        </div>
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
        <p className="text-slate-500 flex items-center justify-center gap-2">
          <Terminal size={16} /> Dardcor Agent — Built for Execution.
        </p>
      </footer>
    </div>
  );
}

export default App;
