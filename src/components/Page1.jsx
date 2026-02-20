import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { mockData } from '../mock';
import '../pages-styles.css';

const Page1 = ({ onComplete }) => {
  const [candleLit, setCandleLit] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleCandleClick = () => {
    if (!candleLit) {
      setCandleLit(true);
      setShowFireworks(true);
      setShowMessage(true);

      setTimeout(() => {
        onComplete();
      }, 5000);
    }
  };

  return (
    <div className="page-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-200 to-red-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.3),transparent_50%)] animate-pulse-slow"></div>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-heart absolute text-red-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 15}px`
            }}
          >
            <Heart className="w-[1em] h-[1em]" fill="currentColor" strokeWidth={1.5} />
          </div>
        ))}
      </div>

      {/* Fireworks effect */}
      {showFireworks && (
        <div className="fireworks-container absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="firework"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* 3D Heart with cake */}
        <div className="heart-container relative">
          <div className="heart-3d">
            <div className="heart-side heart-front"></div>
            <div className="heart-side heart-back"></div>
            <div className="heart-side heart-left"></div>
            <div className="heart-side heart-right"></div>
            <div className="heart-side heart-top"></div>
            <div className="heart-side heart-bottom"></div>
          </div>

          {/* Birthday cake */}
          <div className="cake-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="cake relative">
              {/* Cake layers */}
              <div className="cake-layer cake-layer-3"></div>
              <div className="cake-layer cake-layer-2"></div>
              <div className="cake-layer cake-layer-1"></div>

              {/* Candle */}
              <div
                className="candle-wrapper cursor-pointer"
                onClick={handleCandleClick}
              >
                <div className="candle"></div>
                <div className={`flame ${candleLit ? 'flame-lit' : ''}`}></div>
                {candleLit && <div className="flame-glow"></div>}
              </div>
            </div>
          </div>
        </div>

        {/* Birthday message */}
        {showMessage && (
          <div className="birthday-message mt-12 animate-fade-in-up">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-purple-600 animate-gradient">
              Happy Birthday
            </h1>
            <p className="text-3xl text-pink-700 mt-4 font-semibold animate-bounce-slow">
              {mockData.birthdayPerson}
            </p>
          </div>
        )}

        {/* Instruction text (only show if candle not lit) */}
        {!candleLit && (
          <p className="text-xl text-pink-700 mt-12 animate-pulse font-medium">
            Click the candle to light it
          </p>
        )}
      </div>
    </div>
  );
};

export default Page1;
