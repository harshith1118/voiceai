import ElevenLabsWidget from "@/components/ElevenLabsWidget";
import { Mic, ShieldCheck, Activity } from "lucide-react";

export default function Home() {
  const AGENT_ID = "agent_8001kdtmtk2yf3b8gadvgdqm5z42";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-white" fill="white" fillOpacity={0.2} />
            <h1 className="text-2xl font-bold tracking-tight">VoiceResolve</h1>
          </div>
          <span className="text-xs md:text-sm font-medium bg-blue-700 px-3 py-1 rounded-full border border-blue-500">
            Civic Issue Assistant
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Report Civic Issues <br/><span className="text-blue-600">With Your Voice</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Spotted a water leak? Garbage pile-up? Potholes? Just speak to our AI assistant. 
            We analyze your report instantly and guide you on the next steps.
          </p>
        </div>

        {/* Widget Section */}
        <section className="mb-20 flex flex-col items-center">
          <div className="relative z-10">
            <ElevenLabsWidget agentId={AGENT_ID} />
          </div>
          <p className="text-center text-sm font-bold text-blue-700 mt-8 bg-blue-50 px-6 py-3 rounded-full shadow-md border border-blue-100 animate-pulse">
            Tap the widget to start speaking
          </p>
        </section>

        {/* Features / How it works */}
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          <div className="text-center px-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-800">Speak Naturally</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              No forms to fill. Just describe the problem as if you were talking to a city official.
            </p>
          </div>
          <div className="text-center px-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="bg-purple-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-800">Instant Analysis</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our AI assesses the urgency (High/Medium/Low) and summarizes the issue in real-time.
            </p>
          </div>
          <div className="text-center px-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-800">Immediate Action</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Get actionable advice on who to contact or what to do next immediately.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 mt-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p className="mb-2">&copy; 2026 VoiceResolve. Built for the ElevenLabs Challenge.</p>
          <p className="text-xs text-slate-400">Powered by ElevenLabs Conversational AI & Google Cloud Vertex AI</p>
        </div>
      </footer>
    </div>
  );
}