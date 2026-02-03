import "./sidebar.css"
import SideBarIcons from "./sidebaricons"
import { FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { usePlayer } from "../../context/playercontext";


export default function SideBar() {
  const {pauseSong}=usePlayer();
  return (
    <div className='main'>
      <img src="/profileimg.jpg" alt="profile" className="profileimg"/>
      <div>
        <SideBarIcons title='Library' to='/library' icons={<IoLibrary />} />
        <SideBarIcons title='Player' to='/player' icons={<FaPlay />} />
      </div>
      <SideBarIcons  icons={<RiLogoutCircleRLine onClick={()=>{pauseSong()}} />}  to="/" />
    </div>
  )
}
