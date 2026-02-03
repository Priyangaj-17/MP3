import { pointerWithin } from "@dnd-kit/core"; //this helps to  make the element draggable
import SongItem from "../../components/sideBar/songitem/songitem";
import songs from "../../data/song";
import { DndContext,PointerSensor, 
  useSensor, 
  useSensors } from '@dnd-kit/core';
import { useState } from "react";
import Player from "../player/player";
import { usePlayer } from "../../context/playercontext";
import "./library.css"
export default function Library() {
  const { playSong } = usePlayer(); // Grab the play function
    const [currentSong,setCurrentSong] = useState(null);
     const sensors=useSensors(
        useSensor(PointerSensor, {
          activationConstraint: {
            distance: 5, 
          },
        })
      );
    const handleDrag = (event) => {
    const { active} = event;
  console.log("Dropped over:", event.over?.id); // Should say "player"
  console.log("Song data:", event.active.data.current?.song);
  
  if (event.over?.id === "player") {
    
    const droppedSong = active.data.current.song;
    playSong(droppedSong);
    setCurrentSong(event.active.data.current.song);
  }
};
  return (
    <div className="screen-container">
         <div className="song-items">
       <DndContext sensors={sensors} collisionDetection={pointerWithin} onDragEnd={handleDrag}>
         {songs.map((song) => (
           <SongItem key={song.id} song={song} />   
         ))}
        <Player currentSong={currentSong}/>
     </DndContext>
       </div>
     </div>
     
  );
}