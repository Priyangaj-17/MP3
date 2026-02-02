import { useDraggable } from "@dnd-kit/core"; // makes the element draggable
import './songitem.css'
import { CSS } from "@dnd-kit/utilities";
function SongItem({ song }) {
  const { attributes, listeners, setNodeRef,transform,transition,isDragging } = useDraggable({
    id: song.id,       // unique id for the dragged song
    data: { song },    // attach song data to drag event
  });
 
   const style={
    transition,
    transform:CSS.Transform.toString(transform),
    width:'200px',
    maxwidth:"200px",
    minwidth:"200px",
    cursor: isDragging ? 'grabbing' : 'grab',
    opacity: isDragging ? 0.4 : 1,
    border: isDragging ? "1px dashed #ccc" : "",
    touchAction:"none",
  }

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes} {...listeners} 
      className="song-container"
    >
      <div>
        <div className="img">
          <img src={song.image}  width={80}
        height={80}/>
        </div>
     <div className="each-song" 
      >
        
       {song.title}
      </div>
      </div>
    </div>
  );
}

export default SongItem;
