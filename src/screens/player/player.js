import { useDroppable } from "@dnd-kit/core";
import { usePlayer } from "../../context/playercontext";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPauseCircleOutline } from "react-icons/io5";

import "./player.css";
import { useState } from "react";

// Add 'isFullPage' as a prop
export default function Player({ isFullPage = false }) {
  const { setNodeRef, isOver } = useDroppable({
    id: "player",
  });

  const { currentSong } = usePlayer();
  const [playing, setplaying] = useState(false);

  const containerClass = `player-container ${isOver ? "is-over" : ""} ${currentSong ? "is-playing" : ""}`;

  // This is the core logic of the player
  const playerContent = (
    <div ref={setNodeRef} className="player-drop-zone">
      <div className={containerClass}>
        <div className="player-text">
          {currentSong ? `▶️ Playing: ${currentSong.title}` : 
           isOver ? "✨ Release to start!" : "📥 Drop a song here"}
        </div>
        {currentSong && (
          <div style={{ marginTop: "10px", zIndex: 10 }}>
            {playing ? (
              <IoPlayCircleOutline onClick={() => setplaying(false)} className="button-img" />
            ) : (
              <IoPauseCircleOutline onClick={() => setplaying(true)} className="button-img" />
            )}
          </div>
        )}
      </div>
    </div>
  );

  // If it's the full page, wrap it in the screen-container. 
  // If not, just return the content.
  return isFullPage ? (
    <div className="screen-container">{playerContent}</div>
  ) : (
    playerContent
  );
}