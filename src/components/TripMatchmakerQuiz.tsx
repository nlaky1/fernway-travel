"use client";

import React, { useState } from "react";
import { Sparkles, Download, CheckCircle2, MessageCircle, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

export default function TripMatchmakerQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    craving: "",
    pace: "",
    companion: "",
  });
  const [showResult, setShowResult] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSelect = (category: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [category]: value }));
    if (step < 2) {
      setStep(step + 1);
    } else {
      setShowResult(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#B8894A", "#1F4A3A", "#7E9A6B", "#FAF7F2"],
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({ craving: "", pace: "", companion: "" });
    setShowResult(false);
    setDownloadSuccess(false);
  };

  // Determine matched trip
  let matchedTrip = {
    name: "Meghalaya: The Living Mist & Sacred Cascades",
    dates: "April 18 – 23, 2026",
    price: "₹38,500",
    vibe: "Nature, Waterfalls & Ancient Living Bridges",
  };

  if (answers.craving === "heritage") {
    matchedTrip = {
      name: "Royal Rajasthan: Palaces, Dunes & Desert Glamour",
      dates: "November 12 – 18, 2026",
      price: "₹48,000",
      vibe: "Sandstone Havelis, Fort High Teas & Luxury Glamping",
    };
  } else if (answers.craving === "alpine") {
    matchedTrip = {
      name: "Kashmir Paradise: Shikaras, Saffron & Pine Glades",
      dates: "May 10 – 15, 2026",
      price: "₹42,500",
      vibe: "Heritage Houseboat, Floating Markets & Pine Meadows",
    };
  } else if (answers.craving === "tropical") {
    matchedTrip = {
      name: "Bali Sanctuary: Emerald Terraces & Bamboo Retreats",
      dates: "June 20 – 26, 2026",
      price: "₹68,000",
      vibe: "Private Pool Villas, Sound Healing & Uluwatu Sunsets",
    };
  }

  return (
    <section id="quiz" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-3xl bg-ivory-50 border border-gold-500/30 p-8 sm:p-12 shadow-xl cut-paper-2">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Interactive Matchmaker</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-fern-900">
              Which Fernway Journey Fits Your Soul?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-fern-700 font-light">
              Answer 3 quick questions to discover your ideal sisterhood destination and unlock the free 2026 Women's Safety & Packing Checklist.
            </p>
          </div>

          {!showResult ? (
            <div>
              {/* Progress Bar */}
              <div className="w-full bg-gold-500/10 h-1.5 rounded-full mb-8 overflow-hidden">
                <div
                  className="bg-gold-500 h-full transition-all duration-300"
                  style={{ width: `${((step + 1) / 3) * 100}%` }}
                />
              </div>

              {/* Step 1 */}
              {step === 0 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-medium text-fern-900 text-center mb-6">
                    1. What is your soul craving the most right now?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      {
                        key: "nature",
                        title: "Hidden Rainforests & Cascades",
                        desc: "Lush living root bridges, natural pools, and mist.",
                      },
                      {
                        key: "heritage",
                        title: "Desert Royalty & Sandstone Havelis",
                        desc: "Sunset dunes, palace teas, and starlit luxury tents.",
                      },
                      {
                        key: "alpine",
                        title: "Alpine Quiet & Shikara Lakes",
                        desc: "Floating dawn markets, cedar houseboats, and snow peaks.",
                      },
                      {
                        key: "tropical",
                        title: "Tropical Sanctuary & Deep Healing",
                        desc: "Emerald rice terraces, sound healing, and ocean breezes.",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => handleSelect("craving", opt.key)}
                        className="rounded-2xl border border-gold-500/20 bg-white p-5 text-left hover:border-gold-500 hover:shadow-md transition-all group"
                      >
                        <h4 className="font-serif text-base font-semibold text-fern-900 group-hover:text-gold-600 transition-colors">
                          {opt.title}
                        </h4>
                        <p className="text-xs text-fern-700 font-light mt-1">
                          {opt.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-medium text-fern-900 text-center mb-6">
                    2. What is your preferred travel rhythm?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      {
                        key: "relaxed",
                        title: "Slow & Luxurious",
                        desc: "Unhurried mornings, boutique cafes, spas, and scenic walks.",
                      },
                      {
                        key: "moderate",
                        title: "Curious & Balanced",
                        desc: "Morning exploration, scenic viewpoints, relaxing afternoons.",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => handleSelect("pace", opt.key)}
                        className="rounded-2xl border border-gold-500/20 bg-white p-5 text-left hover:border-gold-500 hover:shadow-md transition-all group"
                      >
                        <h4 className="font-serif text-base font-semibold text-fern-900 group-hover:text-gold-600 transition-colors">
                          {opt.title}
                        </h4>
                        <p className="text-xs text-fern-700 font-light mt-1">
                          {opt.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-medium text-fern-900 text-center mb-6">
                    3. How are you arriving?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      {
                        key: "solo_first",
                        title: "First-Time Solo Traveler",
                        desc: "A little nervous, but ready to claim my freedom.",
                      },
                      {
                        key: "solo_experienced",
                        title: "Experienced Wanderer",
                        desc: "Seeking luxury, safety, and a sisterhood to laugh with.",
                      },
                      {
                        key: "duo",
                        title: "Travelling with a Loved One",
                        desc: "Coming with my mother, daughter, sister, or best friend.",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => handleSelect("companion", opt.key)}
                        className="rounded-2xl border border-gold-500/20 bg-white p-5 text-left hover:border-gold-500 hover:shadow-md transition-all group"
                      >
                        <h4 className="font-serif text-base font-semibold text-fern-900 group-hover:text-gold-600 transition-colors">
                          {opt.title}
                        </h4>
                        <p className="text-xs text-fern-700 font-light mt-1">
                          {opt.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results View */
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-4 py-1 text-xs font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                <span>Your Travel Match Has Been Revealed</span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold block">
                  Recommended Journey For You
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-fern-900 mt-1">
                  {matchedTrip.name}
                </h3>
                <p className="text-xs text-fern-600 mt-1 font-light">
                  {matchedTrip.dates} • {matchedTrip.vibe}
                </p>
                <p className="font-serif text-2xl font-bold text-fern-900 mt-2">
                  {matchedTrip.price}
                </p>
              </div>

              {/* Free Lead Magnet Download Box */}
              <div className="rounded-2xl border border-gold-500/30 bg-white p-6 max-w-md mx-auto text-left shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 rounded-xl bg-gold-500/15 text-gold-600 items-center justify-center flex-shrink-0">
                    <Download className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-fern-900">
                      The 2026 Solo Woman Travel Safety & Packing Playbook
                    </h4>
                    <p className="text-xs text-fern-700 font-light mt-0.5">
                      Checklist curated by Pallavi: emergency contact templates, smart luggage guidelines, and room security essentials.
                    </p>
                  </div>
                </div>

                {!downloadSuccess ? (
                  <button
                    onClick={() => setDownloadSuccess(true)}
                    className="w-full mt-4 rounded-full bg-fern-800 py-2.5 text-xs font-semibold text-ivory-100 hover:bg-fern-900 transition-colors shadow-sm"
                  >
                    Download Free PDF Checklist Now
                  </button>
                ) : (
                  <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-300 p-2.5 text-center text-xs text-emerald-800 font-medium">
                    ✓ Download initialized! We also sent a copy to your device.
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <a
                  href={`https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20took%20the%20quiz%20and%20got%20matched%20with%20${encodeURIComponent(
                    matchedTrip.name
                  )}!%20Could%20we%20talk%20about%20availability%3F`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-emerald-700 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-emerald-800 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enquire About {matchedTrip.name.split(":")[0]}</span>
                </a>

                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-1.5 rounded-full border border-fern-800/30 px-5 py-3 text-xs sm:text-sm font-medium text-fern-800 hover:bg-white transition-all"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
