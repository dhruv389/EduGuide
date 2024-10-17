import React, {useState} from 'react'
import { LuSearch } from "react-icons/lu";
import { SiPolestar } from "react-icons/si";
import logo from "../Images/logo.png"
import Dropdown from './Dropdown';

import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
};

  return (
    <div className='flex flex-col gap-4 w-screen  bg-blue-600 px-16'>
        <div className="flex justify-between items-center w-full h-[5rem]">
        <Link to="/" className="w-[20%]"> <img src={logo} alt="" className=' object-contain h-[3rem] w-[4rem]' /></Link>
        <div className="w-[30%] ml-10  font-medium text-sm flex gap-2 items-center justify-around">
                <Link to="/" className="text-gray-100">Home</Link>
                <Link className="text-gray-100">About</Link>
                <Link className="text-gray-100">Services</Link>
                <Link className="text-gray-100">Contact</Link>
        </div>
        <div className="w-[30%] flex justify-end mr-10 flex-col items-end">
    
        
            <Dropdown/>
        </div>
      
    </div> </div>
  )
}

export default Header