import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { CiDeliveryTruck,CiShare2 } from "react-icons/ci";
import "./index.css"

const SideBar=()=>(
    <div className="sidebar">
        <div className="option">
            <AiOutlineDashboard size={30}/>
            <p>Dashboard</p>
        </div>
        <div className="option">
            <IoPricetagOutline size={30}/>
            <p>Inventory</p>
        </div>
        <div className="option">
            <SlNotebook size={30}/>
            <p>Orders</p>
        </div>
        <div className="option">
            <CiDeliveryTruck size={30}/>
            <p>Shipping</p>
        </div>
        <div className="option">
            <CiShare2 size={30}/>
            <p>Channel</p>
        </div>
    </div>
)

export default SideBar