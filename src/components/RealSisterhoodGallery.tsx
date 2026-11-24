"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  Play,
  Pause,
  MapPin,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Volume2,
  VolumeX,
  MessageCircle,
  Camera,
  CheckCircle2,
} from "lucide-react";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  title: string;
  location: string;
  category: "kashmir" | "mist" | "adventure" | "style";
  categoryLabel: string;
  src: string;
  thumbSrc: string;
  posterSrc?: string;
  videoDuration?: string;
  aspectRatio: "landscape" | "portrait" | "square" | "panoramic";
  caption: string;
  cohort: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "tulip-kashmir",
    type: "image",
    title: "Saree Soirée at Tulip Garden",
    location: "Srinagar, Kashmir",
    category: "kashmir",
    categoryLabel: "Kashmir Paradise",
    src: "/real-travelers/kashmir_tulip_sisters.webp",
    thumbSrc: "/real-travelers/thumbs/kashmir_tulip_sisters.webp",
    aspectRatio: "landscape",
    caption:
      "Twelve women from 7 cities wearing traditional silk & handloom sarees amidst millions of blooming Himalayan tulips on Dal Lake's shores.",
    cohort: "Kashmir Paradise • May Cohort",
  },
  {
    id: "meadow-twirl-video",
    type: "video",
    title: "Betaab Alpine Meadow Twirl",
    location: "Pahalgam, Kashmir",
    category: "kashmir",
    categoryLabel: "Video Reel 🎬",
    src: "/real-travelers/videos/kashmir_meadow_twirl.mp4",
    thumbSrc: "/real-travelers/thumbs/pahalgam_flower_steps.webp",
    posterSrc: "/real-travelers/kashmir_meadow_twirl_poster.webp",
    videoDuration: "0:08",
    aspectRatio: "portrait",
    caption:
      "Pure, unrestrained joy in the alpine meadow under snow-dusted Pir Panjal peaks. Wandering freely on your own terms.",
    cohort: "Kashmir Paradise • May Cohort",
  },
  {
    id: "cloudline-meadow",
    type: "image",
    title: "The Cloudline Embrace",
    location: "Cherrapunji, Meghalaya",
    category: "mist",
    categoryLabel: "Mist & Sacred Hills",
    src: "/real-travelers/meadow_mist_sisterhood.webp",
    thumbSrc: "/real-travelers/thumbs/meadow_mist_sisterhood.webp",
    aspectRatio: "landscape",
    caption:
      "Linked arms facing the ethereal rolling mist of the Khasi plateau. Strangers on day 1, inseparable travel sisters for life by day 3.",
    cohort: "Meghalaya Living Bridges • April Cohort",
  },
  {
    id: "thar-safari-crew",
    type: "image",
    title: "Desert Off-Roading Thar Crew",
    location: "Sam Sand Dunes, Rajasthan",
    category: "adventure",
    categoryLabel: "Desert & Safari",
    src: "/real-travelers/thar_jeep_safari_crew.webp",
    thumbSrc: "/real-travelers/thumbs/thar_jeep_safari_crew.webp",
    aspectRatio: "portrait",
    caption:
      "Coordinated crimson jumpsuits, open-top 4x4 Thar convoy across undulating golden dunes, and the highest-energy photo session ever.",
    cohort: "Royal Rajasthan • November Cohort",
  },
  {
    id: "gulmarg-snowmobile-video",
    type: "video",
    title: "Gulmarg Snowmobile Rush",
    location: "Gulmarg Heights, Kashmir",
    category: "kashmir",
    categoryLabel: "Video Reel 🎬",
    src: "/real-travelers/videos/gulmarg_snowmobile_rush.mp4",
    thumbSrc: "/real-travelers/thumbs/pahalgam_flower_steps.webp",
    posterSrc: "/real-travelers/gulmarg_snowmobile_rush_poster.webp",
    videoDuration: "0:08",
    aspectRatio: "portrait",
    caption:
      "Carving through powdery snow slopes at 9,000 feet on snowmobiles. Adventure, safety, and pure mountain adrenaline.",
    cohort: "Kashmir Paradise • May Cohort",
  },
  {
    id: "bougainvillea-terrace",
    type: "image",
    title: "Lakeside Bougainvillea High Tea",
    location: "Boutique Heritage Sanctuary",
    category: "style",
    categoryLabel: "Boutique Luxury",
    src: "/real-travelers/resort_terrace_view.webp",
    thumbSrc: "/real-travelers/thumbs/resort_terrace_view.webp",
    aspectRatio: "landscape",
    caption:
      "Unwinding on a flower-draped terrace overlooking calm waters after a day of gentle exploration. Handpicked stays with soul.",
    cohort: "Heritage Sanctuary Cohort",
  },
  {
    id: "clifftop-lake-gathering",
    type: "image",
    title: "The Reservoir Bluff Panorama",
    location: "Umiam Lake Lookout",
    category: "mist",
    categoryLabel: "Mist & Sacred Hills",
    src: "/real-travelers/clifftop_lake_gathering.webp",
    thumbSrc: "/real-travelers/thumbs/clifftop_lake_gathering.webp",
    aspectRatio: "panoramic",
    caption:
      "Sitting together along the natural rock ledge watching afternoon mist sail across the water. A quiet, soulful pause from everyday life.",
    cohort: "Meghalaya Living Bridges • April Cohort",
  },
  {
    id: "gala-night-palace",
    type: "image",
    title: "Royal Soirée & Gala Evening",
    location: "Palace Ballroom & Dining",
    category: "style",
    categoryLabel: "Boutique Luxury",
    src: "/real-travelers/luxury_gala_night.webp",
    thumbSrc: "/real-travelers/thumbs/luxury_gala_night.webp",
    aspectRatio: "square",
    caption:
      "Dressed up in silk and cocktail gowns for our special group celebration dinner. Celebrating women living on their own terms.",
    cohort: "Royal Rajasthan • November Cohort",
  },
  {
    id: "room-laughter-video",
    type: "video",
    title: "Midnight Chai & Room Stories",
    location: "Boutique Suite Living Room",
    category: "style",
    categoryLabel: "Video Reel 🎬",
    src: "/real-travelers/videos/sisterhood_room_laughter.mp4",
    thumbSrc: "/real-travelers/thumbs/luxury_gala_night.webp",
    posterSrc: "/real-travelers/sisterhood_room_laughter_poster.webp",
    videoDuration: "0:07",
    aspectRatio: "portrait",
    caption:
      "When bedtime gets pushed past 1 AM because everyone is sharing stories, laughing till their stomachs hurt, and bonding like childhood friends.",
    cohort: "Sisterhood Night • All Cohorts",
  },
  {
    id: "monsoon-bhutta-highway",
    type: "image",
    title: "Highway Monsoon Bhutta Stop",
    location: "Western Ghats Roadtrip",
    category: "adventure",
    categoryLabel: "Desert & Safari",
    src: "/real-travelers/monsoon_roadside_bhutta.webp",
    thumbSrc: "/real-travelers/thumbs/monsoon_roadside_bhutta.webp",
    aspectRatio: "portrait",
    caption:
      "Stopping on a rain-washed mountain road to relish piping hot charcoal-roasted corn with lemon and chaat masala. Little joys unhurried.",
    cohort: "Monsoon Retreat Cohort",
  },
  {
    id: "lake-horizon-pointing",
    type: "image",
    title: "Pointing to New Horizons",
    location: "Reservoir Crest View",
    category: "mist",
    categoryLabel: "Mist & Sacred Hills",
    src: "/real-travelers/lake_horizon_pointing.webp",
    thumbSrc: "/real-travelers/thumbs/lake_horizon_pointing.webp",
    aspectRatio: "panoramic",
    caption:
      "Standing tall along the water crest, celebrating courage and the freedom to fly high — the very heartbeat of the Fernway leaf.",
    cohort: "Sisterhood Reflections • 2026",
  },
];

