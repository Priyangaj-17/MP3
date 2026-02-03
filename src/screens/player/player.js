import { useDroppable } from "@dnd-kit/core";
import { usePlayer } from "../../context/playercontext";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPauseCircleOutline } from "react-icons/io5";

import "./player.css";

// Add 'isFullPage' as a prop
export default function Player({ isFullPage = false }) {
  const { setNodeRef, isOver } = useDroppable({
    id: "player",
  });

  const { currentSong,playSong,pauseSong ,isPlaying} = usePlayer();


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
            {isPlaying ? (
              <IoPauseCircleOutline  onClick={pauseSong}  className="button-img" />
            ) : (
              
              <IoPlayCircleOutline  onClick={() => playSong(currentSong)} className="button-img" />
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