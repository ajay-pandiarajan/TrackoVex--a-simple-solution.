import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * TrackoVex Vector Logo Component
 * Consists of the letters "TV" with a location pin inside the 'V' and radio waves radiating out.
 */
export const TrackoVexLogo = ({ size = 96, isNeon = true, badgeMode = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: badgeMode
          ? "drop-shadow(0 0 4px #00f2fe) drop-shadow(0 0 10px rgba(0, 242, 254, 0.7))"
          : isNeon
          ? "drop-shadow(0 0 6px #00f2fe) drop-shadow(0 0 18px rgba(0, 242, 254, 0.85)) drop-shadow(0 0 45px rgba(0, 242, 254, 0.55))"
          : "none",
      }}
    >
      {/* Concentric Radio Waves / Signal Arcs above Pin */}
      <path
        d="M48 24C55.5 19.5 64.5 19.5 72 24"
        stroke="#00f2fe"
        strokeWidth="3.2"
        strokeLinecap="round"
        className="animate-pulse"
      />
      <path
        d="M41 15C53 8 67 8 79 15"
        stroke="#00f2fe"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M34 6C50 -3 70 -3 86 6"
        stroke="#00f2fe"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Letter "T" */}
      <path
        d="M18 42 H46 M32 42 V98"
        stroke="#00f2fe"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter "V" */}
      <path
        d="M49 42 L66 102 L95 42"
        stroke="#00f2fe"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Location Pin inside the 'V' */}
      <g transform="translate(66, 64)">
        {/* Teardrop Pin */}
        <path
          d="M0 -22 C-9.5 -22 -14 -16 -14 -8 C-14 2 0 16 0 16 C0 16 14 2 14 -8 C14 -16 9.5 -22 0 -22 Z"
          fill="#00f2fe"
        />
        {/* Inner Cutout */}
        <circle cx="0" cy="-8" r="4.5" fill="#000000" />
      </g>
    </svg>
  );
};

/**
 * Minimalist Outline SVG Icons matching Apple SF Symbols
 */
