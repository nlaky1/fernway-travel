"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  PhoneCall,
  UserCheck,
  Car,
  EyeOff,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function SafetyCharter() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const protocols = [
    {
      icon: ShieldCheck,
      title: "1. Rigorous 28-Point Hotel Safety Audit",
      short: "Personally vetted boutique properties with female-friendly amenities.",
      details:
        "Every hotel, homestay, and heritage haveli on our itinerary is personally inspected before any guest arrives. We verify solid internal door locks, well-lit corridors, 24x7 security personnel, female front-desk representation, and proximity to verified medical facilities. We never book unverified aggregators.",
    },
    {
      icon: UserCheck,
      title: "2. Certified Female Tour Leaders On-Site 24/7",
      short: "An experienced, culturally sensitive woman leader travels with your group.",
      details:
        "From the moment you touch down at the arrival airport until your departure flight home, your dedicated Fernway Tour Lead is physically with the cohort. She manages group dynamics, dietary needs, local negotiations, and is trained in First Aid and emergency response.",
    },
    {
      icon: PhoneCall,
      title: "3. 24x7 Real-Time Emergency SOS Line & Family Check-Ins",
      short: "Dedicated back-office emergency dispatcher and family updates.",
      details:
        "We maintain an active 24x7 operations back-office. If your family wishes, we share a daily morning and evening safety check-in on a private family WhatsApp broadcast, so parents or partners back home enjoy complete peace of mind while you wander freely.",
    },
    {
      icon: Car,
      title: "4. Private Sanitised Vehicles & Verified Chauffeurs",
      short: "Zero shared public shuttles or unvetted taxi stands.",
      details:
        "All intercity and local travel takes place in private, well-maintained vehicles (such as Toyota Innova Crysta or luxury tempo travellers). Every driver undergoes rigorous background verification, is instructed in courteous female traveler protocol, and is instructed in safe speed limits.",
    },
    {
      icon: Lock,
      title: "5. Private Sisterhood Circle 14 Days Prior",
      short: "Get to know your fellow travellers before packing a single bag.",
      details:
        "Two weeks prior to flying, we onboard all confirmed guests into an exclusive, curated WhatsApp group. You'll meet your trip lead and sisterhood companions, coordinate flight arrival times, discuss packing tips, and break the ice.",
    },
    {
      icon: EyeOff,
      title: "6. Strict Photo & Digital Privacy Protection",
      short: "You control whether your face appears on social media.",
      details:
        "We take privacy seriously. While our trip leads capture candid memories for the private cohort album, no photo or video containing your recognisable face is ever published to Instagram or marketing materials without your explicit written consent.",
    },
  ];

  return (
    <section id="safety" className="py-24 bg-fern-900 text-ivory-100 relative overflow-hidden">
      {/* Decorative Gold Leaf Flourish */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-sage-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-fern-800/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 backdrop-blur-sm mb-3">
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            <span>The Fernway Guarantee</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ivory-100">
            Zero-Compromise Safety Charter
          </h2>

          <p className="mt-4 text-sm sm:text-base text-ivory-200/90 font-light leading-relaxed">
            Safety isn't an afterthought or a marketing buzzword for us — it is the very foundation
            upon which Fernway was created. Here is our six-point sacred promise to you and your family.
          </p>
        </div>

        {/* Safety Protocol Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {protocols.map((p, idx) => {
            const Icon = p.icon;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-gold-500/20 bg-fern-800/60 overflow-hidden backdrop-blur-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-fern-700 text-gold-400 border border-gold-500/30 flex-shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-ivory-100">
                        {p.title}
                      </h3>
                      <p className="text-xs text-gold-300/80 mt-0.5 font-light">{p.short}</p>
                    </div>
                  </div>

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-fern-700 text-gold-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gold-500/10 text-xs sm:text-sm text-ivory-200 font-light leading-relaxed">
                    <p>{p.details}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassuring Callout */}
        <div className="mt-14 max-w-xl mx-auto text-center rounded-2xl bg-fern-800/90 border border-gold-500/30 p-6">
          <Sparkles className="h-5 w-5 text-gold-400 mx-auto mb-2" />
          <h4 className="font-serif text-lg text-ivory-100 font-medium">
            Have specific questions or anxiety about travelling solo?
          </h4>
          <p className="mt-1.5 text-xs text-ivory-200 font-light">
            Pallavi personally speaks to every single traveller before confirming their seat.
            Schedule a relaxed 15-minute introductory call.
          </p>
          <a
            href="https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20have%20a%20few%20safety%20questions%20before%20joining%20a%20trip."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 rounded-full bg-gold-500 px-6 py-2.5 text-xs font-semibold text-fern-950 shadow-md hover:bg-gold-400 transition-all"
          >
            <span>Talk with Pallavi (+91 79999 19170)</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
