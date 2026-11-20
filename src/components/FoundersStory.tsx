"use client";

import React from "react";
import { MessageCircle, Sparkles, Compass } from "lucide-react";

export default function FoundersStory() {
  return (
    <section id="story" className="py-24 bg-ivory-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl bg-white border border-gold-500/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 cut-paper-2">
          {/* Left Column: Portrait & Visual Emblem */}
          <div className="lg:col-span-5 relative min-h-[460px] bg-fern-900 flex flex-col justify-between p-8 text-ivory-100 overflow-hidden">
            {/* Background Founder Image / Scenic Backdrop */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-fern-950 via-fern-900/60 to-fern-950/40" />
            </div>

            {/* Top Badge */}
            <div className="relative z-10 self-start rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-mono text-gold-300 border border-gold-500/30 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              <span>THE FOUNDER'S VISION</span>
            </div>

            {/* Bottom Founder Note Card */}
            <div className="relative z-10 rounded-2xl bg-black/60 backdrop-blur-md p-5 border border-gold-500/30 text-white">
              <p className="font-serif italic text-base text-gold-200">
                "Women shouldn't have to put their travel dreams on hold just because they couldn't find the right company."
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-xs">
                <div>
                  <h4 className="font-serif text-lg font-medium text-ivory-100">
                    Pallavi Vyas
                  </h4>
                  <p className="text-[11px] text-gold-400">Founder, Fernway</p>
                </div>
                <div className="font-script text-2xl text-gold-300">Pallavi</div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Personal Letter */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-ivory-50">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                <Compass className="h-3.5 w-3.5" />
                <span>The Story Behind the Brand</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-fern-900 leading-tight">
                Why I Created Fernway
              </h2>

              <div className="space-y-3.5 text-xs sm:text-sm text-fern-800 font-light leading-relaxed">
                <p>
                  Honestly, Fernway started with a thought that had lived in my mind for a very long time.
                  I have always loved travelling. For me, it has never been just about visiting postcard sights;
                  it is about experiencing life, discovering diverse cultures, and taking a soulful pause from our everyday routines.
                </p>

                <p>
                  Over the years, I met so many brilliant women who shared this exact wanderlust, but somehow
                  never got around to taking those trips. Some didn’t have friends whose schedules matched.
                  Some had natural concerns about safety. And some were simply exhausted by having to manage everyone
                  else's comfort and logistics.
                </p>

                <div className="rounded-xl border-l-4 border-gold-500 bg-white p-4 text-fern-900 italic font-serif text-sm sm:text-base my-2 shadow-sm">
                  "The name <strong>Fernway</strong> was inspired by the imagery of a fresh new leaf reaching towards the sky.
                  It represents growth, freedom, and the desire to fly high — symbolising every woman who wants to spread her wings and live life on her own terms."
                </div>

                <p>
                  When I say <em>solo travel</em>, I don’t mean travelling in isolation. I mean travelling
                  with like-minded women while enjoying the freedom to be yourself, completely detached from your
                  everyday titles, duties, and compromises.
                </p>

                <p>
                  I don't want Fernway to be another faceless tour company. I want it to be a community where
                  strangers become friends, friends become lifelong travel buddies, and every journey becomes a treasured memory.
                </p>
              </div>
            </div>

            {/* Bottom Actions & Signoff */}
            <div className="mt-8 pt-6 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="font-script text-3xl text-gold-600 font-bold">
                  With love, Pallavi
                </div>
              </div>

              <a
                href="https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20just%20read%20your%20story%20on%20the%20Fernway%20website%20and%20would%20love%20to%20say%20hello!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-fern-800 px-5 py-2.5 text-xs font-semibold text-ivory-100 shadow-md hover:bg-fern-900 transition-all"
              >
                <MessageCircle className="h-4 w-4 text-gold-400" />
                <span>Say Hello on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