export const Icons = {
  VolumeSpeaker: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    </svg>
  ),
  PencilEdit: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
      <path d="m15 5 4 4"></path>
    </svg>
  ),
  InfoCircle: () => (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16v-4"></path>
      <path d="M12 8h.01"></path>
    </svg>
  ),
  Copy: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
    </svg>
  ),
  MapPin: ({ active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth={active ? "2.5" : "1.8"} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  DevicesCards: ({ active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth={active ? "2.5" : "1.8"} strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="12" x="2" y="4" rx="2"></rect>
      <path d="M6 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2"></path>
    </svg>
  ),
  RadarTarget: ({ active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth={active ? "2.5" : "1.8"} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  ),
  Grid: ({ active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth={active ? "2.5" : "1.8"} strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1.5"></rect>
      <rect width="7" height="7" x="14" y="3" rx="1.5"></rect>
      <rect width="7" height="7" x="14" y="14" rx="1.5"></rect>
      <rect width="7" height="7" x="3" y="14" rx="1.5"></rect>
    </svg>
  ),
  Settings: ({ active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth={active ? "2.5" : "1.8"} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  )
};

/**
 * Web Audio API Acoustic Locator Sound Synthesizer
 */
const playLocatorChirp = () => {
  if (typeof window === "undefined") return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    // Dual acoustic chirp sweep
    osc.frequency.setValueAtTime(920, now);
    osc.frequency.exponentialRampToValueAtTime(1840, now + 0.12);
    osc.frequency.setValueAtTime(1320, now + 0.18);
    osc.frequency.exponentialRampToValueAtTime(2200, now + 0.32);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.45);
  } catch (err) {
    console.error("Audio playback error:", err);
  }
};

/**
 * Main TrackoVex Application Component
 */
export default function TrackoVexApp() {
  // Phase 1: Splash Screen active from 0 to 2 seconds
  const [splashActive, setSplashActive] = useState(true);

  // Header Toggle: "Devices" vs "Items"
  const [activeToggle, setActiveToggle] = useState("Devices");

  // Bottom Navigation Active Tab
  const [activeTab, setActiveTab] = useState(1);

  // Device Data
  const [deviceName, setDeviceName] = useState("My TV (Keys)");
  const [isBuzzerActive, setIsBuzzerActive] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [tempName, setTempName] = useState("My TV (Keys)");
  const [showAboutDetails, setShowAboutDetails] = useState(false);
  const [copiedSerial, setCopiedSerial] = useState(false);

  // Exact 2-second splash screen transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashActive(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Alert Buzzer Trigger
  const handleAlertBuzzer = () => {
    setIsBuzzerActive(true);
    playLocatorChirp();
    setTimeout(() => playLocatorChirp(), 350);
    setTimeout(() => playLocatorChirp(), 700);

    setTimeout(() => {
      setIsBuzzerActive(false);
    }, 2500);
  };

  // Copy Serial Action
  const handleCopySerial = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("••••••••9MV");
    }
    setCopiedSerial(true);
    setTimeout(() => setCopiedSerial(false), 2000);
  };

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "SF Pro", "Helvetica Neue", sans-serif',
      }}
      className="relative w-full max-w-[420px] h-[100dvh] max-h-[890px] mx-auto overflow-hidden bg-black sm:rounded-[46px] shadow-2xl sm:border-[8px] sm:border-[#1e2229]"
    >
      {/* ====================================================================
          PHASE 1: SPLASH SCREEN (0 TO 2 SECONDS)
          - Pitch-black background
          - Glowing neon cyan TrackoVex TV logo
          - Exactly 2.0s duration
          - Smooth zoom-out and fade transition
          ==================================================================== */}
      <AnimatePresence>
        {splashActive && (
          <motion.div
            key="splash-screen"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.72,
              transition: {
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black px-6"
          >
            {/* Ambient Cyan Pulse */}
            <div className="absolute w-64 h-64 rounded-full bg-[#00f2fe] opacity-15 filter blur-[75px] pointer-events-none animate-pulse" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <TrackoVexLogo size={120} isNeon={true} />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-6 flex flex-col items-center"
              >
                <h1
                  style={{
                    color: "#00f2fe",
                    textShadow:
                      "0 0 8px #00f2fe, 0 0 22px rgba(0, 242, 254, 0.9), 0 0 45px rgba(0, 242, 254, 0.6)",
                  }}
                  className="text-3xl font-bold tracking-tight"
                >
                  TrackoVex
                </h1>
                <p className="mt-2 text-xs font-medium tracking-[0.3em] uppercase text-[#00f2fe] opacity-80">
                  PRECISION TRACKING
                </p>
              </motion.div>
            </motion.div>

            {/* Bottom Triple Pulse Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="absolute bottom-12 flex items-center space-x-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================================================================
          PHASE 2: MAIN HOME SCREEN (APPEARS AFTER 2 SECONDS)
          - Soft, minimal light gray / off-white background (#f4f5f8)
          - All text strictly black
          - Heavy liquid glassmorphism
          - Strictly NO map UI
          ==================================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{
          opacity: splashActive ? 0 : 1,
          scale: splashActive ? 1.05 : 1,
        }}
        transition={{
          duration: 0.85,
          delay: 0.05,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ color: "#000000" }}
        className="relative w-full h-full flex flex-col justify-between bg-[#f4f5f8] overflow-hidden select-none"
      >
        {/* Soft Organic Refraction Blobs */}
        <div className="absolute w-80 h-80 -top-16 -left-16 rounded-full bg-white opacity-85 filter blur-[55px] pointer-events-none" />
        <div className="absolute w-72 h-72 top-48 -right-20 rounded-full bg-[#e2e6ee] opacity-75 filter blur-[55px] pointer-events-none" />
        <div className="absolute w-96 h-96 -bottom-24 left-10 rounded-full bg-[#eef1f7] opacity-90 filter blur-[55px] pointer-events-none" />

        {/* iOS Top Status Bar */}
        <div className="relative z-20 w-full pt-3 px-7 flex items-center justify-between text-xs font-semibold text-black">
          <span>9:41</span>
          <div className="w-24 h-4 bg-black rounded-full mx-auto my-0 opacity-90 hidden sm:block" />
          <div className="flex items-center space-x-2">
            <svg width="15" height="11" viewBox="0 0 17 11" fill="#000000">
              <rect x="0" y="8" width="3" height="3" rx="0.5" />
              <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.5" />
              <rect x="9" y="3" width="3" height="8" rx="0.5" />
              <rect x="13.5" y="0" width="3" height="11" rx="0.5" />
            </svg>
            <div className="w-5 h-2.5 border border-black rounded-[3px] p-[1px] flex items-center">
              <div className="h-full w-3.5 bg-black rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Scrollable Viewport Container */}
        <div className="relative z-10 flex-1 overflow-y-auto px-6 pt-5 pb-28">
          {/* Header */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-extrabold tracking-tight text-black">
                Browse
              </h1>
              <div
                style={{
                  backdropFilter: "blur(16px)",
                  background: "rgba(255, 255, 255, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                }}
                className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold text-black shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span>Radar Active</span>
              </div>
            </div>

            {/* Glassmorphic Pills: "Devices" vs "Items" */}
            <div
              style={{
                backdropFilter: "blur(16px)",
                background: "rgba(255, 255, 255, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
              }}
              className="w-full p-1 rounded-full flex items-center relative shadow-sm"
            >
              <button
                onClick={() => setActiveToggle("Devices")}
                className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 ${
                  activeToggle === "Devices"
                    ? "bg-black text-white shadow-md font-bold"
                    : "text-black bg-transparent"
                }`}
              >
                Devices
              </button>
              <button
                onClick={() => setActiveToggle("Items")}
                className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 ${
                  activeToggle === "Items"
                    ? "bg-black text-white shadow-md font-bold"
                    : "text-black bg-transparent"
                }`}
              >
                Items
              </button>
            </div>
          </div>

          {/* "My Items" Section */}
          <div className="mt-8 flex flex-col space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight text-black">
                My Items
              </h2>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-black/5 text-black">
                1 Online
              </span>
            </div>

            {/* Glassmorphic Card: "My TV (Keys)" with Cyan Logo Badge */}
            <motion.div
              whileHover={{ y: -2 }}
              style={{
                backdropFilter: "blur(16px)",
                background: "rgba(255, 255, 255, 0.42)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow:
                  "0 18px 40px -10px rgba(0, 0, 0, 0.06), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.95)",
              }}
              className="w-full p-5 rounded-[28px] flex items-center justify-between relative overflow-hidden"
            >
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-xs uppercase tracking-wider font-extrabold text-black opacity-60">
                  Primary Tag
                </span>
                <h3 className="text-2xl font-black tracking-tight text-black">
                  {deviceName}
                </h3>
                <div className="flex items-center space-x-2 pt-1 text-xs font-bold text-black">
                  <span className="w-2 h-2 rounded-full bg-black" />
                  <span>Connected • Nearby (1.2m)</span>
                </div>
              </div>

              {/* Glowing Cyan TrackoVex Badge */}
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-black border border-white/20 shadow-lg">
                <TrackoVexLogo size={42} isNeon={true} badgeMode={true} />
              </div>
            </motion.div>

            {/* Stack of 3 Pill-Shaped Frosted Glass Buttons */}
            <div className="flex flex-col space-y-3 pt-1">
              {/* Button 1: Alert Buzzer */}
              <button
                onClick={handleAlertBuzzer}
                style={{
                  backdropFilter: "blur(16px)",
                  background: isBuzzerActive
                    ? "rgba(255, 255, 255, 0.75)"
                    : "rgba(255, 255, 255, 0.45)",
                  border: "1px solid rgba(255, 255, 255, 0.85)",
                  boxShadow:
                    "0 6px 16px -2px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)",
                }}
                className={`w-full py-4 px-6 rounded-full flex items-center justify-between transition active:scale-98 ${
                  isBuzzerActive ? "ring-2 ring-black" : ""
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className={`p-1.5 rounded-full ${isBuzzerActive ? "bg-black text-white" : ""}`}>
                    <Icons.VolumeSpeaker />
                  </div>
                  <span className="text-base font-bold text-black">
                    {isBuzzerActive ? "Buzzer Sounding..." : "Alert Buzzer"}
                  </span>
                </div>
                {isBuzzerActive ? (
                  <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-black text-white animate-pulse">
                    Chirping
                  </span>
                ) : (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/5 text-black">
                    Play Chime
                  </span>
                )}
              </button>

              {/* Button 2: Rename TrackoVex */}
              <button
                onClick={() => {
                  setTempName(deviceName);
                  setShowRenameModal(true);
                }}
                style={{
                  backdropFilter: "blur(16px)",
                  background: "rgba(255, 255, 255, 0.45)",
                  border: "1px solid rgba(255, 255, 255, 0.85)",
                  boxShadow:
                    "0 6px 16px -2px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)",
                }}
                className="w-full py-4 px-6 rounded-full flex items-center justify-between transition active:scale-98"
              >
                <div className="flex items-center space-x-3.5">
                  <Icons.PencilEdit />
                  <span className="text-base font-bold text-black">
                    Rename TrackoVex
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/5 text-black">
                  Edit
                </span>
              </button>

              {/* Button 3: About */}
              <button
                onClick={() => setShowAboutDetails(!showAboutDetails)}
                style={{
                  backdropFilter: "blur(16px)",
                  background: "rgba(255, 255, 255, 0.45)",
                  border: "1px solid rgba(255, 255, 255, 0.85)",
                  boxShadow:
                    "0 6px 16px -2px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)",
                }}
                className="w-full py-4 px-6 rounded-full flex items-center justify-between transition active:scale-98"
              >
                <div className="flex items-center space-x-3.5">
                  <Icons.InfoCircle />
                  <span className="text-base font-bold text-black">
                    About
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/5 text-black">
                  {showAboutDetails ? "Hide" : "Details"}
                </span>
              </button>

              {/* Animated Diagnostics Drawer */}
              <AnimatePresence>
                {showAboutDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      style={{
                        backdropFilter: "blur(16px)",
                        background: "rgba(255, 255, 255, 0.4)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                      }}
                      className="p-4 rounded-2xl text-xs text-black font-medium space-y-2 shadow-sm"
                    >
                      <div className="flex justify-between">
                        <span className="font-semibold text-black">Battery Level</span>
                        <span className="font-bold text-black">98% • Optimal</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-black">Protocol</span>
                        <span className="font-bold text-black">Bluetooth 5.3 + UWB Ultra</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-black">Signal Strength</span>
                        <span className="font-bold text-black">-42 dBm (Excellent)</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Embedded Frosted Glass Info Panel */}
            <div
              style={{
                backdropFilter: "blur(16px)",
                background: "rgba(255, 255, 255, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow:
                  "0 12px 32px 0 rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.85)",
              }}
              className="mt-4 p-5 rounded-[26px] flex flex-col space-y-4"
            >
              <div className="border-b border-black/10 pb-2">
                <span className="text-xs font-black uppercase tracking-wider text-black opacity-70">
                  Hardware Specifications
                </span>
              </div>

              {/* Serial Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-black">
                  Serial Number
                </span>
                <button
                  onClick={handleCopySerial}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/60 border border-white/80 active:scale-95 transition"
                  title="Click to copy serial number"
                >
                  <span className="font-mono text-sm font-bold tracking-wider text-black">
                    ••••••••9MV
                  </span>
                  {copiedSerial ? (
                    <span className="text-xs font-bold text-black">Copied!</span>
                  ) : (
                    <Icons.Copy />
                  )}
                </button>
              </div>

              {/* Firmware */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-black">
                  Firmware
                </span>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sm font-bold text-black">
                    2.0.73
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black text-white">
                    Current
                  </span>
                </div>
              </div>

              {/* Model */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-black">
                  Model
                </span>
                <span className="text-sm font-black tracking-tight text-black">
                  TrackoVex
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Frosted Glass Bottom Navigation Bar */}
        <div
          style={{
            backdropFilter: "blur(20px)",
            background: "rgba(255, 255, 255, 0.6)",
            borderTop: "1px solid rgba(255, 255, 255, 0.85)",
            boxShadow:
              "0 -10px 30px -5px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)",
          }}
          className="absolute bottom-0 left-0 right-0 z-30 pb-5 pt-3.5 px-6"
        >
          <div className="flex items-center justify-between max-w-sm mx-auto">
            {/* 1. Map Pin */}
            <button
              onClick={() => setActiveTab(0)}
              className="flex flex-col items-center justify-center p-2 rounded-2xl transition active:scale-90"
              aria-label="Map Pin"
            >
              <Icons.MapPin active={activeTab === 0} />
              {activeTab === 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-black mt-1" />
              )}
            </button>

            {/* 2. Devices/Cards */}
            <button
              onClick={() => setActiveTab(1)}
              className="flex flex-col items-center justify-center p-2 rounded-2xl transition active:scale-90"
              aria-label="Devices and Cards"
            >
              <Icons.DevicesCards active={activeTab === 1} />
              {activeTab === 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-black mt-1" />
              )}
            </button>

            {/* 3. Radar/Target */}
            <button
              onClick={() => setActiveTab(2)}
              className="flex flex-col items-center justify-center p-2 rounded-2xl transition active:scale-90"
              aria-label="Radar Target"
            >
              <Icons.RadarTarget active={activeTab === 2} />
              {activeTab === 2 && (
                <span className="w-1.5 h-1.5 rounded-full bg-black mt-1" />
              )}
            </button>

            {/* 4. Grid */}
            <button
              onClick={() => setActiveTab(3)}
              className="flex flex-col items-center justify-center p-2 rounded-2xl transition active:scale-90"
              aria-label="Grid"
            >
              <Icons.Grid active={activeTab === 3} />
              {activeTab === 3 && (
                <span className="w-1.5 h-1.5 rounded-full bg-black mt-1" />
              )}
            </button>

            {/* 5. Settings */}
            <button
              onClick={() => setActiveTab(4)}
              className="flex flex-col items-center justify-center p-2 rounded-2xl transition active:scale-90"
              aria-label="Settings"
            >
              <Icons.Settings active={activeTab === 4} />
              {activeTab === 4 && (
                <span className="w-1.5 h-1.5 rounded-full bg-black mt-1" />
              )}
            </button>
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="w-32 h-1 bg-black rounded-full mx-auto mt-3 opacity-60" />
        </div>

        {/* Rename Modal */}
        <AnimatePresence>
          {showRenameModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
            >
              <motion.div
                initial={{ y: 80, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 80, scale: 0.95 }}
                style={{
                  backdropFilter: "blur(20px)",
                  background: "rgba(255, 255, 255, 0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.9)",
                }}
                className="w-full max-w-sm rounded-[32px] p-6 shadow-2xl flex flex-col space-y-4"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-black text-black">Rename TrackoVex</h4>
                  <button
                    onClick={() => setShowRenameModal(false)}
                    className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black font-bold"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-xs font-semibold text-black opacity-70">
                  Choose a descriptive name for your tracking device.
                </p>

                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  placeholder="e.g. My TV (Keys)"
                  className="w-full py-3 px-4 rounded-xl bg-white border border-black/20 text-black font-bold text-base focus:outline-none focus:ring-2 focus:ring-black"
                />

                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={() => setShowRenameModal(false)}
                    className="flex-1 py-3 rounded-full bg-black/5 text-black font-bold text-sm active:scale-95 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (tempName.trim()) setDeviceName(tempName.trim());
                      setShowRenameModal(false);
                    }}
                    className="flex-1 py-3 rounded-full bg-black text-white font-bold text-sm shadow-md active:scale-95 transition"
                  >
                    Save Name
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
