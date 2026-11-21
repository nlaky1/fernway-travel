"use client";

import React, { useState, useEffect, useRef } from "react";
import BlowingPetalCanvas, { BlowingPetalCanvasHandle } from "./BlowingPetalCanvas";
import SoundscapePlayer from "./SoundscapePlayer";
import {
  Compass,
  MapPin,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Wind,
  CheckCircle2,
  Pause,
  Play,
} from "lucide-react";

interface LocationSlide {
  id: string;
  name: string;
  stateOrCountry: string;
  tagline: string;
  description: string;
  dates: string;
  price: string;
  deposit: string;
  seatsLeft: number;
  temperature: string;
  vibe: string;
  photoUrl: string;
  highlights: string[];
}

const LOCATION_SLIDES: LocationSlide[] = [
  {
    id: "meghalaya",
    name: "Meghalaya",
    stateOrCountry: "Northeast India",
    tagline: "The Living Mist & Sacred Cascades",
    description:
      "Trek through ancient rainforest canopies, stand beneath Nohkalikai Falls, and swim in the crystal-glass waters of the Umngot River.",
    dates: "April 18 – 23, 2026",
    price: "₹38,500",
    deposit: "₹10,000",
    seatsLeft: 4,
    temperature: "19°C • Misty Rainforest",
    vibe: "Rainforest canopy, double-decker living root bridges & glass riverboats",
    photoUrl: "https://images.unsplash.com/photo-1626014303757-6466336e4f3a?auto=format&fit=crop&w=1600&q=80",
    highlights: ["Double Decker Living Root Bridge", "Wei Sawdong 3-Tier Falls", "Dawki Transparent Waters", "Private Khasi Dinner"],
  },
  {
    id: "rajasthan",
    name: "Royal Rajasthan",
    stateOrCountry: "Western India",
    tagline: "Palaces, Golden Dunes & Desert Glamour",
    description:
      "Amber sandstone citadels, private palace rooftop dining, starlit luxury desert glamping at Sam Dunes, and folk music soirées.",
    dates: "November 12 – 18, 2026",
    price: "₹48,000",
    deposit: "₹12,000",
    seatsLeft: 5,
    temperature: "26°C • Golden Sunset",
    vibe: "Sandstone havelis, luxury desert glamping & private royal high tea",
    photoUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",
    highlights: ["Jaisalmer Fort Private Walk", "Sam Sand Dunes Royal Glamping", "Jodhpur Blue City Rooftops", "Campfire Kalbelia Dance"],
  },
  {
    id: "kashmir",
    name: "Kashmir Paradise",
    stateOrCountry: "Himalayas, India",
    tagline: "Shikaras, Saffron Valleys & Pine Serenity",
    description:
      "Dawn floating flower markets on Dal Lake, hand-carved cedarwood heritage houseboats, and alpine meadow horse trails in Pahalgam.",
    dates: "May 10 – 15, 2026",
    price: "₹42,500",
    deposit: "₹10,000",
    seatsLeft: 6,
    temperature: "15°C • Crisp Mountain Air",
    vibe: "Floating lake markets, cedar heritage houseboats & pine meadows",
    photoUrl: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80",
    highlights: ["Dal Lake Luxury Houseboat", "Pahalgam Betaab Valley Walk", "Pampore Saffron High Tea", "Sunset Shikara Cruise"],
  },
  {
    id: "bali",
    name: "Bali Sanctuary",
    stateOrCountry: "Indonesia",
    tagline: "Emerald Terraces, Bamboo Retreats & Ocean Soul",
    description:
      "Tegallalang terraced rice paddies, sound healing at the Pyramids of Chi, private pool eco-villas in Ubud, and Uluwatu clifftop sunsets.",
    dates: "June 20 – 26, 2026",
    price: "₹68,000",
    deposit: "₹15,000",
    seatsLeft: 3,
    temperature: "27°C • Tropical Sun",
    vibe: "Private pool villas, organic herbal spas & Indian Ocean dusk",
    photoUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
    highlights: ["Ubud Sacred Sanctuary", "Sound Bath at Pyramids of Chi", "Private Luxury Pool Villa", "Jimbaran Beach Dinner"],
  },
  {
    id: "vietnam",
    name: "Vietnam Heritage",
    stateOrCountry: "Southeast Asia",
    tagline: "Halong Karsts, Silk Lanterns & French Boutiques",
    description:
      "Overnight 5★ suite cruise among emerald karst towers in Halong Bay, and candlelit strolls through ancient Hoi An canal bridges.",
    dates: "September 08 – 14, 2026",
    price: "₹74,000",
    deposit: "₹15,000",
    seatsLeft: 5,
    temperature: "25°C • Lantern Glow",
    vibe: "Luxury Halong cruise suites & lantern-lit ancient canal walks",
    photoUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80",
    highlights: ["Halong Bay Luxury Suite Cruise", "Hoi An Silk Tailoring Walk", "Ba Na Hills Golden Bridge", "Hanoi Old Quarter"],
  },
];

