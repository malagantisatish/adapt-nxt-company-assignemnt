import { FaBars,FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode,MdMenuBook } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./index.css"

const Header =()=>(
    <nav className="header">
        <div className="logo-bar">
            <img src="" alt="logo"/>
            <FaBars size={30} className="icon"/>
        </div>
        <div className="theme-notificaion">
            <FaRegMoon size={30} className="icon"/>
            <IoIosNotificationsOutline size={30} className="icon"/>
            < MdMenuBook size={30} className="icon"/>
            <img src="" alt="icon"/>
        </div>
    </nav>
)


export default Header