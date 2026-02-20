import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { mockData } from '../mock';
import '../pages-styles.css';

const Page2 = ({ onScrollToNext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [hideGiftBox, setHideGiftBox] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const videoRef = useRef(null);

  const handleGiftClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Hide gift box and show video after opening animation
      setTimeout(() => {
        setHideGiftBox(true);
        setShowVideo(true);
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        }, 300);
      }, 1000);
    }
  };

  const handleVideoEnded = () => {
    setShowScroll(true);
  };

  return (
    <div className="page-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Festive background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-200 to-red-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,105,180,0.3),transparent_50%)]"></div>
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: ['#ff69b4', '#ff1493', '#ff6b9d', '#ffc0cb', '#da70d6'][Math.floor(Math.random() * 5)]
            }}
          ></div>
        ))}
      </div>

      {/* Glowing particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Birthday wish */}
        {!isOpen && (
          <div className="mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-4">
              Alright, moment of truth — what’s hiding in here
            </h2>
            <p className="text-2xl text-pink-700 font-medium">
              {`For ${mockData.birthdayPerson}`}
            </p>
          </div>
        )}

        {/* 3D Gift Box */}
        {!hideGiftBox && (
          <div className="gift-box-container relative mt-10">
            <div
              className={`gift-box ${isOpen ? 'gift-box-open gift-box-vanish' : ''} ${!isOpen ? 'cursor-pointer' : ''}`}
              onClick={handleGiftClick}
            >
              {/* Box base */}
              <div className="box-base">
                <div className="box-side box-front"></div>
                <div className="box-side box-back"></div>
                <div className="box-side box-left"></div>
                <div className="box-side box-right"></div>
                <div className="box-side box-bottom"></div>
              </div>

              {/* Box lid */}
              <div className="box-lid">
                <div className="lid-side lid-top"></div>
                <div className="lid-side lid-front"></div>
                <div className="lid-side lid-back"></div>
                <div className="lid-side lid-left"></div>
                <div className="lid-side lid-right"></div>

                {/* Ribbon */}
                <div className="ribbon-vertical"></div>
                <div className="ribbon-horizontal"></div>
                <div className="ribbon-bow"></div>
              </div>
            </div>
          </div>
        )}

        {/* Video container - appears after gift box vanishes */}
        {showVideo && (
          <div className="standalone-video-container">
            <video
              ref={videoRef}
              src={mockData.videoUrl}
              onEnded={handleVideoEnded}
              controls
              className="standalone-video-player"
            />
          </div>
        )}

        {/* Instruction */}
        {!isOpen && !showScroll && (
          <p className="text-xl text-purple-700 mt-8 animate-pulse font-medium">
            Click the gift box to open!
          </p>
        )}

        {/* Scroll button */}
        {showScroll && (
          <button
            onClick={onScrollToNext}
            className="scroll-button mt-12 animate-bounce-in"
          >
            <span className="text-lg font-semibold text-white mb-2 block">Scroll Down</span>
            <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Page2;
