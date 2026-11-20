"use client";

import React, { useState, useRef } from "react";
import PetalCanvas from "./PetalCanvas";
import SoundscapePlayer from "./SoundscapePlayer";
import {
  Compass,
  ShieldCheck,
  Camera,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Wind,
  CheckCircle2,
} from "lucide-react";

interface Destination {
  id: string;
  name: string;
  stateOrCountry: string;
  tagline: string;
  dates: string;
  price: string;
  seatsLeft: number;
  temperature: string;
  vibe: string;
  colorTheme: {
    accent: string;
    bgGradient: string;
    sunColor: string;
  };
  highlights: string[];
  inclusions: string;
  photoUrl: string;
}

const DESTINATIONS: Destination[] = [
  {
    id: "meghalaya",
    name: "Meghalaya",
    stateOrCountry: "Northeast India",
    tagline: "The Living Mist & Sacred Cascades",
    dates: "April 18 – 23, 2026",
    price: "₹38,500",
    seatsLeft: 4,
    temperature: "19°C • Misty Morning",
    vibe: "Rainforest canopy, double-decker root bridges & crystalline waters",
    colorTheme: {
      accent: "#36765B",
      bgGradient: "from-[#10281F] via-[#1A3D2F] to-[#2B5745]",
      sunColor: "#E8C88B",
    },
    highlights: ["Double Decker Living Root Bridge", "Nohkalikai Waterfall", "Dawki Glass Waters", "Cherrapunji Eco-Lodge"],
    inclusions: "5 Nights Premium Boutique Homestays, All Breakfasts & Dinners, Private Sanitized Innova Crysta, Woman Tour Lead",
    photoUrl: "https://images.unsplash.com/photo-1626014303757-6466336e4f3a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rajasthan",
    name: "Royal Rajasthan",
    stateOrCountry: "Western India",
    tagline: "Palaces, Golden Dunes & Desert Glamour",
    dates: "November 12 – 18, 2026",
    price: "₹48,000",
    seatsLeft: 5,
    temperature: "26°C • Golden Dusk",
    vibe: "Amber sandstone citadels, starlit luxury desert glamping & private royal havelis",
    colorTheme: {
      accent: "#B8894A",
      bgGradient: "from-[#2A180E] via-[#482813] to-[#7A451C]",
      sunColor: "#F5D061",
    },
    highlights: ["Jaisalmer Fort Private Walk", "Sam Sand Dunes Royal Glamp", "Blue City Jodhpur Rooftops", "Folk Music Soirée"],
    inclusions: "6 Nights Heritage Haveli & Luxury Tented Camp, Royal Dining, Private Luxury Chauffeur, Dedicated Trip Lead",
    photoUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kashmir",
    name: "Kashmir Paradise",
    stateOrCountry: "Himalayas, India",
    tagline: "Shikaras, Saffron Valleys & Pine Serenity",
    dates: "May 10 – 15, 2026",
    price: "₹42,500",
    seatsLeft: 6,
    temperature: "15°C • Crisp Alpine Air",
    vibe: "Dawn shikara flower markets, cedarwood houseboats & Gulmarg meadow views",
    colorTheme: {
      accent: "#4A6E82",
      bgGradient: "from-[#0F1E28] via-[#1D3241] to-[#2A495C]",
      sunColor: "#FAD098",
    },
    highlights: ["Dal Lake Heritage Houseboat", "Pahalgam Betaab Valley Walk", "Saffron Farm High Tea", "Shikara Floating Sunset"],
    inclusions: "5 Nights Handpicked Heritage Houseboat & Luxury Pines Resort, Shikara Rides, All Internal Transfers",
    photoUrl: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bali",
    name: "Bali Sanctuary",
    stateOrCountry: "Indonesia",
    tagline: "Emerald Terraces, Bamboo Retreats & Ocean Soul",
    dates: "June 20 – 26, 2026",
    price: "₹68,000",
    seatsLeft: 3,
    temperature: "27°C • Tropical Sun",
    vibe: "Tegallalang terraced paddies, sound healing, private pool villas & clifftop sunsets",
    colorTheme: {
      accent: "#5C8C67",
      bgGradient: "from-[#0D2418] via-[#1A3826] to-[#2B543D]",
      sunColor: "#FFCF71",
    },
    highlights: ["Ubud Sacred Sanctuary", "Sound Bath at Pyramids of Chi", "Private Luxury Pool Villa", "Uluwatu Sunset Walk"],
    inclusions: "6 Nights 5★ Eco-Luxury Bamboo Villas, Daily Yoga & Spa Ritual, Private Island Coach, International Tour Lead",
    photoUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "vietnam",
    name: "Vietnam Heritage",
    stateOrCountry: "Southeast Asia",
    tagline: "Halong Karsts, Silk Lanterns & French Boutiques",
    dates: "September 08 – 14, 2026",
    price: "₹74,000",
    seatsLeft: 5,
    temperature: "25°C • Lantern Glow",
    vibe: "Overnight boutique luxury cruise in Halong Bay & glowing lanterns in ancient Hoi An",
    colorTheme: {
      accent: "#C16B45",
      bgGradient: "from-[#191924] via-[#2D2A3E] to-[#4A3B4D]",
      sunColor: "#FDCB6E",
    },
    highlights: ["Halong Bay Luxury Suite Cruise", "Hoi An Silk Tailoring & Food Walk", "Ba Na Hills Golden Bridge", "Hanoi Old Quarter"],
    inclusions: "6 Nights Boutique Hotels & 5★ Halong Bay Cruise, Domestic Flight Hanoi-Danang, All Gourmet Meals, Woman Lead",
    photoUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HeroViewfinder() {
  const [activeDestIndex, setActiveDestIndex] = useState(0);
  const [windLevel, setWindLevel] = useState<number>(1);
  const [flashActive, setFlashActive] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [photoSavedToast, setPhotoSavedToast] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  const currentDest = DESTINATIONS[activeDestIndex];

  // Mouse tilt effect for the center phone viewfinder
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 12, y: -y * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Trigger camera snap
  const triggerCameraSnap = () => {
    setFlashActive(true);
    setPhotoSavedToast(true);
    setTimeout(() => setFlashActive(false), 280);
    setTimeout(() => setPhotoSavedToast(false), 3800);
  };

  // Cycle to next destination automatically or on click
  const cycleDestination = (index: number) => {
    setActiveDestIndex(index);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[95vh] w-full overflow-hidden bg-ivory-100 pt-28 pb-16 transition-colors duration-700"
    >
      {/* Dynamic Botanical Petal & Fern Particle Engine */}
      <PetalCanvas windIntensity={windLevel} interactive={true} />

      {/* Camera Shutter Flash Overlay */}
      {flashActive && (
        <div className="pointer-events-none fixed inset-0 z-50 bg-white transition-opacity duration-300 animate-out fade-out" />
      )}

      {/* Photo Snap Toast Notification */}
      {photoSavedToast && (
        <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 transform rounded-full bg-fern-800 px-6 py-2.5 text-sm font-medium text-ivory-100 shadow-2xl shadow-fern-900/50 border border-gold-500/40 flex items-center gap-2.5 animate-bounce">
          <Camera className="h-4 w-4 text-gold-400" />
          <span>Captured to your Fernway Travel Moodboard!</span>
          <span className="text-gold-300">✦</span>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        {/* Top Header Badge & Tagline */}
        <div className="mx-auto max-w-3xl text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur-md mb-4">
            <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fern-800">
              Women-Only Boutique Travel Collective
            </span>
            <span className="text-gold-500">✦</span>
            <span className="text-[11px] font-medium text-fern-600">Solo, Not Alone</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-fern-900">
            Travel Freely. <br className="hidden sm:inline" />
            <span className="italic font-light text-gold-500">Travel Safely.</span>{" "}
            Travel in Style.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-fern-700/90 font-light max-w-2xl mx-auto leading-relaxed">
            Thoughtfully curated journeys for women who’d rather not put their dreams on hold. 
            Handpicked boutique stays, certified woman tour leads, and small sisterhood cohorts of 8 to 14.
          </p>
        </div>

        {/* Destination Pill Navigator */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {DESTINATIONS.map((dest, idx) => {
            const isActive = idx === activeDestIndex;
            return (
              <button
                key={dest.id}
                onClick={() => cycleDestination(idx)}
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

        {/* Center Main Stage: The Cut-Paper Horizon & Woman Viewfinder */}
        <div className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl cut-paper-3 bg-gradient-to-b from-[#FAF7F2] to-[#ECE5D8]">
          {/* Dynamic Scenario Background - Cut-Paper Layers */}
          <div
            className={`relative h-[560px] sm:h-[620px] w-full bg-gradient-to-b ${currentDest.colorTheme.bgGradient} transition-all duration-700 overflow-hidden`}
          >
            {/* Ambient Sun / Moon Disc */}
            <div
              className="absolute top-12 left-1/2 -translate-x-1/2 h-44 w-44 rounded-full blur-xl opacity-70 transition-all duration-700"
              style={{ backgroundColor: currentDest.colorTheme.sunColor }}
            />
            <div
              className="absolute top-16 left-1/2 -translate-x-1/2 h-36 w-36 rounded-full opacity-90 transition-all duration-700 shadow-inner"
              style={{
                background: `radial-gradient(circle, #FFFFFF 20%, ${currentDest.colorTheme.sunColor} 100%)`,
              }}
            />

            {/* Cut-Paper Parallax Horizon Sceneries (Meghalaya, Rajasthan, Kashmir, Bali, Vietnam) */}
            <div className="absolute inset-0 z-0">
              {/* Back Mountain / Hills Layer */}
              <svg
                viewBox="0 0 1440 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 w-full h-[360px] object-cover opacity-85 transition-transform duration-700"
                preserveAspectRatio="none"
              >
                {activeDestIndex === 0 && (
                  // Meghalaya Rainforest Ridges
                  <path
                    d="M0 320L60 290C120 260 240 200 360 215C480 230 600 310 720 295C840 280 960 170 1080 175C1200 180 1320 300 1380 320L1440 330V600H0Z"
                    fill="#153629"
                  />
                )}
                {activeDestIndex === 1 && (
                  // Rajasthan Desert Citadel Dunes
                  <path
                    d="M0 310L80 280C160 250 320 190 480 210C640 230 800 330 960 300C1120 270 1280 190 1360 180L1440 200V600H0Z"
                    fill="#4D2B16"
                  />
                )}
                {activeDestIndex === 2 && (
                  // Kashmir Himalayan Alpine Peaks
                  <path
                    d="M0 300L90 220C180 140 360 80 540 130C720 180 900 290 1080 260C1260 230 1350 160 1440 180V600H0Z"
                    fill="#1B3242"
                  />
                )}
                {activeDestIndex === 3 && (
                  // Bali Volcano & Tropical Terraces
                  <path
                    d="M0 300L100 240C200 180 400 130 600 170C800 210 1000 310 1200 280C1320 260 1400 220 1440 230V600H0Z"
                    fill="#1C402E"
                  />
                )}
                {activeDestIndex === 4 && (
                  // Vietnam Halong Bay Karst Peaks
                  <path
                    d="M0 310L70 250C140 190 280 150 420 180C560 210 700 310 840 290C980 270 1120 160 1260 190C1330 205 1400 260 1440 270V600H0Z"
                    fill="#232034"
                  />
                )}
              </svg>

              {/* Mid Layer - Foliage, Havelis, Pines, Bamboo */}
              <svg
                viewBox="0 0 1440 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 w-full h-[240px] object-cover opacity-90 cut-paper-2"
                preserveAspectRatio="none"
              >
                {activeDestIndex === 0 && (
                  // Living Root Bridge and Betel Palms
                  <path
                    d="M0 240C120 210 240 170 360 185C480 200 600 270 720 260C840 250 960 160 1080 170C1200 180 1320 240 1440 250V400H0Z"
                    fill="#0F2B20"
                  />
                )}
                {activeDestIndex === 1 && (
                  // Jharokha Fort Arches & Dunes
                  <path
                    d="M0 230C150 190 300 260 450 240C600 220 750 150 900 180C1050 210 1200 270 1440 250V400H0Z"
                    fill="#391F0E"
                  />
                )}
                {activeDestIndex === 2 && (
                  // Pine Valley and Lidder Banks
                  <path
                    d="M0 220C140 180 280 240 420 220C560 200 700 150 840 170C980 190 1120 240 1440 230V400H0Z"
                    fill="#122430"
                  />
                )}
                {activeDestIndex === 3 && (
                  // Cascading Rice Terraces
                  <path
                    d="M0 210C160 170 320 230 480 210C640 190 800 140 960 170C1120 200 1280 230 1440 220V400H0Z"
                    fill="#132E20"
                  />
                )}
                {activeDestIndex === 4 && (
                  // Lantern Bridge and Karst Bay
                  <path
                    d="M0 220C150 180 300 230 450 210C600 190 750 140 900 160C1050 180 1200 220 1440 210V400H0Z"
                    fill="#1A1828"
                  />
                )}
              </svg>

              {/* Foreground Water / Earth Layer with gentle shimmer */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Left Vignette Information Card */}
            <div className="absolute top-6 left-6 z-20 max-w-xs sm:max-w-sm rounded-2xl glass-panel-dark p-4 text-ivory-100 shadow-xl border border-gold-500/30">
              <div className="flex items-center justify-between border-b border-ivory-100/10 pb-2 mb-2">
                <div className="flex items-center gap-1.5 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{currentDest.stateOrCountry}</span>
                </div>
                <SoundscapePlayer destinationName={currentDest.name} />
              </div>

              <h2 className="font-serif text-2xl font-medium tracking-wide text-ivory-100">
                {currentDest.name}
              </h2>
              <p className="text-xs text-gold-300 font-light mt-0.5">{currentDest.tagline}</p>

              <div className="mt-3 flex items-center justify-between text-xs text-ivory-200">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-gold-400" />
                  {currentDest.dates}
                </span>
                <span className="font-semibold text-gold-400 text-sm">{currentDest.price}</span>
              </div>

              <div className="mt-2.5 flex items-center gap-2 text-[11px] text-sage-200">
                <ShieldCheck className="h-3.5 w-3.5 text-sage-400" />
                <span>Small cohort • Max 14 women only</span>
              </div>
            </div>

            {/* Right Controls: Wind Speed & Quick Guide */}
            <div className="absolute top-6 right-6 z-20 hidden md:flex flex-col gap-2">
              <div className="glass-panel-dark rounded-2xl p-2.5 flex items-center gap-2 border border-gold-500/20 text-xs text-ivory-100">
                <Wind className="h-3.5 w-3.5 text-gold-400" />
                <span className="text-[11px]">Breeze Intensity</span>
                <div className="flex gap-1 ml-1">
                  {[0.5, 1, 2].map((lvl, idx) => (
                    <button
                      key={lvl}
                      onClick={() => setWindLevel(lvl)}
                      className={`h-5 w-5 rounded-full text-[10px] font-bold ${
                        windLevel === lvl
                          ? "bg-gold-500 text-fern-900"
                          : "bg-white/20 text-ivory-200 hover:bg-white/30"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* THE CENTERPIECE: Woman Traveler & Her Smartphone Viewfinder */}
            <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
              <div
                style={{
                  transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                  transition: "transform 0.15s ease-out",
                }}
                className="relative pointer-events-auto flex flex-col items-center pb-2 sm:pb-4"
              >
                {/* Center Smartphone HUD Frame */}
                <div className="relative w-[280px] sm:w-[320px] rounded-[38px] bg-fern-950 p-3 shadow-2xl border-4 border-gold-400/60 cut-paper-3 ring-8 ring-black/20">
                  {/* Phone Speaker & Camera Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 h-3.5 w-24 rounded-full bg-black/80 flex items-center justify-center gap-2 z-30">
                    <span className="h-1.5 w-1.5 rounded-full bg-fern-700" />
                    <span className="h-1 w-8 rounded-full bg-fern-800" />
                  </div>

                  {/* Phone Screen Viewfinder */}
                  <div className="relative h-[340px] sm:h-[380px] w-full rounded-[28px] overflow-hidden bg-black flex flex-col justify-between p-3.5 text-white">
                    {/* Viewfinder Background Snapshot of destination */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-90"
                      style={{ backgroundImage: `url(${currentDest.photoUrl})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
                    </div>

                    {/* Top HUD: Status Bar */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-ivory-200 pt-1">
                      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>LIVE DISPATCH</span>
                      </div>
                      <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                        {currentDest.temperature}
                      </span>
                    </div>

                    {/* Camera Focus Brackets (Grid Overlay) */}
                    <div className="relative z-10 my-auto flex flex-col items-center justify-center pointer-events-none">
                      <div className="relative h-28 w-28 border border-white/30 rounded-lg flex items-center justify-center">
                        <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-gold-400" />
                        <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-gold-400" />
                        <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-gold-400" />
                        <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-gold-400" />
                        <div className="h-2 w-2 rounded-full bg-gold-400/80 animate-pulse" />
                      </div>
                      <div className="mt-2 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] text-ivory-100 backdrop-blur-sm border border-gold-400/30">
                        {currentDest.name} • Sisterhood Vibe
                      </div>
                    </div>

                    {/* Bottom HUD: Trip lead info + Shutter Button */}
                    <div className="relative z-10 flex items-center justify-between border-t border-white/20 pt-2.5">
                      <div className="text-left">
                        <p className="text-[10px] font-medium uppercase tracking-wider text-gold-300">
                          Lead: Pallavi & Co.
                        </p>
                        <p className="text-xs font-serif text-ivory-100 font-normal">
                          {currentDest.seatsLeft} Sisterhood Seats
                        </p>
                      </div>

                      {/* Interactive Camera Shutter Button */}
                      <button
                        onClick={triggerCameraSnap}
                        title="Click to capture a memory!"
                        className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-white/90 p-1 shadow-lg ring-2 ring-gold-400 transition-all hover:scale-110 active:scale-95"
                      >
                        <div className="h-8 w-8 rounded-full bg-fern-800 flex items-center justify-center transition-colors group-hover:bg-gold-500">
                          <Camera className="h-4 w-4 text-white" />
                        </div>
                      </button>

                      <a
                        href={`https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                          currentDest.name
                        )}%20trip%20with%20Fernway!`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600/90 text-white hover:bg-emerald-500 transition-all shadow-md"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Stylized Solo Woman Traveler Silhouette / Cut-Paper Layer */}
                <div className="relative -mt-6 z-20 flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-fern-900/90 px-4 py-1.5 text-xs text-ivory-100 shadow-xl border border-gold-500/40 backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                    <span className="font-medium tracking-wide">
                      Wander on your own terms. We handle the rest.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Under-the-Hood Trip Details Strip */}
          <div className="bg-ivory-50 p-6 sm:p-8 border-t border-gold-500/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              {/* Highlight list */}
              <div className="md:col-span-2 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-fern-800 uppercase tracking-wider">
                  <Compass className="h-4 w-4 text-gold-500" />
                  <span>Curated Highlights of {currentDest.name}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-fern-900">
                  {currentDest.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold-600 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="space-y-1 text-xs text-fern-700 border-l-0 md:border-l md:border-gold-500/20 md:pl-6">
                <p className="font-semibold text-fern-900">Premium Inclusions:</p>
                <p className="line-clamp-2 leading-relaxed">{currentDest.inclusions}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%27d%20love%20to%20reserve%20a%20seat%20for%20${encodeURIComponent(
                    currentDest.name
                  )}%20(${currentDest.dates})`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-fern-800 px-5 py-3 text-xs sm:text-sm font-semibold text-ivory-100 shadow-md hover:bg-fern-900 transition-all group"
                >
                  <span>Reserve Seat ({currentDest.price})</span>
                  <ArrowRight className="h-4 w-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#trips"
                  className="inline-flex items-center justify-center gap-1 text-xs font-medium text-fern-700 hover:text-gold-600 transition-colors"
                >
                  <span>View Day-by-Day Itinerary</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
