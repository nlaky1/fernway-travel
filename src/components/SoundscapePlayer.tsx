"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

interface AudioNodeHandle {
  stop: () => void;
  disconnect?: () => void;
}

interface SoundscapePlayerProps {
  destinationName: string;
}

export default function SoundscapePlayer({ destinationName }: SoundscapePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRefs = useRef<AudioNodeHandle[]>([]);

  const stopAudio = () => {
    oscillatorRefs.current.forEach((node) => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch {
        // ignore
      }
    });
    oscillatorRefs.current = [];
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      } else if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;

      // Master gentle gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.06, now);
      masterGain.connect(ctx.destination);

      // Create gentle wind noise buffer
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Soft low-pass filter for whispering breeze
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(420, now);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start(now);
      oscillatorRefs.current.push(whiteNoise);

      // Subtle serene melodic chime (chime chords tuned to pentatonic calm)
      const frequencies = [261.63, 329.63, 392.0, 523.25]; // C, E, G, C
      const chimeGain = ctx.createGain();
      chimeGain.gain.setValueAtTime(0.03, now);
      chimeGain.connect(ctx.destination);

      const chimeInterval = setInterval(() => {
        if (!isPlaying && !audioCtxRef.current) return;
        const note = frequencies[Math.floor(Math.random() * frequencies.length)];
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(note, ctx.currentTime);

        noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.1);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

        osc.connect(noteGain);
        noteGain.connect(chimeGain);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 2.6);
      }, 3500);

      oscillatorRefs.current.push({
        stop: () => clearInterval(chimeInterval),
        disconnect: () => {},
      });

      setIsPlaying(true);
    } catch (err) {
      console.warn("Web Audio not supported or blocked by browser gesture", err);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute serene soundscape" : "Play ambient nature soundscape"}
      className={`group flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 ${
        isPlaying
          ? "bg-gold-500 text-white shadow-md shadow-gold-500/30"
          : "bg-white/80 text-fern-800 backdrop-blur-md hover:bg-white hover:text-gold-600 shadow-sm"
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="h-3.5 w-3.5 animate-pulse text-white" />
          <span>Whispering {destinationName}</span>
          <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-ping" />
        </>
      ) : (
        <>
          <VolumeX className="h-3.5 w-3.5 text-fern-700 group-hover:text-gold-600" />
          <span>Listen to {destinationName}</span>
          <Sparkles className="h-3 w-3 text-gold-500" />
        </>
      )}
    </button>
  );
}
