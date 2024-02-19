import {Component} from "react"
import { CiSettings,CiSearch} from "react-icons/ci";
import { LiaFileImportSolid } from "react-icons/lia";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoPrintOutline } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";
import { AiFillFilter } from "react-icons/ai";
import { TbCaretUpDownFilled } from "react-icons/tb";
import { FiPlusSquare } from "react-icons/fi";
import { FaSackDollar,FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import Header from "../Header"
import SideBar from "../SideBar"
import "./index.css"

const statusList=[
        {id:"pending",status:"Pending"},
        {id:"accepted",status:"Accepted"},
        {id:"awb-created",status:"AWB Created"},
        {id:"ready-to-ship",status:"Ready To Ship"},
        {id:"shipping",status:"Shipping"},
        {id:"completed",status:"Completed"},
        {id:"cancelled",status:"Cancelled"}
]

const orderData = [
    {orderNo:1,orderDate:"2022-04-05",city:"Locknow",customerName:"Abhishek Dixit",orderValue:0.0,status:"Pending",operations:"Action"},
    {orderNo:2,orderDate:"2022-04-05",city:"Locknow",customerName:"Abhishek Dixit",orderValue:0.0,status:"Pending",operations:"Action"},
    {orderNo:3,orderDate:"2022-04-05",city:"Locknow",customerName:"Abhishek Dixit",orderValue:0.0,status:"Pending",operations:"Action"}
]


class Home extends Component{


    renderTheTabluarForm=()=>(
        <table>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" />
                    </th>
                    <th>
                        <div className="table-column">
                        Channel
                        <AiFillFilter size={20} className="table-icon"/>
                        <TbCaretUpDownFilled size={20} className="table-icon"/>
                        </div>
                    </th>
                    <th>
                    <div className="table-column">
                        Order Number
                        <CiSearch size={20} className="table-icon"/>
                        <TbCaretUpDownFilled size={20} className="table-icon"/>
                        </div>
                    </th>
                    <th>
                    <div className="table-column">
                        Order Date
                        <CiSearch size={20} className="table-icon"/>
                        <TbCaretUpDownFilled size={20} className="table-icon"/>
                        </div>
                    </th>
                    <th>
                    <div className="table-column">
                        City
                        <TbCaretUpDownFilled size={20} className="table-icon"/>
                        </div>
                    </th>
                    <th>
                    <div className="table-column">
                      customer Name
                        <CiSearch size={20} className="table-icon"/>
                        <TbCaretUpDownFilled size={20} className="table-icon"/>
                    </div>
                    </th>
                    <th>
                    <div className="table-column">
                        Order Value
                        <TbCaretUpDownFilled size={20} className="table-icon"/>
                        </div>
                    </th>
                    <th>
                    <div className="table-column">
                     Status
                        <TbCaretUpDownFilled size={20} className="table-icon"/>
                        </div>
                    </th>
                    <th>
                        Operations
                    </th>
                </tr>
            </thead>
            <tbody>
                {orderData.map(each=>(
                    <tr key={each.orderNo}>
                        <td>
                            <div className="table-column">
                                <FiPlusSquare size={20}/>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>
                            <FaSackDollar size={30} className="bag-icon"/>
                        </td>
                        <td>{each.orderNo}</td>
                        <td>{each.orderDate}</td>
                        <td>{each.city}</td>
                        <td>{each.customerName}</td>
                        <td>{each.orderValue}</td>
                        <td>{each.status}</td>
                        <td>{each.operations}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

    renderTheHomePage=()=>(
        <div className="home-container">
            <div className="current-task-setting-btn">
                <button type="button" className="order-btn">Order <span className="cancel">×</span></button>
                <CiSettings size={30} className="icon" />
            </div>
            <ul className="status-list">
                {statusList.map(each=>(
                    <li key={each.id} className="status">{each.status}</li>
                ))}
            </ul>
            <div className="order-details">
                <div className="category-refresh">
                    <div className="category-container">
                        <button type="button" className="category">
                            <LiaFileImportSolid size={25}/>
                            <p>Import Orders</p>
                        </button>
                        <button type="button" className="category">
                            <PiTelegramLogoLight size={25}/>
                            <p>Accept</p>
                        </button>
                        <button type="button" className="category">
                            <IoPrintOutline size={25}/>
                            <p>Print</p>
                        </button>
                    </div>
                    <button className="refresh-btn" type="button">
                        <IoIosRefresh size={25}/>
                        <p>Refresh</p>
                    </button>
                </div>
            {this.renderTheTabluarForm()}
            <div className="page-count-container">
                    <div className="count-container">
                        <FaChevronLeft size={25}/>
                        <p className="count">1</p>
                        <FaAngleRight size={25}/>
                    </div>
                    <p className="page-num">20/ Pages</p>
            </div>
        </div>
        </div>
    )

    render(){
        return(
            <>
            <Header/>
            <div className="home-side-bar-container">
                <SideBar />
                {this.renderTheHomePage()}
            </div>
            </>
        )
    }
}

export default Home