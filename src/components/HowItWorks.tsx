"use client";

import React from "react";
import { Compass, PhoneCall, CreditCard, Users, Plane, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Compass,
      title: "Choose Your Vibe",
      desc: "Browse our handpicked journeys across Meghalaya, Rajasthan, Kashmir, or Bali. Pick the season and pace that speaks to your soul.",
    },
    {
      num: "02",
      icon: PhoneCall,
      title: "15-Min Chat with Pallavi",
      desc: "Connect on WhatsApp (+91 79999 19170) or a call to clarify safety, dietary preferences, room arrangements, and group demographics.",
    },
    {
      num: "03",
      icon: CreditCard,
      title: "Lock In Your Seat",
      desc: "Pay a simple ₹10,000 deposit via UPI, net banking, or card. Receive instant confirmation and our comprehensive packing playbook.",
    },
    {
      num: "04",
      icon: Users,
      title: "Pre-Trip Sisterhood Circle",
      desc: "14 days before flying, join the private WhatsApp group. Coordinate flight timings, introduce yourself, and break the ice.",
    },
    {
      num: "05",
      icon: Plane,
      title: "Arrive & Wander Freely",
      desc: "Land at the destination airport where your woman trip lead and private chauffeur greet you. We handle every detail from there.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-2">
            <span>✦ Seamless & Stress-Free ✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-fern-900">
            How It Works in 5 Easy Steps
          </h2>
          <p className="mt-3 text-sm sm:text-base text-fern-700 font-light">
            From the moment you browse to the moment you step into the mountains, we make everything effortless.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-gold-500/20 bg-ivory-50 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-light text-gold-500">
                      {s.num}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-fern-800 text-gold-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-fern-900 mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs text-fern-700 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gold-500/10 text-[10px] text-fern-500 font-mono uppercase tracking-wider">
                  Step {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#trips"
            className="inline-flex items-center gap-2 rounded-full bg-fern-800 px-7 py-3 text-xs sm:text-sm font-semibold text-ivory-100 shadow-md hover:bg-fern-900 transition-all group"
          >
            <span>Start with Step 1: Browse Departures</span>
            <ArrowRight className="h-4 w-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
