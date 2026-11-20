import React from "react";
import Navbar from "@/components/Navbar";
import HeroViewfinder from "@/components/HeroViewfinder";
import TrustStrip from "@/components/TrustStrip";
import BrandPillars from "@/components/BrandPillars";
import TripShowcase from "@/components/TripShowcase";
import SafetyCharter from "@/components/SafetyCharter";
import FoundersStory from "@/components/FoundersStory";
import HowItWorks from "@/components/HowItWorks";
import TravellerStories from "@/components/TravellerStories";
import TripMatchmakerQuiz from "@/components/TripMatchmakerQuiz";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-100 text-fern-950 font-sans selection:bg-gold-500 selection:text-white relative">
      {/* Top Header & Navigation */}
      <Navbar />

      {/* The Requested Hero Experience: Woman Traveler, Smartphone Viewfinder, Shifting Scenarios & Petal Physics */}
      <HeroViewfinder />

      {/* Key Trust Signals */}
      <TrustStrip />

      {/* Curated Departures & Full Itineraries */}
      <TripShowcase />

      {/* The 4 Brand Pillars (Explore • Travel • Connect • Grow) */}
      <BrandPillars />

      {/* Zero-Compromise Safety Charter */}
      <SafetyCharter />

      {/* The Founder's Story: Meet Pallavi Vyas */}
      <FoundersStory />

      {/* 5-Step Booking Journey */}
      <HowItWorks />

      {/* Sisterhood Wall & Reviews */}
      <TravellerStories />

      {/* Interactive Trip Matchmaker Quiz & Free Safety Checklist Lead Magnet */}
      <TripMatchmakerQuiz />

      {/* Comprehensive FAQs */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Concierge (+91 79999 19170) */}
      <WhatsAppFloatingButton />
    </main>
  );
}
