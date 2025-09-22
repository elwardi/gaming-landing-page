"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  // ⏳ Chrono (5 min)
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Convertir secondes → mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // 🔄 Quotes rotation
  const quotes = [
    "Get ready to rule the leaderboard – Play now!",
    "Your next adventure starts here – Download the game!",
    "Tap, play, and conquer – Only in this app!",
    "The ultimate mobile gaming experience awaits you!",
    "Join millions of players and become a champion!",
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000); // change quote every 5 seconds
    return () => clearInterval(quoteTimer);
  }, [quotes.length]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white relative"
      style={{ backgroundImage: "url('/Spo.jpg')" }}
    >
      {/* Overlay sombre + bleu */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-blue-900/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[90%] max-w-3xl bg-blue-900/30 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center border border-blue-400/40"
      >
        <h1 className="text-5xl font-extrabold mb-6 text-blue-400">
          🚀 Exclusive App Deal
        </h1>

        {/* 🔄 Quotes dynamiques */}
        <p className="italic text-xl text-blue-200 mb-6 animate-fade">
          {quotes[currentQuoteIndex]}
        </p>

        <p className="mb-8 text-lg text-gray-200">
          Get premium access for free. Limited time only!
        </p>

        {/* Image mockup */}
        <div className="flex justify-center">
          <Image
            src="/app.JPG"
            alt="App Preview"
            width={220}
            height={400} // adapte selon ton image
            className="rounded-xl mb-8 shadow-lg border-4 border-blue-400/70"
          />
        </div>

        {/* Chrono */}
        <div className="text-3xl font-bold text-blue-300 mb-8 animate-pulse">
          ⏳ Offer ends in {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>

        {/* CTA */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full text-xl py-5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold shadow-lg transform hover:scale-105 transition">
            📲 Download Now
          </button>
        </a>

        <p className="mt-6 text-sm text-gray-300">
          Compatible with iOS & Android 📱
        </p>

        {/* Signature */}
        <p className="mt-8 text-xs text-gray-400 italic">
          Created with passion for mobile gaming by{" "}
          <span className="font-semibold text-blue-300">Youssef Elwardi</span>
        </p>
      </motion.div>
    </div>
  );
}
