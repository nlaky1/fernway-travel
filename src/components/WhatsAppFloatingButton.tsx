"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-2xl border border-gold-500/30 text-xs text-fern-900 animate-fade-in backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-medium">
            Have questions? <strong className="text-emerald-800 font-bold">Chat with Pallavi</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-fern-400 hover:text-fern-700 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/917999919170?text=Hi%20Fernway%2C%20I%27d%20love%20to%20know%20about%20your%20upcoming%20trips"
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-900/30 transition-all duration-300 hover:scale-110 hover:bg-emerald-500 active:scale-95 ring-4 ring-emerald-600/30"
        aria-label="Chat with Fernway on WhatsApp"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping" />

        <MessageCircle className="h-7 w-7 text-white transition-transform group-hover:rotate-12" />
      </a>
    </div>
  );
}
