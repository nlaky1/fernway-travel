"use client";

import React from "react";
import { Users, BedDouble, UserCheck, ShieldAlert, Award, HeartHandshake } from "lucide-react";

export default function TrustStrip() {
  const promises = [
    {
      icon: Users,
      title: "Women-Only Intimate Groups",
      desc: "Strictly 8 to 14 like-minded women per departure. Safe, relaxed, and never like a commercial tour bus.",
    },
    {
      icon: BedDouble,
      title: "Handpicked Premium Stays",
      desc: "Personally audited boutique eco-villas, heritage havelis & luxury retreats with dedicated safety ratings.",
    },
    {
      icon: UserCheck,
      title: "Woman Lead with You Always",
      desc: "Led on the ground by certified female trip managers who handle logistics, dining, and your comfort.",
    },
    {
      icon: ShieldAlert,
      title: "24x7 Verified Safety Net",
      desc: "Emergency SOS protocols, verified private sanitized transit, and real-time family check-ins.",
    },
  ];

  return (
    <section className="relative z-30 -mt-6 sm:-mt-8 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gold-500/30 bg-white/95 p-6 sm:p-8 shadow-xl backdrop-blur-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-gold-500/20">
          {promises.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-start gap-3 ${
                  idx > 0 ? "pt-5 sm:pt-0 lg:pl-6" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fern-50 text-fern-700 border border-gold-500/20 shadow-sm">
                  <Icon className="h-5 w-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-fern-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-fern-700/80 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-6 pt-5 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-4 text-xs text-fern-800">
          <div className="flex items-center gap-2">
            <span className="flex text-gold-500">★★★★★</span>
            <span className="font-semibold text-fern-900">4.98 / 5.0</span>
            <span className="text-fern-600">from 80+ sisterhood travelers across India</span>
          </div>
          <div className="flex items-center gap-4 text-fern-600">
            <span className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-gold-500" />
              <span>Certified Safety Standard</span>
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="h-3.5 w-3.5 text-gold-500" />
              <span>100% Female Owned & Led</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
