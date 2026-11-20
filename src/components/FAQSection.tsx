"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "I have never travelled solo before. Will I feel awkward or out of place?",
      a: "Not at all! Over 60% of women on every Fernway trip are first-time solo travelers. Our small cohorts (8 to 14 guests) and pre-trip WhatsApp circle ensure you already know everyone's names and vibes before boarding your flight. By the first evening, awkwardness dissolves into warm laughter.",
    },
    {
      q: "What is the typical age group of women on Fernway trips?",
      a: "Our community spans women from 24 to 65+! We have young corporate leaders, entrepreneurs, doctors, mothers whose children have left for university, and retirees. What unites us is a shared curiosity for the world, respect for personal space, and an appreciation for comfort and safety.",
    },
    {
      q: "How does room sharing work? Can I book a single private room?",
      a: "Our standard pricing is based on comfortable twin sharing with another wonderful woman from your group (matched thoughtfully by sleep habits and interests). If you prefer complete privacy, a Single Room Supplement is available upon request for any departure.",
    },
    {
      q: "Are vegetarian, Jain, or specific dietary restrictions accommodated?",
      a: "Yes, 100%! We collect your dietary preferences (pure vegetarian, Jain, vegan, gluten-sensitive, or non-vegetarian) during your pre-trip onboarding. All handpicked boutique restaurants and stays are instructed beforehand.",
    },
    {
      q: "How physically demanding are the walks and treks?",
      a: "Each trip page clearly states its fitness grade. Trips like Rajasthan, Kashmir, and Bali are Easy & Relaxed with gentle walks. Meghalaya features the Double Decker Living Root Bridge trek (approx. 3,000 stone steps down and up), which is done at an unhurried pace with plenty of resting stops.",
    },
    {
      q: "What is the booking and payment schedule?",
      a: "You secure your seat with a flat ₹10,000 deposit (via UPI, credit/debit card, or net banking with instant official receipt). The remaining balance is payable 30 days before the departure date. We also offer flexible 2-part split payments upon request.",
    },
    {
      q: "Can I bring my mother, sister, or best friend with me?",
      a: "Absolutely! Women traveling together as a duo (mother-daughter, sisters, or best friends) are warmly welcome. You will be automatically roomed together in a luxury twin room and receive our Sisterhood Duo credit.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-ivory-100 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-2">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Clear Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-fern-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-fern-700 font-light">
            Everything you need to know about joining our sisterhood journeys.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gold-500/20 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-fern-900">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full bg-ivory-100 text-gold-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-fern-800 font-light leading-relaxed border-t border-gold-500/10">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-fern-700 font-light">
            Still have a question we didn’t cover?
          </p>
          <a
            href="https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20have%20a%20question%20about%20Fernway%20trips."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-3 rounded-full bg-emerald-700 px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-emerald-800 transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat directly with Pallavi (+91 79999 19170)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
