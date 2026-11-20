"use client";

import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Check,
  X,
  MessageCircle,
  Sparkles,
} from "lucide-react";

interface Trip {
  id: string;
  title: string;
  destination: string;
  region: string;
  dates: string;
  duration: string;
  price: string;
  deposit: string;
  seatsTotal: number;
  seatsLeft: number;
  heroImage: string;
  tagline: string;
  vibe: string;
  fitnessLevel: "Easy & Relaxed" | "Moderate & Scenic" | "Active Adventure";
  stayCategory: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
    stay: string;
  }[];
  inclusions: string[];
  exclusions: string[];
}

const TRIPS: Trip[] = [
  {
    id: "meghalaya",
    title: "Meghalaya: The Living Mist & Sacred Cascades",
    destination: "Meghalaya",
    region: "Northeast India",
    dates: "April 18 – 23, 2026",
    duration: "6 Days / 5 Nights",
    price: "₹38,500",
    deposit: "₹10,000",
    seatsTotal: 12,
    seatsLeft: 4,
    heroImage: "https://images.unsplash.com/photo-1626014303757-6466336e4f3a?auto=format&fit=crop&w=1000&q=80",
    tagline: "Walk through cloud-wrapped hills, swim in glass rivers, and cross centuries-old living root bridges.",
    vibe: "Nature, Sisterhood, Hidden Cascades & Rainforest Serenity",
    fitnessLevel: "Moderate & Scenic",
    stayCategory: "Handpicked Eco-Luxury Cottages & Heritage Pine Stays",
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Shillong • The Scottish Pine Welcome",
        description:
          "Arrive at Guwahati Airport by noon. Private AC transfers await. Scenic drive past Umiam Lake to Shillong. Evening sisterhood orientation, welcome dinner, and local Khasi acoustic music.",
        stay: "Polo Orchid Heritage / Ri Kynjai Resort",
      },
      {
        day: 2,
        title: "Cherrapunji (Sohra) • Canyons & Nohkalikai Majesty",
        description:
          "Drive into the mist of Cherrapunji. Stand before the dramatic Nohkalikai and Wei Sawdong 3-tier waterfalls. Explore Mawsmai limestone caves followed by hot local chai.",
        stay: "Cherrapunji Boutique Eco-Lodge",
      },
      {
        day: 3,
        title: "The Living Root Bridges of Nongriat",
        description:
          "Trek through ancient rainforest canopy down to the magnificent Double Decker Living Root Bridge. Swim in natural turquoise spring pools. A journey of quiet courage and triumph together.",
        stay: "Cherrapunji Boutique Eco-Lodge",
      },
      {
        day: 4,
        title: "Mawlynnong & Dawki • The Crystal Umngot River",
        description:
          "Visit Asia's cleanest village, Mawlynnong. Float on the famous Dawki River where waters are so crystal clear that boats appear to float on air. Indo-Bangladesh border scenic lookout.",
        stay: "Betelnut Grove Boutique Resort, Shnongpdeng",
      },
      {
        day: 5,
        title: "Laitlum Canyons & Shillong Cafes",
        description:
          "Sunrise at Laitlum 'End of the World' canyons. Afternoon cafe hopping in Shillong, local handloom shopping for Khasi shawls, and our special farewell dinner & memories circle.",
        stay: "Polo Orchid Heritage, Shillong",
      },
      {
        day: 6,
        title: "Umiam Lake & Airport Return",
        description:
          "Leisurely breakfast. Mid-morning stop at Umiam Lake for farewell group photography. Chauffeur drop to Guwahati Airport by 3:00 PM for onward flights home.",
        stay: "Departure Day",
      },
    ],
    inclusions: [
      "5 Nights accommodation on twin-sharing in handpicked boutique 4★ stays & eco-resorts",
      "All breakfasts and 4 curated dinners featuring authentic Khasi and continental delicacies",
      "All internal travel in private air-conditioned vehicles with verified chauffeurs",
      "Dedicated Fernway Woman Tour Lead with you 24/7",
      "All entry fees, cave permits, indigenous village taxes & boat rides",
      "Daily drinking water, emergency medical kit, and live trip photo collection",
    ],
    exclusions: [
      "Airfare / Train tickets to and from Guwahati",
      "Lunches & personal shopping expenses",
      "Travel insurance (guidance provided)",
    ],
  },
  {
    id: "rajasthan",
    title: "Royal Rajasthan: Palaces, Dunes & Desert Glamour",
    destination: "Jaisalmer & Jodhpur",
    region: "Western India",
    dates: "November 12 – 18, 2026",
    duration: "7 Days / 6 Nights",
    price: "₹48,000",
    deposit: "₹12,000",
    seatsTotal: 14,
    seatsLeft: 5,
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    tagline: "Golden sandstone ramparts, private palace high tea, and luxury tented glamping beneath desert stars.",
    vibe: "Heritage Royalty, Starlit Glamping & Desert Luxury",
    fitnessLevel: "Easy & Relaxed",
    stayCategory: "Heritage Haveli Suites & 5★ Luxury Desert Tented Camp",
    itinerary: [
      {
        day: 1,
        title: "Arrival in the Blue City • Jodhpur",
        description:
          "Check in to a restored 19th-century royal haveli. Sunset tea overlooking the mighty Mehrangarh Fort. Intimate sisterhood meet-and-greet dinner.",
        stay: "Heritage Haveli Palace, Jodhpur",
      },
      {
        day: 2,
        title: "Mehrangarh Fort & The Indigo Alleys",
        description:
          "Private guided walkthrough of Mehrangarh Fort before crowds arrive. Heritage walk through the famous blue lanes, spice bazaars, and lunch at a royal rooftop terrace.",
        stay: "Heritage Haveli Palace, Jodhpur",
      },
      {
        day: 3,
        title: "Into the Golden City • Jaisalmer",
        description:
          "Scenic desert drive to Jaisalmer. Evening walk through Patwon ki Haveli, glowing golden in the sunset. Rooftop dining with live sitar melodies.",
        stay: "Golden Sandstone Palace Hotel",
      },
      {
        day: 4,
        title: "The Living Fort & Sunset at Sam Dunes",
        description:
          "Explore the world's only living fort. Afternoon transfer to our private luxury desert camp. Camel safari, folk Kalbelia dance by campfire, and gala starlit Rajasthani feast.",
        stay: "Serai Luxury Desert Glamping Resort",
      },
      {
        day: 5,
        title: "Oasis Sanctuary & Desert Stars",
        description:
          "Sunrise yoga on the dunes. Visit ancient abandoned Kuldhara village and the sacred desert oasis. Afternoon relaxation at the desert spa.",
        stay: "Serai Luxury Desert Glamping Resort",
      },
      {
        day: 6,
        title: "Return to Jodhpur & Royal Farewell Banquet",
        description:
          "Return drive to Jodhpur with a stop at traditional Bishnoi handicraft communities. Evening Royal Farewell dinner with celebration drinks.",
        stay: "Heritage Haveli Palace, Jodhpur",
      },
      {
        day: 7,
        title: "Umaid Bhawan Palace & Departures",
        description:
          "Morning visit to the magnificent Umaid Bhawan Palace museum. Airport transfers to Jodhpur Airport for afternoon departures.",
        stay: "Departure Day",
      },
    ],
    inclusions: [
      "6 Nights accommodation in royal heritage havelis & luxury air-conditioned desert tents",
      "All breakfasts, royal desert banquet, and authentic thali dinners",
      "Private AC luxury coach transfers throughout the journey",
      "Private heritage curators and woman tour lead",
      "All fort entries, monument tickets, camel rides, and folk cultural performances",
      "Curated travel photos and pre-trip WhatsApp circle access",
    ],
    exclusions: [
      "Flights to and from Jodhpur",
      "Select lunches and alcohol",
      "Personal shopping and gratuities",
    ],
  },
  {
    id: "kashmir",
    title: "Kashmir Paradise: Shikaras, Saffron & Pine Glades",
    destination: "Srinagar & Pahalgam",
    region: "Himalayas, India",
    dates: "May 10 – 15, 2026",
    duration: "6 Days / 5 Nights",
    price: "₹42,500",
    deposit: "₹10,000",
    seatsTotal: 12,
    seatsLeft: 6,
    heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
    tagline: "Dawn floating flower markets on Dal Lake, cedarwood heritage houseboats, and alpine meadows.",
    vibe: "Alpine Bliss, Soulful Kashmiri Hospitality & Pine Meadows",
    fitnessLevel: "Easy & Relaxed",
    stayCategory: "Luxury Dal Lake Houseboat & Riverfront Pines Chalet",
    itinerary: [
      {
        day: 1,
        title: "Srinagar Arrival & Heritage Houseboat Check-in",
        description:
          "Arrive at Srinagar Airport. Transfer to a hand-carved luxury cedarwood houseboat on Nigeen Lake. Kahwa tea ceremony and evening sunset Shikara cruise.",
        stay: "Luxury Heritage Houseboat, Nigeen Lake",
      },
      {
        day: 2,
        title: "Mughal Gardens & Old City Saffron Bazaar",
        description:
          "Morning stroll through Shalimar & Nishat Bagh blooming with roses and chinars. Authentic Wazwan lunch tasting followed by artisan pashmina and walnut wood studio visits.",
        stay: "Luxury Heritage Houseboat, Nigeen Lake",
      },
      {
        day: 3,
        title: "To the Valley of Shepherds • Pahalgam",
        description:
          "Scenic mountain drive through Pampore saffron fields. Arrive at our pine-shrouded riverfront resort along the Lidder River. Evening bonfire by the water.",
        stay: "Lidder River Boutique Pines Resort",
      },
      {
        day: 4,
        title: "Betaab Valley & Aru Meadows Walk",
        description:
          "Gentle horse ride or stroll through the emerald meadows of Aru and Betaab Valley. Picnic lunch with snow-capped Pir Panjal mountain panoramas.",
        stay: "Lidder River Boutique Pines Resort",
      },
      {
        day: 5,
        title: "Return to Srinagar & Floating Market Sunset",
        description:
          "Return to Srinagar. Exclusive private Shikara expedition through quiet water channels and floating vegetable gardens. Sisterhood celebration dinner.",
        stay: "Boutique Srinagar Orchard Retreat",
      },
      {
        day: 6,
        title: "Farewell Kahwa & Airport Return",
        description:
          "Final morning Kashmiri breakfast. Chauffeur transfers to Srinagar Airport for flights home.",
        stay: "Departure Day",
      },
    ],
    inclusions: [
      "5 Nights in vetted luxury cedarwood houseboats & boutique mountain resorts",
      "Daily Kashmiri buffet breakfasts and traditional homecooked dinners",
      "Private AC vehicle transfers and certified woman leader",
      "Private Shikara rides on Dal and Nigeen Lakes",
      "All monument permits and garden admissions",
    ],
    exclusions: ["Airfare to Srinagar", "Personal expenses & pony rides", "Lunches"],
  },
  {
    id: "bali",
    title: "Bali Sanctuary: Emerald Terraces & Bamboo Retreats",
    destination: "Ubud & Coastal Bali",
    region: "Indonesia",
    dates: "June 20 – 26, 2026",
    duration: "7 Days / 6 Nights",
    price: "₹68,000",
    deposit: "₹15,000",
    seatsTotal: 10,
    seatsLeft: 3,
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    tagline: "Tegallalang terraced paddies, sound healing at Pyramids of Chi, and private luxury pool villas.",
    vibe: "Wellness, Tropical Luxury, Coastal Sunsets & Soul Care",
    fitnessLevel: "Easy & Relaxed",
    stayCategory: "5★ Private Pool Eco-Villas in Ubud & Coastal Beachfront Sanctuary",
    itinerary: [
      {
        day: 1,
        title: "Denpasar Arrival & Ubud Sanctuary",
        description:
          "VIP airport pickup at Ngurah Rai International Airport. Transfer to our breathtaking jungle villa in Ubud. Flower garland welcome, balinese blessing, and poolside dinner.",
        stay: "Private Luxury Pool Villa, Ubud",
      },
      {
        day: 2,
        title: "Tegallalang Terraces & Sound Healing",
        description:
          "Early morning walk among emerald rice paddies before the heat. Afternoon deep vibrational sound healing session at the Pyramids of Chi.",
        stay: "Private Luxury Pool Villa, Ubud",
      },
      {
        day: 3,
        title: "Water Temples & Organic Herbal Spa",
        description:
          "Visit Tirta Empul sacred water purification temple. Afternoon 2-hour Balinese massage and herbal bath ritual.",
        stay: "Private Luxury Pool Villa, Ubud",
      },
      {
        day: 4,
        title: "Campuhan Ridge Walk & Organic Cooking Class",
        description:
          "Scenic sunrise walk on Campuhan Ridge. Hands-on traditional Balinese culinary workshop in an organic herb garden.",
        stay: "Private Luxury Pool Villa, Ubud",
      },
      {
        day: 5,
        title: "To the Ocean • Uluwatu Clifftop Sunset",
        description:
          "Check in to coastal luxury suites. Sunset cocktails and traditional Kecak fire dance overlooking the Indian Ocean.",
        stay: "Coastal Clifftop Boutique Resort",
      },
      {
        day: 6,
        title: "Beach Day & Farewell Seafood Soirée",
        description:
          "Leisure day for swimming, beach clubs, or boutique shopping in Seminyak. Candlelight seafood barbecue dinner right on Jimbaran beach.",
        stay: "Coastal Clifftop Boutique Resort",
      },
      {
        day: 7,
        title: "Departure & Airport Transfers",
        description:
          "Tropical brunch and private transfers to Denpasar Airport for international departures.",
        stay: "Departure Day",
      },
    ],
    inclusions: [
      "6 Nights accommodation in luxury private pool villas & 5★ coastal resort",
      "Daily gourmet organic breakfasts, 3 dinners including Jimbaran beach barbecue",
      "Private air-conditioned island coach and English-speaking female concierge",
      "All temple tickets, sound bath session, and 2-hour spa ritual included",
      "Fernway international trip leader travelling from India",
    ],
    exclusions: ["International flights to Bali (DPS)", "Indonesian Visa on Arrival", "Select lunches"],
  },
];