type CategoryFilter = "all" | "kashmir" | "mist" | "adventure" | "style" | "video";

export default function RealSisterhoodGallery() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === "all") return true;
    if (filter === "video") return item.type === "video";
    return item.category === filter;
  });

  const handleOpenLightbox = (item: GalleryItem) => {
    setActiveItem(item);
    setIsPlayingVideo(true);
  };

  const handleCloseLightbox = () => {
    setActiveItem(null);
    setIsPlayingVideo(false);
  };

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((x) => x.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((x) => x.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <section id="real-moments" className="py-24 bg-[#FAF7F2] text-fern-950 relative overflow-hidden transition-colors duration-700">
      {/* Decorative Warm Ivory Flourishes */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sage-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-fern-800 shadow-sm mb-3">
            <Camera className="h-3.5 w-3.5 text-gold-600" />
            <span>Captured by Our Cohorts • 100% Real Travelers</span>
            <span className="text-gold-500">✦</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-fern-950">
            Real Women. Real Journeys. Real Sisterhood.
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-fern-800/80 font-light leading-relaxed">
            Zero staged stock models. These are candid glimpses, saree walks, roadside bhuttas, and snowmobile rushes 
            from actual Fernway departures — where strangers became lifelong travel sisters.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { id: "all", label: "All Unfiltered Moments (11)" },
            { id: "video", label: "🎬 Live Video Reels (3)" },
            { id: "kashmir", label: "🌸 Kashmir & Alpine" },
            { id: "mist", label: "🌿 Mist & Sacred Lakes" },
            { id: "adventure", label: "🚙 4x4 Safari & Roadtrips" },
            { id: "style", label: "✨ Boutique Stays & Soirées" },
          ].map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as CategoryFilter)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-fern-800 text-ivory-100 font-semibold shadow-md ring-2 ring-gold-500 scale-105"
                    : "bg-white text-fern-800 hover:bg-ivory-50 border border-gold-500/20 shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Masonry / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[280px]">
          {filteredItems.map((item, idx) => {
            const isVideo = item.type === "video";
            const isTall = item.aspectRatio === "portrait";
            const isWide = item.aspectRatio === "panoramic" || item.id === "tulip-kashmir";

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className={`group relative rounded-2xl overflow-hidden border border-gold-500/25 bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  isTall ? "sm:row-span-2" : isWide ? "lg:col-span-2" : "row-span-1"
                }`}
              >
                {/* Image / Video Poster with Lazy Loading */}
                <div className="relative w-full h-full bg-fern-900/10 overflow-hidden">
                  <Image
                    src={isVideo && item.posterSrc ? item.posterSrc : item.src}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Light Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-fern-950/85 via-fern-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-fern-900 border border-gold-500/30 shadow-sm">
                      {item.categoryLabel}
                    </span>

                    {isVideo && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-700/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
                        <Play className="h-3 w-3 fill-current" />
                        <span>{item.videoDuration}</span>
                      </span>
                    )}
                  </div>

                  {/* Center Play Icon for Video Items */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="h-12 w-12 rounded-full bg-gold-500/90 text-fern-950 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-gold-400 transition-all">
                        <Play className="h-5 w-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Information Card */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                    <div className="flex items-center gap-1.5 text-gold-300 text-[11px] font-medium uppercase tracking-wider mb-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-medium leading-snug text-ivory-100 group-hover:text-gold-200 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-ivory-300 font-light line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                      {item.caption}
                    </p>

                    <div className="mt-2.5 flex items-center justify-between border-t border-white/15 pt-2 text-[10px] text-gold-400/90">
                      <span>{item.cohort}</span>
                      <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold text-gold-300">
                        View Full ✦
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Sisterhood Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white border border-gold-500/30 p-6 sm:p-8 shadow-md cut-paper-1 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-fern-950">
                Want to be part of our next sisterhood chapter?
              </h4>
              <p className="text-xs text-fern-700 font-light mt-0.5">
                Upcoming April &amp; May departures are currently open with 8 to 14 guests maximum per cohort.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20saw%20the%20real%20traveler%20photos%20and%20videos%20on%20the%20website%20and%20would%20love%20to%20know%20more%20about%20upcoming%20trips!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-105 flex-shrink-0"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat Directly with Pallavi</span>
          </a>
        </div>
      </div>

      {/* 
        ========================================================================
        INTERACTIVE FULL-SCREEN LIGHTBOX MODAL
        ========================================================================
      */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl bg-ivory-50 border border-gold-500/40 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 z-30 h-9 w-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev / Next Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-black/50 hover:bg-gold-500 hover:text-fern-950 text-white flex items-center justify-center transition-all shadow-md"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 lg:right-[43%] top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-black/50 hover:bg-gold-500 hover:text-fern-950 text-white flex items-center justify-center transition-all shadow-md"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Left Stage: High-Resolution Photo or Active Video */}
            <div className="lg:col-span-7 bg-black flex items-center justify-center relative min-h-[340px] sm:min-h-[460px] overflow-hidden">
              {activeItem.type === "video" ? (
                <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src={activeItem.src}
                    poster={activeItem.posterSrc}
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                  {/* Video Mute Toggle */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="absolute bottom-4 left-4 z-20 h-8 w-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-gold-500 hover:text-fern-950 transition-colors"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>
              ) : (
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {/* Right Stage: Editorial Story & Booking Hook */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-ivory-50 text-fern-950 overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-gold-500/20 text-gold-800 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider">
                    {activeItem.categoryLabel}
                  </span>
                  <span className="text-xs text-fern-500">•</span>
                  <span className="text-xs font-mono text-fern-600 uppercase">
                    {activeItem.cohort}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-fern-950 mt-1">
                  {activeItem.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-gold-700 font-medium mt-2">
                  <MapPin className="h-3.5 w-3.5 text-gold-600" />
                  <span>{activeItem.location}</span>
                </div>

                <div className="my-5 border-y border-gold-500/20 py-4">
                  <p className="text-sm text-fern-800 leading-relaxed font-light">
                    {activeItem.caption}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-fern-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Real unedited candid from past departures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Cohort sizes limited to 8–14 women</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Certified female trip leaders traveling together</span>
                  </div>
                </div>
              </div>

              {/* Bottom WhatsApp Booking Trigger */}
              <div className="mt-8 pt-4 border-t border-gold-500/20">
                <a
                  href={`https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20saw%20the%20${encodeURIComponent(
                    activeItem.title
                  )}%20moment%20from%20${encodeURIComponent(
                    activeItem.location
                  )}%20and%20want%20to%20experience%20this%20vibe!`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-5 text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-102"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Book This Vibe on WhatsApp</span>
                </a>
                <p className="text-center text-[10px] text-fern-500 mt-2">
                  Chat directly with founder Pallavi Vyas (+91 79999 19170)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
