"use client";

import React, { useState } from "react";
import { Compass, Sparkles, HeartHandshake, Leaf, ArrowRight } from "lucide-react";

export default function BrandPillars() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "explore",
      title: "EXPLORE",
      subtitle: "Uncurated Natural Wonders & Hidden Corners",
      icon: Compass,
      quote: "Travelling is not just about visiting beautiful places; it's about feeling alive in the world.",
      description:
        "We sidestep crowded commercial tourist tracks in favour of secret waterfalls in Meghalaya, dawn shikara boat rides on quiet Dal Lake channels, and private dining in sandstone havelis. Each itinerary is balanced: thrilling discovery in the morning, unhurried leisure in the afternoon.",
      points: [
        "Hidden trails vetted for ease and scenic glory",
        "Local female storytellers & indigenous guides",
        "Golden-hour photography spots with nobody else around",
      ],
      bgGradient: "from-fern-900 to-fern-800",
      accent: "text-gold-400",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "travel",
      title: "TRAVEL",
      subtitle: "Effortless Comfort & Thoughtful Little Luxuries",
      icon: Sparkles,
      quote: "Enjoying a holiday means feeling pampered, secure, and completely relaxed.",
      description:
        "No luggage wrestling, no negotiating taxi rates, no checking hotel door locks twice. From private air-conditioned transport with verified drivers to handpicked 4★ & 5★ boutique heritage stays, every little logistical detail is solved before you even land.",
      points: [
        "Boutique hotels personally slept in and inspected by Pallavi",
        "Spacious private vehicles with verified courteous chauffeurs",
        "Curated regional tasting menus with dietary preferences respected",
      ],
      bgGradient: "from-gold-900 to-gold-800",
      accent: "text-gold-300",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "connect",
      title: "CONNECT",
      subtitle: "Strangers on Day 1. Travel Sisters for Life.",
      icon: HeartHandshake,
      quote: "When I say solo travel, I mean travelling with like-minded women while enjoying the freedom to be yourself.",
      description:
        "Whether you are in your 20s or your 60s, a doctor, artist, entrepreneur, or homemaker, something magical happens when women travel together. By Day 2, awkwardness dissolves into uncontrollable laughter over midnight chai and shared sunsets.",
      points: [
        "Private WhatsApp Sisterhood Circle 14 days before flying",
        "Equal mix of first-time solo travelers and experienced wanderers",
        "Zero judgment, zero pretense — just warmth and sisterhood",
      ],
      bgGradient: "from-fern-950 to-fern-900",
      accent: "text-emerald-400",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "grow",
      title: "GROW",
      subtitle: "Spreading Your Wings & Living on Your Own Terms",
      icon: Leaf,
      quote: "Inspired by a fresh new leaf reaching towards the sky — symbolising every woman who wants to fly high.",
      description:
        "Step away from your everyday titles, deadlines, family duties, and compromises. Discover how capable, joyful, and adventurous you feel when you give yourself permission to explore the world on your terms.",
      points: [
        "Reclaim your independence and travel confidence",
        "Come home revitalised with stories your friends will envy",
        "Lifelong friends you can plan your next five trips with",
      ],
      bgGradient: "from-sage-700 to-fern-900",
      accent: "text-sage-300",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const current = pillars[activeTab];
  const Icon = current.icon;

  return (
    <section id="pillars" className="py-24 bg-ivory-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-2">
            <span>✦ The Fernway Philosophy ✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-fern-900">
            Four Pillars of Every Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-fern-700 font-light">
            Crafted from the symbols embedded in our brand emblem, these four ideals define every itinerary we curate.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {pillars.map((p, idx) => {
            const TabIcon = p.icon;
            const isActive = idx === activeTab;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 rounded-full px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-fern-800 text-ivory-100 shadow-lg shadow-fern-900/30 scale-105 border border-gold-500/50"
                    : "bg-white text-fern-800 hover:bg-ivory-50 border border-gold-500/20"
                }`}
              >
                <TabIcon className={`h-4 w-4 ${isActive ? "text-gold-400" : "text-fern-600"}`} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Pillar Showcase Card */}
        <div className="rounded-3xl border border-gold-500/30 bg-white overflow-hidden shadow-2xl cut-paper-2 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Visual Story & Quote */}
          <div
            className={`lg:col-span-5 relative min-h-[380px] lg:min-h-[460px] bg-cover bg-center p-8 flex flex-col justify-between text-white overflow-hidden`}
            style={{ backgroundImage: `url(${current.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

            {/* Top Badge */}
            <div className="relative z-10 inline-flex items-center gap-2 self-start rounded-full bg-black/50 backdrop-blur-md px-3.5 py-1 text-xs font-mono text-gold-300 border border-gold-500/30">
              <Icon className="h-3.5 w-3.5" />
              <span>PILLAR {activeTab + 1} OF 4</span>
            </div>

            {/* Bottom Emotional Quote */}
            <div className="relative z-10">
              <p className="font-serif italic text-lg sm:text-xl text-ivory-100 leading-snug">
                "{current.quote}"
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-gold-300 font-semibold">
                — Pallavi Vyas, Founder
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Checklist */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-ivory-50">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600">
                <span>{current.title}</span>
                <span>•</span>
                <span>The Sisterhood Standard</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-fern-900 mt-2">
                {current.subtitle}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-fern-800 leading-relaxed font-light">
                {current.description}
              </p>

              <div className="mt-6 space-y-3">
                {current.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-fern-900">
                    <div className="flex h-5 w-5 rounded-full bg-gold-500/15 text-gold-600 items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-fern-600 italic">
                Experience this on all upcoming 2026 departures.
              </span>
              <a
                href="#trips"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-fern-800 hover:text-gold-600 group transition-colors"
              >
                <span>View Departures</span>
                <ArrowRight className="h-4 w-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
