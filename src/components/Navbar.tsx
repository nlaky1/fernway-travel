"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Sisterhood Announcement Ticker */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-fern-900 text-ivory-100 text-[11px] sm:text-xs py-2 px-4 text-center border-b border-gold-500/20">
        <div className="container mx-auto flex items-center justify-center gap-3">
          <span className="flex h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="font-light tracking-wider">
            🌸 April &amp; May 2026 Sisterhood Departures: <strong className="font-medium text-gold-300">Meghalaya &amp; Kashmir</strong> Now Open • Max 14 Women
          </span>
          <span className="hidden md:inline text-gold-400">✦</span>
          <a
            href="https://wa.me/917999919170?text=Hi%20Fernway%2C%20I%27d%20love%20to%20know%20about%20your%20upcoming%20trips"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline font-medium text-gold-300 hover:text-white underline underline-offset-2 ml-1"
          >
            Claim ₹3,000 Early Bird →
          </a>
        </div>
      </div>

      {/* Main Navigation Bar (Lighter Theme Pearl Frosted Glass) */}
      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3.5 border-b border-gold-500/25 text-fern-900"
            : "bg-[#FAF7F2]/85 backdrop-blur-md py-4 border-b border-gold-500/20 text-fern-900"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Emblem */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Elegant SVG Fern Leaf & Horizon Monogram */}
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-fern-800 text-gold-400 border border-gold-500/40 shadow-sm transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-gold-400"
              >
                <path d="M12 22C12 22 12 14 19 8C19 8 13.5 8 12 12" />
                <path d="M12 22C12 22 12 12 5 7C5 7 10.5 7 12 12" />
                <path d="M12 22V2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-wider text-fern-950 group-hover:text-gold-700 transition-colors">
                FERNWAY
              </span>
              <span className="text-[9px] font-medium tracking-[0.22em] uppercase text-gold-600">
                Women Who Wander
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-fern-800">
            <a href="#trips" className="hover:text-gold-600 transition-colors">
              Journeys
            </a>
            <a href="#pillars" className="hover:text-gold-600 transition-colors">
              The 4 Pillars
            </a>
            <a href="#story" className="hover:text-gold-600 transition-colors">
              Meet Pallavi
            </a>
            <a href="#safety" className="hover:text-gold-600 transition-colors flex items-center gap-1">
              <Shield className="h-3 w-3 text-gold-600" />
              <span>Safety Charter</span>
            </a>
            <a href="#how-it-works" className="hover:text-gold-600 transition-colors">
              How It Works
            </a>
            <a href="#real-moments" className="hover:text-gold-600 transition-colors text-gold-700 font-semibold flex items-center gap-1">
              <span>✦ Real Moments</span>
            </a>
            <a href="#stories" className="hover:text-gold-600 transition-colors">
              Sisterhood Stories
            </a>
            <a href="#faq" className="hover:text-gold-600 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#quiz"
              className="rounded-full border border-gold-500/35 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium text-fern-900 hover:bg-gold-500 hover:text-fern-950 transition-all shadow-sm"
            >
              Match Your Trip
            </a>

            <a
              href="https://wa.me/917999919170?text=Hi%20Fernway%2C%20I%27d%20love%20to%20know%20about%20your%20upcoming%20trips"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-emerald-800 transition-all hover:scale-105"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-fern-950 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-gold-500/20 px-6 py-6 shadow-2xl space-y-4 text-fern-950">
            <div className="flex flex-col space-y-3 text-sm font-medium">
              <a
                href="#trips"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-gold-600"
              >
                Curated Journeys
              </a>
              <a
                href="#pillars"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-gold-600"
              >
                The 4 Pillars (Explore • Travel • Connect • Grow)
              </a>
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-gold-600"
              >
                Meet Pallavi (Our Story)
              </a>
              <a
                href="#safety"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-gold-600"
              >
                Zero-Compromise Safety Charter
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-gold-600"
              >
                How It Works (5 Steps)
              </a>
              <a
                href="#real-moments"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-gold-700 font-semibold flex items-center gap-1"
              >
                <span>✦ Real Moments (Photos &amp; Reels)</span>
              </a>
              <a
                href="#stories"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-gold-600"
              >
                Sisterhood Stories &amp; Reviews
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-gold-600"
              >
                Frequently Asked Questions
              </a>
            </div>

            <div className="pt-4 border-t border-gold-500/20 flex flex-col gap-2.5">
              <a
                href="https://wa.me/917999919170?text=Hi%20Fernway%2C%20I%27d%20love%20to%20know%20about%20your%20upcoming%20trips"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-emerald-700 py-3 text-xs font-semibold text-white shadow-md hover:bg-emerald-800"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Talk with Pallavi on WhatsApp (+91 79999 19170)</span>
              </a>

              <a
                href="#quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 text-xs font-medium text-fern-900 border border-gold-500/30 rounded-full hover:bg-white/80"
              >
                Take the 30-sec Trip Matchmaker Quiz
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
