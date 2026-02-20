import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { mockData } from '../mock';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        setIsMuted(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={mockData.backgroundMusicUrl} />
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label={isMuted ? "Play music" : "Pause music"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white animate-pulse" />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;