export default function TripShowcase() {
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  return (
    <section id="trips" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-2">
            <span>✦ 2026 Sisterhood Departures ✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-fern-900">
            Handpicked Curated Journeys
          </h2>
          <p className="mt-4 text-sm sm:text-base text-fern-700 font-light leading-relaxed">
            Every departure is capped at 8 to 14 women to maintain intimacy, luxury, and safety.
            Transparent pricing with no hidden surprises.
          </p>
        </div>

        {/* Trip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TRIPS.map((trip) => (
            <div
              key={trip.id}
              className="group rounded-3xl border border-gold-500/25 bg-ivory-50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Trip Photo Banner with Badges */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-fern-900">
                <img
                  src={trip.heroImage}
                  alt={trip.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-ivory-100 border border-white/20">
                    {trip.duration}
                  </span>
                  <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-fern-950 shadow-md animate-pulse">
                    Only {trip.seatsLeft} seats left
                  </span>
                </div>

                {/* Bottom Photo Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-gold-300 text-xs font-medium uppercase tracking-wider mb-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{trip.region}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-white tracking-wide">
                    {trip.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-fern-800/90 leading-relaxed font-light mb-5">
                    {trip.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-gold-500/20 text-xs text-fern-800">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gold-500" />
                      <span>{trip.dates}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gold-500" />
                      <span>8–{trip.seatsTotal} Women Max</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-fern-600 block">
                        All-Inclusive Price
                      </span>
                      <span className="font-serif text-2xl font-semibold text-fern-900">
                        {trip.price}
                      </span>
                      <span className="text-[11px] text-fern-600 ml-1.5 font-light">
                        (Deposit: {trip.deposit})
                      </span>
                    </div>

                    <span className="rounded-full bg-sage-100 text-sage-700 px-2.5 py-1 text-[11px] font-medium">
                      {trip.fitnessLevel}
                    </span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedTrip(trip)}
                    className="flex-1 rounded-full border border-fern-800/30 bg-white py-2.5 px-4 text-xs sm:text-sm font-semibold text-fern-900 hover:bg-fern-800 hover:text-white transition-all shadow-sm"
                  >
                    View Full Itinerary
                  </button>

                  <a
                    href={`https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%27d%20love%20to%20reserve%20a%20seat%20for%20the%20${encodeURIComponent(
                      trip.title
                    )}%20(${trip.dates})`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-full bg-emerald-700 py-2.5 px-5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-emerald-800 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Reserve</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Need a Custom Cohort? */}
        <div className="mt-14 rounded-2xl bg-fern-50 border border-gold-500/30 p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <Sparkles className="h-6 w-6 text-gold-500 mx-auto mb-2" />
          <h4 className="font-serif text-xl font-medium text-fern-900">
            Travelling with your mother, sister, or best friend?
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-fern-700 font-light">
            You are always welcome to join with a companion! If booking 2 or more seats together,
            you will automatically be placed in a shared private twin room with a ₹4,000 sisterhood credit.
          </p>
          <a
            href="https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20want%20to%20book%20a%20trip%20with%20my%20friend%2Ffamily"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-xs font-semibold text-gold-600 hover:text-fern-900 transition-colors"
          >
            <span>Ask Pallavi about Duo Bookings</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Full Itinerary Modal Drawer */}
      {selectedTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-3xl bg-ivory-100 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-gold-500/40 my-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedTrip(null)}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-fern-800 text-ivory-100 flex items-center justify-center hover:bg-gold-500 hover:text-fern-900 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-gold-500/20 pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                {selectedTrip.duration} • {selectedTrip.region}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-fern-900 mt-1">
                {selectedTrip.title}
              </h3>
              <p className="text-xs sm:text-sm text-fern-700 font-light mt-1">
                {selectedTrip.dates} • {selectedTrip.stayCategory}
              </p>
            </div>

            {/* Itinerary Timeline */}
            <div className="space-y-6">
              <h4 className="font-serif text-lg font-medium text-fern-900 flex items-center gap-2">
                <span>Day-by-Day Experience</span>
              </h4>

              <div className="space-y-4">
                {selectedTrip.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="rounded-2xl border border-gold-500/20 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-gold-600 mb-1">
                      <span>DAY {day.day}</span>
                      <span className="text-[11px] text-fern-600 font-normal">
                        Stay: {day.stay}
                      </span>
                    </div>
                    <h5 className="font-serif text-base font-medium text-fern-900">
                      {day.title}
                    </h5>
                    <p className="mt-1 text-xs text-fern-700 leading-relaxed font-light">
                      {day.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gold-500/20">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    What's Included
                  </h5>
                  <ul className="space-y-1.5 text-xs text-fern-800">
                    {selectedTrip.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-2">
                    What's Not Included
                  </h5>
                  <ul className="space-y-1.5 text-xs text-fern-800">
                    {selectedTrip.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <X className="h-3.5 w-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing & Booking Footer */}
              <div className="mt-6 pt-5 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-4 bg-fern-50 p-4 rounded-2xl">
                <div>
                  <p className="text-[11px] text-fern-600 uppercase tracking-wider">
                    Total Investment
                  </p>
                  <p className="font-serif text-2xl font-bold text-fern-900">
                    {selectedTrip.price}
                  </p>
                  <p className="text-[11px] text-fern-600">
                    Secure with {selectedTrip.deposit} deposit
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/917999919170?text=Hi%20Pallavi%2C%20I%20would%20like%20to%20reserve%20a%20seat%20for%20the%20${encodeURIComponent(
                      selectedTrip.title
                    )}%20(${selectedTrip.dates})`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-emerald-700 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-emerald-800 transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Reserve on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
