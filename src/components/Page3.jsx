import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { mockData } from '../mock';
import '../pages-styles.css';

const Page3 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="page-section relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Romantic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-200 via-pink-200 to-purple-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,105,180,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(218,112,214,0.2),transparent_60%)]"></div>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="floating-heart-slow absolute text-red-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              fontSize: `${Math.random() * 30 + 20}px`
            }}
          >
            <Heart className="w-[1em] h-[1em]" fill="currentColor" strokeWidth={1.5} />
          </div>
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="glow-orb"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-purple-600 mb-4">
            Have a Beautiful Journey
          </h2>
          <p className="text-2xl text-pink-700 font-medium">
            Towrads your future
          </p>
        </div>

        {/* Photo gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {mockData.galleryPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="photo-frame-wrapper animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                transform: `translate(${mousePosition.x * (index % 2 === 0 ? 1 : -1) * 0.5}px, ${mousePosition.y * (index % 2 === 0 ? 1 : -1) * 0.5}px)`
              }}
            >
              {/* 3D Photo frame */}
              <div className="photo-frame">
                <div className="frame-inner">
                  <img
                    src={photo.url}
                    alt={`Memory ${photo.id}`}
                    className="frame-image"
                    style={{
                      objectPosition:
                        photo.id === 2 || photo.id === 3 || photo.id === 4 ? "center 35%" : "center"
                    }}
                    loading="lazy"
                  />
                  <div className="frame-border"></div>
                  <div className="frame-shadow"></div>
                </div>

                {/* Photo glow effect */}
                <div className="photo-glow"></div>
              </div>

              {/* Quote */}
              <div className="quote-container mt-6">
                <p className="text-lg text-pink-800 font-medium italic text-center leading-relaxed">
                  "{photo.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer message */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            {`Happy Birthday, ${mockData.birthdayPerson}!`}
          </p>
          <p className="text-xl text-pink-700 mt-4 font-medium">
            May your future be filled with infinite love and happiness
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;
