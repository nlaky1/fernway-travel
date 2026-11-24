"use client";

import React from "react";
import { Star, MapPin, Sparkles } from "lucide-react";

export default function TravellerStories() {
  const stories = [
    {
      name: "Rhea Kapur",
      age: 34,
      role: "Senior Product Manager, Bengaluru",
      persona: "The Postponer",
      trip: "Meghalaya: Living Bridges",
      quote:
        "My husband is not fond of trekking, and my college friends’ calendars never aligned. I had waited four years for Meghalaya. With Fernway, I didn't have to wait anymore. By day 2, we were swimming in crystalline spring waters like we were 16 again.",
      rating: 5,
      image: "/real-travelers/sunglasses_nature_trek.webp",
    },
    {
      name: "Ananya Deshmukh",
      age: 27,
      role: "Architect, Mumbai",
      persona: "The First-Timer Solo",
      trip: "Kashmir Paradise: Shikaras & Meadows",
      quote:
        "My parents were so worried about me travelling to Kashmir alone. Pallavi got on a video call with my mom and walked her through the whole security plan. The houseboat was pure royal luxury, and the women on this trip are now my closest friends in Bombay.",
      rating: 5,
      image: "/real-travelers/kashmir_tulip_sisters.webp",
    },
    {
      name: "Dr. Sunita Sen",
      age: 52,
      role: "Pediatrician, New Delhi",
      persona: "The Free Spirit",
      trip: "Royal Rajasthan: Jaisalmer Glamping",
      quote:
        "Both my daughters have graduated from college, and I decided this decade belongs to me. I wanted comfort and dignity — not backpacker hostels. Fernway's boutique haveli and luxury desert camp exceeded every expectation. Pure joy and zero stress.",
      rating: 5,
      image: "/real-travelers/resort_terrace_view.webp",
    },
    {
      name: "Meera Nair",
      age: 39,
      role: "Creative Director, Pune",
      persona: "The Celebrator",
      trip: "Bali Sanctuary: Ubud Retreat",
      quote:
        "I booked this trip as a celebration of starting my own studio. The sound healing session at Pyramids of Chi and the private pool villa in Ubud gave me the exact spiritual rejuvenation I needed. Cannot wait for Vietnam with Fernway!",
      rating: 5,
      image: "/real-travelers/luxury_gala_night.webp",
    },
  ];

  return (
    <section id="stories" className="py-24 bg-ivory-100 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-2">
            <span>✦ The Sisterhood Wall ✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-fern-900">
            Voices of Women Who Wandered
          </h2>
          <p className="mt-3 text-sm sm:text-base text-fern-700 font-light">
            Real stories from women who stopped waiting for 'someday' and found their tribe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((s, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-gold-500/25 bg-white p-7 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between cut-paper-1"
            >
              <div>
                {/* Top Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(s.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="rounded-full bg-gold-50 px-3 py-1 text-[11px] font-medium text-gold-700 border border-gold-200">
                    {s.persona}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-serif text-base sm:text-lg italic text-fern-900 leading-relaxed font-normal">
                  "{s.quote}"
                </p>

                <div className="mt-4 flex items-center gap-1 text-xs text-gold-600 font-medium">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Traveled on: {s.trip}</span>
                </div>
              </div>

              {/* Author Strip */}
              <div className="mt-6 pt-5 border-t border-gold-500/15 flex items-center gap-3.5">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-gold-400 shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-base font-semibold text-fern-900">
                    {s.name}, {s.age}
                  </h4>
                  <p className="text-[11px] text-fern-600 font-light">{s.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Gallery Teaser */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-fern-800">
            <Sparkles className="h-3.5 w-3.5 text-gold-500" />
            <span>Follow our real-time trip diaries on Instagram:</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-gold-600 hover:text-fern-900 underline underline-offset-4"
            >
              @fernwaywomen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