export default function HeroBlowingPetalsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isBlowing, setIsBlowing] = useState(false);
  const petalCanvasRef = useRef<BlowingPetalCanvasHandle | null>(null);

  const currentSlide = LOCATION_SLIDES[currentIndex];
  const DWELL_TIME_MS = 6000;
  const INTERVAL_STEP = 50;

  // Trigger the blowing gust animation and advance slide
  const triggerKissBreeze = (targetIndex?: number) => {
    setIsBlowing(true);

    // Trigger physical petal and fern gust across full screen
    if (petalCanvasRef.current) {
      petalCanvasRef.current.triggerBlowGust();
    }

    setTimeout(() => {
      if (targetIndex !== undefined) {
        setCurrentIndex(targetIndex);
      } else {
        setCurrentIndex((prev) => (prev + 1) % LOCATION_SLIDES.length);
      }
      setProgress(0);
      setIsBlowing(false);
    }, 280);
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + LOCATION_SLIDES.length) % LOCATION_SLIDES.length;
    triggerKissBreeze(nextIdx);
  };

  const handleNext = () => {
    triggerKissBreeze();
  };

  // Auto-play interval with progress bar
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          triggerKissBreeze();
          return 0;
        }
        return prev + (INTERVAL_STEP / DWELL_TIME_MS) * 100;
      });
    }, INTERVAL_STEP);

    return () => clearInterval(timer);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section className="relative min-h-[94vh] lg:min-h-screen w-full overflow-hidden bg-ivory-100 text-fern-950 flex flex-col justify-between pt-36 pb-12 transition-colors duration-700">
      {/* 
        ========================================================================
        1. THE FULL BLEED BACKGROUND SLIDER (Lighter Theme Sun-Drenched Panoramas)
        ========================================================================
      */}
      <div className="absolute inset-0 z-0">
        {LOCATION_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            style={{ backgroundImage: `url(${slide.photoUrl})` }}
          >
            {/* Lighter Theme Warm Ivory Editorial Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/85 to-[#FAF7F2]/40 lg:via-[#FAF7F2]/80 lg:to-[#FAF7F2]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]/50" />
            <div className="absolute inset-0 bg-[#F6F1E7]/20 mix-blend-multiply" />
          </div>
        ))}
      </div>

      {/* 
        ========================================================================
        2. FULL-VIEWPORT 60FPS BOTANICAL PETAL & FERN CANVAS
        ========================================================================
      */}
      <BlowingPetalCanvas ref={petalCanvasRef} windIntensity={1.2} />

      {/* 
        ========================================================================
        3. HERO MAIN STAGE: Woman Blowing Petals (Left) + Editorial Content (Right)
        ========================================================================
      */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: The Woman Blowing Ferns & Petals */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative group">
              {/* Outer Golden Aura Glow */}
              <div
                className={`absolute -inset-3 rounded-full bg-gradient-to-tr from-gold-500/25 to-sage-400/25 blur-2xl transition-all duration-700 ${
                  isBlowing ? "opacity-100 scale-110" : "opacity-50 scale-100"
                }`}
              />

              {/* Luxury Archway Cameo with Gold Foil Rim */}
              <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 rounded-t-full rounded-b-3xl overflow-hidden border-2 border-gold-400/80 shadow-2xl cut-paper-3 bg-white/60 backdrop-blur-sm">
                <img
                  src="/brand/woman_blowing_petals.jpg"
                  alt="Woman gently blowing ferns and petals into the horizon"
                  className={`h-full w-full object-cover object-top transition-transform duration-700 ${
                    isBlowing ? "scale-105" : "group-hover:scale-102"
                  }`}
                />

                {/* Soft gradient bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/90 via-transparent to-transparent opacity-80" />

                {/* Interactive Breathing Palm Button */}
                <div className="absolute bottom-4 left-3 right-3 text-center">
                  <button
                    onClick={() => triggerKissBreeze()}
                    className="group/btn relative inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-xs font-semibold text-fern-950 shadow-md hover:bg-gold-400 active:scale-95 transition-all"
                  >
                    <Wind className="h-3.5 w-3.5 animate-spin text-fern-900" />
                    <span>Blow Petals &amp; Discover</span>
                    <span className="text-fern-950 font-bold">✦</span>
                  </button>
                </div>
              </div>

              {/* Reassuring Sisterhood Tag */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs text-fern-800 border border-gold-500/30 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-gold-500" />
                <span className="font-medium">Solo, Not Alone • Small Cohorts</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Headline & Floating Destination Pass (Light Luxury Theme) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top Category Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-fern-800 backdrop-blur-md shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
              <span>Women-Only Boutique Travel Collective</span>
              <span className="text-gold-500">✦</span>
              <span className="text-fern-600 font-normal">Max 14 Guests</span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-fern-950">
              Travel Freely. <br />
              <span className="italic font-light text-gold-600">Travel Safely.</span>{" "}
              Travel in Style.
            </h1>

            <p className="text-sm sm:text-base text-fern-800/90 font-light max-w-xl leading-relaxed">
              Thoughtfully curated journeys for women who’d rather not put their dreams on hold. 
              Handpicked boutique stays, certified female tour leaders, and small sisterhood cohorts of 8 to 14.
            </p>

            {/* FLOATING LOCATION BOARDING PASS (Lighter Pearl Glass Aesthetic) */}
            <div className="w-full max-w-xl rounded-2xl bg-white/90 backdrop-blur-xl border border-gold-500/30 p-5 sm:p-6 shadow-2xl cut-paper-2 text-fern-950">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gold-500/15 pb-3 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-700 font-semibold">
                  <MapPin className="h-3.5 w-3.5 text-gold-600" />
                  <span>{currentSlide.name}</span>
                  <span className="text-fern-300">•</span>
                  <span>{currentSlide.stateOrCountry}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-sage-100 text-sage-800 px-2.5 py-0.5 text-[11px] font-medium border border-sage-200">
                    {currentSlide.temperature}
                  </span>
                  <SoundscapePlayer destinationName={currentSlide.name} />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-fern-950">
                  {currentSlide.tagline}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-fern-700 font-light leading-relaxed">
                  {currentSlide.description}
                </p>
              </div>

              {/* Highlights tags */}
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {currentSlide.highlights.slice(0, 3).map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-full bg-ivory-100/90 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-fern-800 border border-gold-500/20"
                  >
                    <CheckCircle2 className="h-3 w-3 text-gold-600" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>

              {/* Pricing, Seats & CTAs */}
              <div className="mt-5 pt-4 border-t border-gold-500/15 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-fern-600 uppercase tracking-wider block font-medium">
                    All-Inclusive • {currentSlide.dates}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-bold text-fern-950">
                      {currentSlide.price}
                    </span>
                    <span className="rounded-full bg-gold-100 text-gold-800 px-2.5 py-0.5 text-[10px] font-semibold border border-gold-300">
                      Only {currentSlide.seatsLeft} seats left
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20saw%20the%20${encodeURIComponent(
                      currentSlide.name
                    )}%20journey%20on%20the%20website%20and%20would%20love%20to%20reserve%20a%20seat!`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-emerald-800 transition-all hover:scale-105"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Reserve via WhatsApp</span>
                  </a>

                  <a
                    href="#trips"
                    className="inline-flex items-center justify-center rounded-full border border-fern-800/20 bg-white px-4 py-2.5 text-xs font-medium text-fern-900 hover:bg-fern-800 hover:text-white transition-all shadow-sm"
                  >
                    <span>Itinerary</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        4. BOTTOM DESTINATION SELECTOR BAR & AUTOPLAY PROGRESS (Light Theme)
        ========================================================================
      */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gold-500/20 pt-4">
          {/* Destination Navigator Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {LOCATION_SLIDES.map((dest, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={dest.id}
                  onClick={() => triggerKissBreeze(idx)}
                  className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-fern-800 text-ivory-100 font-semibold shadow-md ring-2 ring-gold-500 scale-105"
                      : "bg-white/85 text-fern-800 hover:bg-white hover:text-gold-600 border border-gold-500/20 shadow-sm"
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isActive ? "text-gold-400" : "text-fern-500"}`}>
                    0{idx + 1}
                  </span>
                  <span>{dest.name}</span>
                </button>
              );
            })}
          </div>

          {/* Autoplay status & Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-1.5 text-[11px] text-fern-700 hover:text-fern-900 bg-white/80 px-3 py-1 rounded-full border border-gold-500/20 shadow-sm"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="h-3 w-3 text-gold-600" />
                  <span>Auto-Playing (6s)</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3 text-gold-600" />
                  <span>Paused</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="h-8 w-8 rounded-full bg-white/80 text-fern-800 hover:bg-gold-500 hover:text-fern-950 flex items-center justify-center border border-gold-500/20 transition-all shadow-sm"
                aria-label="Previous destination"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="h-8 w-8 rounded-full bg-white/80 text-fern-800 hover:bg-gold-500 hover:text-fern-950 flex items-center justify-center border border-gold-500/20 transition-all shadow-sm"
                aria-label="Next destination"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Progress Bar Spanning Full Screen Bottom */}
        <div className="mt-3 w-full bg-gold-500/15 h-1 rounded-full overflow-hidden">
          <div
            className="bg-gold-500 h-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
