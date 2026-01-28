import "./sidebar.css"
import SideBarIcons from "./sidebaricons"
import { IoMdBackspace, IoMdTrendingUp } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function SideBar() {
  return (
    <div className='main'>
      <img src="/profileimg.jpg" alt="profile" className="profileimg"/>
      <div>
        <SideBarIcons title='Trending' to='/trending' icons={<IoMdTrendingUp />} />
        <SideBarIcons title='Library' to='/' icons={<IoLibrary />} />
        <SideBarIcons title='Favourites' to='/favourites' icons={<MdFavorite />} />
        <SideBarIcons title='Player' to='/player' icons={<FaPlay />} />
        <SideBarIcons title='Feed' to='/feed' icons={<IoMdBackspace />} />
      </div>
      <SideBarIcons title='Logout' to='/logout' icons={<RiLogoutCircleRLine />} />
    </div>
  )
}
