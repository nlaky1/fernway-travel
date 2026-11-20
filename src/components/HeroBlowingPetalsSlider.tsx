"use client";

import React, { useState, useEffect, useRef } from "react";
import BlowingPetalCanvas, { BlowingPetalCanvasHandle } from "./BlowingPetalCanvas";
import SoundscapePlayer from "./SoundscapePlayer";
import {
  Compass,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Wind,
  CheckCircle2,
  Pause,
  Play,
  HeartHandshake,
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
  accentColor: string;
  bgGradient: string;
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
    accentColor: "#36765B",
    bgGradient: "from-[#0F261D]/90 via-[#18392C]/85 to-[#244E3D]/70",
    photoUrl: "https://images.unsplash.com/photo-1626014303757-6466336e4f3a?auto=format&fit=crop&w=1200&q=80",
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
    accentColor: "#B8894A",
    bgGradient: "from-[#2A180E]/90 via-[#4A2914]/85 to-[#733F1B]/70",
    photoUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
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
    accentColor: "#4A6E82",
    bgGradient: "from-[#0E1E28]/90 via-[#1C3343]/85 to-[#2B4B60]/70",
    photoUrl: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
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
    accentColor: "#5C8C67",
    bgGradient: "from-[#0D2418]/90 via-[#1A3827]/85 to-[#2A543C]/70",
    photoUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
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
    accentColor: "#C16B45",
    bgGradient: "from-[#1B1A28]/90 via-[#2E283F]/85 to-[#4B3C53]/70",
    photoUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
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

  // Trigger the blowing gust animation
  const triggerKissBreeze = (targetIndex?: number) => {
    setIsBlowing(true);

    // Trigger physical petal and fern gust from woman's hand coordinates
    if (petalCanvasRef.current) {
      petalCanvasRef.current.triggerBlowGust();
    }

    // Advance to next or target slide
    setTimeout(() => {
      if (targetIndex !== undefined) {
        setCurrentIndex(targetIndex);
      } else {
        setCurrentIndex((prev) => (prev + 1) % LOCATION_SLIDES.length);
      }
      setProgress(0);
      setIsBlowing(false);
    }, 320);
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
    <section className="relative min-h-[96vh] w-full overflow-hidden bg-ivory-100 pt-28 pb-14 transition-colors duration-700">
      {/* Dynamic 60fps Petal & Fern Particle Engine with Hand-Burst Capability */}
      <BlowingPetalCanvas ref={petalCanvasRef} windIntensity={1.1} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        {/* Top Header Badge & Tagline */}
        <div className="mx-auto max-w-3xl text-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md mb-3.5">
            <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fern-800">
              Women-Only Boutique Travel Collective
            </span>
            <span className="text-gold-500">✦</span>
            <span className="text-[11px] font-medium text-fern-600">Solo, Not Alone</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-fern-900">
            Blow a Kiss to the Horizon. <br className="hidden sm:inline" />
            <span className="italic font-light text-gold-500">Wander Freely.</span> In Style.
          </h1>

          <p className="mt-3.5 text-base sm:text-lg text-fern-700/90 font-light max-w-2xl mx-auto leading-relaxed">
            Curated journeys for women who’d rather not put their dreams on hold. 
            Handpicked boutique stays, certified woman tour leads, and small sisterhood cohorts of 8 to 14.
          </p>
        </div>

        {/* Destination Pill Navigator */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {LOCATION_SLIDES.map((dest, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={dest.id}
                onClick={() => triggerKissBreeze(idx)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-fern-800 text-ivory-100 shadow-md shadow-fern-900/25 ring-2 ring-gold-500/50 scale-105"
                    : "bg-white/80 text-fern-800 hover:bg-white hover:text-gold-600 border border-gold-500/20"
                }`}
              >
                <span>{dest.name}</span>
                {isActive && (
                  <span className="rounded-full bg-gold-500 px-1.5 py-0.5 text-[10px] font-semibold text-fern-900">
                    {dest.seatsLeft} spots
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* MAIN CINEMATIC HERO STAGE */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl cut-paper-3 bg-fern-950"
        >
          {/* Background Location Photo & Cut-Paper Shifting Layer */}
          <div className="relative h-[580px] sm:h-[640px] w-full overflow-hidden">
            {/* Smooth Dissolve Backgrounds */}
            {LOCATION_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                  idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
                style={{ backgroundImage: `url(${slide.photoUrl})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              </div>
            ))}

            {/* TOP BAR OVERLAY: Location Pill + Soundscape + Autoplay Toggle */}
            <div className="absolute top-6 left-6 right-6 z-30 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-ivory-100 border border-gold-500/30">
                  <MapPin className="h-3.5 w-3.5 text-gold-400" />
                  <span>{currentSlide.name}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-gold-300 font-light">{currentSlide.stateOrCountry}</span>
                </div>
                <div className="hidden sm:block">
                  <SoundscapePlayer destinationName={currentSlide.name} />
                </div>
              </div>

              {/* Progress & Pause Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-gold-300 hover:text-white backdrop-blur-md border border-gold-500/30 transition-colors"
                >
                  {isAutoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                </button>
                <div className="hidden md:flex items-center gap-1.5 text-xs text-ivory-200 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{currentSlide.temperature}</span>
                </div>
              </div>
            </div>

            {/* THE WOMAN BLOWING PETALS & FERNS (EDITORIAL HERO CENTERPIECE) */}
            <div className="absolute inset-0 z-20 flex items-center justify-between pointer-events-none px-4 sm:px-12">
              {/* Left Side: The Graceful Woman with Petals & Ferns on Her Palm */}
              <div className="relative pointer-events-auto max-w-sm sm:max-w-md mt-auto pb-6 sm:pb-12">
                {/* Visual Card of the Woman Blowing Petals */}
                <div className="relative group">
                  {/* Subtle Aura Halo */}
                  <div
                    className={`absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold-500/20 to-fern-500/20 blur-xl transition-opacity duration-700 ${
                      isBlowing ? "opacity-100 scale-105" : "opacity-50"
                    }`}
                  />

                  {/* Cutout Portrait Container */}
                  <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/50 shadow-2xl cut-paper-2 bg-fern-900/40 backdrop-blur-sm">
                    <img
                      src="/brand/woman_blowing_petals.jpg"
                      alt="Woman blowing delicate fern fronds and petals into the breeze"
                      className={`h-72 sm:h-96 w-full object-cover object-top transition-transform duration-700 ${
                        isBlowing ? "scale-105" : "group-hover:scale-102"
                      }`}
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-fern-950 via-transparent to-transparent opacity-90" />

                    {/* Floating Palm Interaction Hint */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <button
                        onClick={() => triggerKissBreeze()}
                        className="group/btn relative inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-xs font-semibold text-fern-950 shadow-lg hover:bg-gold-400 active:scale-95 transition-all"
                      >
                        <Wind className="h-3.5 w-3.5 animate-spin" />
                        <span>Blow Petals & Change Horizon</span>
                        <span className="text-fern-900 font-bold">✦</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: The Destination Story & Horizon Details Card */}
              <div className="relative pointer-events-auto max-w-md lg:max-w-lg text-ivory-100 bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gold-500/30 shadow-2xl ml-auto mt-16 sm:mt-0">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-400 mb-2">
                  <Compass className="h-3.5 w-3.5" />
                  <span>HORIZON {currentIndex + 1} OF {LOCATION_SLIDES.length}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                  {currentSlide.name}
                </h2>
                <p className="font-serif italic text-sm sm:text-base text-gold-300 mt-1">
                  "{currentSlide.tagline}"
                </p>

                <p className="mt-3.5 text-xs sm:text-sm text-ivory-200/90 leading-relaxed font-light">
                  {currentSlide.description}
                </p>

                {/* Highlights tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentSlide.highlights.slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-ivory-200 border border-white/10"
                    >
                      <CheckCircle2 className="h-3 w-3 text-gold-400" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>

                {/* Pricing & Booking Row */}
                <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-ivory-300 uppercase tracking-wider block">
                      All-Inclusive Package
                    </span>
                    <span className="font-serif text-2xl font-bold text-gold-400">
                      {currentSlide.price}
                    </span>
                    <span className="text-[11px] text-ivory-300 ml-1.5 font-light">
                      ({currentSlide.dates})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20saw%20the%20${encodeURIComponent(
                        currentSlide.name
                      )}%20journey%20on%20the%20website%20and%20would%20love%20to%20reserve%20a%20seat!`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-emerald-500 transition-all hover:scale-105"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Reserve Seat</span>
                    </a>

                    <a
                      href="#trips"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/20 text-white hover:bg-gold-500 hover:text-fern-900 transition-colors"
                      title="View Full Day-by-Day Itinerary"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Navigation Chevrons */}
            <div className="absolute inset-y-0 left-3 sm:left-4 z-30 flex items-center pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto h-11 w-11 rounded-full bg-black/50 text-white hover:bg-gold-500 hover:text-fern-900 backdrop-blur-md border border-gold-500/30 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Previous destination"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-3 sm:right-4 z-30 flex items-center pointer-events-none">
              <button
                onClick={handleNext}
                className="pointer-events-auto h-11 w-11 rounded-full bg-black/50 text-white hover:bg-gold-500 hover:text-fern-900 backdrop-blur-md border border-gold-500/30 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Next destination"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dwell Progress Bar at Bottom of Slider */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 z-30">
              <div
                className="h-full bg-gold-500 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-fern-800 border-t border-gold-500/20 pt-4">
          <div className="flex items-center gap-2">
            <span className="flex text-gold-500">★★★★★</span>
            <span className="font-semibold text-fern-900">4.98 / 5.0</span>
            <span className="text-fern-600">from 80+ solo women travelers across India</span>
          </div>

          <div className="flex items-center gap-4 text-fern-700">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-gold-500" />
              <span>Max 14 Guests per Cohort</span>
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="h-3.5 w-3.5 text-gold-500" />
              <span>100% Female Founded & Led</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
