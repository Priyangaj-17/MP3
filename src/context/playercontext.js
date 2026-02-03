
import { createContext, useContext, useRef, useState } from "react";

// 1️⃣ Create Context (capitalized by convention)
const PlayerContext = createContext();

// 2️⃣ Provider component
export const PlayerProvider = ({ children }) => {
  // 3️⃣ Persistent audio object (does NOT reset on re-render)
  const audioRef = useRef(new Audio());

  // 4️⃣ State to track currently playing song
  const [currentSong, setCurrentSong] = useState(null);
   const [isPlaying, setIsPlaying] = useState(false);

  // 5️⃣ Play a song
  const playSong = (song) => {
    if (!song) return; // safety check

    // If same song is already playing → just resume
    if (currentSong?.id === song.id) {
      audioRef.current.play();
      return;
    }

    // Load new song
    audioRef.current.src = song.url;
    audioRef.current.play();
    setCurrentSong(song);
    setIsPlaying(true);
  };

  // 6️⃣ Pause current song
  const pauseSong = () => {
    audioRef.current.pause();
     setIsPlaying(false);
  };

  // 7️⃣ Provide data/functions globally
  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        currentSong,
        playSong,
        pauseSong,
        isPlaying
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

// 8️⃣ Custom hook to consume PlayerContext
export const usePlayer = () => useContext(PlayerContext);


