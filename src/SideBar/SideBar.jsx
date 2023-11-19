import React from 'react';
import './SideBar.css';
import { IoIosHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import Price from '../Price/Price';
import Password from '../Password/Password';



const SideBar = () => {
    return (
        <div className='page'>
            <div className='sideBar'>
            <div className='item'><IoIosHome/><span>Home</span></div>
            <div className='item'><FaCircleInfo/><span>Info</span></div>
            <div className='item'><MdHomeRepairService/><span>Service</span></div>
            <div className='item'><IoMdContact/><span>Home</span></div>
            </div>
            {/* <Price/> */}
            <Password/>
        </div>
    );
};

export default SideBar;