"use client";

import Script from "next/script";

export default function ElevenLabsWidget({ agentId }: { agentId: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Script 
        src="https://elevenlabs.io/convai-widget/index.js" 
        strategy="afterInteractive" 
      />
      <div className="w-full flex justify-center">
        {/* @ts-ignore */}
        <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
      </div>
    </div>
  );
}
