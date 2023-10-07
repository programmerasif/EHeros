import { useState } from 'react';
import profile from '../../assets/person.png'
import { FaXmark,FaBars} from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return(
        <>
       
        <nav className="bg-white top-0  shadow-lg p-4  flex md:flex-row flex-row-reverse md:justify-around items-center w-[100%] fixed z-30">
      <div className=" text-xl h-full  font-semibold md:mb-0">

     <div className='text-xl md:text-2xl xl:text-3xl font-bold '>
     <NavLink to="/"  className={({ isActive,  }) =>isActive ? "text-[#61afcb] border-b-4 border-[#61afcb] pb-1  pe-1" : "" }>E-HEROS</NavLink>
     </div>
      </div>
      <button
        onClick={toggleMenu}
        className="md:hidden me-auto text-2xl focus:outline-none"
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>
      <ul
        className={`absolute top-4 md:top-0 right-1 font-semibold bg-white text-black shadow-lg md:shadow-none rounded-md z-30  p-10 md:p-0 md:bg-transparent transition-transform duration-300 md:flex ml-auto md:relative ${
          isOpen ? 'transform translate-x-0 md:translate-x-0' : 'transform translate-x-52 md:translate-x-0'
        }`}
      >
        <li className=" cursor-pointer p-2">
        <NavLink to="/login"  className={({ isActive,  }) =>isActive ? "text-[#61afcb] border-b-4 border-[#61afcb] pb-1  pe-1" : "" }>Login</NavLink>
        </li>
        <li className=" cursor-pointer p-2">
            <NavLink to="/register"  className={({ isActive,  }) =>isActive ? "text-[#61afcb] border-b-4 border-[#61afcb] pb-1  pe-1" : "" }>Register</NavLink>
        </li>
        <li className=" cursor-pointer p-2">
            <img src={profile} alt="" className='w-7'/>
        </li>
        <button
        onClick={toggleMenu}
        className="md:hidden me-auto absolute top-0 p-3 shadow-sm rounded-md border left-0 text-black focus:outline-none"
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>
      </ul>
    </nav>
    
        </>
    )
}

export default Nav;