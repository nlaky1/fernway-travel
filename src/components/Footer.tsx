"use client";

import React from "react";
import { MessageCircle, Mail, MapPin, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-fern-950 text-ivory-100 pt-20 pb-12 relative overflow-hidden border-t border-gold-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-fern-800 text-gold-400 border border-gold-500/40">
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
              <div>
                <span className="font-serif text-2xl font-semibold tracking-wider text-ivory-100 block">
                  FERNWAY
                </span>
                <span className="text-[9px] font-medium tracking-[0.25em] uppercase text-gold-400">
                  Travel Freely • Travel Safely • Travel in Style
                </span>
              </div>
            </div>

            <p className="text-xs text-ivory-300 font-light leading-relaxed max-w-sm">
              Inspired by the imagery of a fresh new leaf reaching towards the sky, Fernway is a women-only
              travel community offering boutique group journeys with handpicked stays, vetted safety charters,
              and like-minded sisterhood cohorts.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-fern-900 text-gold-400 hover:bg-gold-500 hover:text-fern-950 transition-colors border border-gold-500/30"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/917999919170?text=Hi%20Fernway!"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-fern-900 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors border border-emerald-500/30"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-gold-400">
              Curated Journeys
            </h4>
            <ul className="space-y-2 text-xs text-ivory-300 font-light">
              <li>
                <a href="#trips" className="hover:text-gold-300 transition-colors">
                  Meghalaya (April 2026)
                </a>
              </li>
              <li>
                <a href="#trips" className="hover:text-gold-300 transition-colors">
                  Kashmir Paradise (May 2026)
                </a>
              </li>
              <li>
                <a href="#trips" className="hover:text-gold-300 transition-colors">
                  Bali Sanctuary (June 2026)
                </a>
              </li>
              <li>
                <a href="#trips" className="hover:text-gold-300 transition-colors">
                  Royal Rajasthan (Nov 2026)
                </a>
              </li>
              <li>
                <a href="#trips" className="hover:text-gold-300 transition-colors">
                  Vietnam Heritage (Sept 2026)
                </a>
              </li>
            </ul>
          </div>

          {/* About & Trust */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-gold-400">
              The Brand
            </h4>
            <ul className="space-y-2 text-xs text-ivory-300 font-light">
              <li>
                <a href="#story" className="hover:text-gold-300 transition-colors">
                  The Story Behind Fernway
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-gold-300 transition-colors">
                  Zero-Compromise Safety Charter
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-gold-300 transition-colors">
                  The 4 Pillars (Explore • Travel • Connect • Grow)
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-gold-300 transition-colors">
                  Sisterhood Reviews
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-gold-300 transition-colors">
                  Free 2026 Safety & Packing Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-gold-400">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-300 font-light">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="https://wa.me/917999919170"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  +91 79999 19170 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <span>hello@fernway.in</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory-400">
          <p>
            © {new Date().getFullYear()} Fernway. Founded with <Heart className="inline h-3 w-3 text-rose-400" /> by Pallavi Vyas. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ivory-200">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-ivory-200">
              Cancellation & Refund Policy
            </a>
            <a href="#" className="hover:text-ivory-200">
              Privacy Promise
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gold-400 hover:text-gold-300 ml-2"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
