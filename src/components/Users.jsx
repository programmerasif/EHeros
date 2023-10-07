import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";


const Users = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        fetch('https://user-profile-backend-pi.vercel.app/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        
      }, []);
    return (
        <div className="bg-[#ADD8E6] pt-28">
          
            <div className=" relative">
             <>
        <form action="" className="flex flex-col md:flex-row px-3 justify-center items-center gap-3 mb-5 fixed w-full z-20 top-[60px] md:top-[75px] bg-[#ffffff3e] py-2">
                <input type="text" className="xl:w-[40%] w-full  py-3 rounded-md placeholder:italic placeholder:text-text-slate-400 px-5 focus:outline-none border focus:border-[#61afcb]" placeholder="Search for Profile..."/>
                <button className="bg-[#61afcb] font-semibold w-full md:w-32 text-white px-8 py-3 rounded-md " >Search</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full xl:w-[90%] gap-5 xl:gap-10 mx-auto px-3 mt-20">
            {
                users.map(item => <div key={item._id} className="relative">
                    <Link to={`edit/${item._id}`} className="absolute right-5 top-5 p-3 border rounded-full text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white duration-300 z-20"><FaPen /> </Link>
                    <div className="flex gap-3 items-center  bg-white drop-shadow-2xl rounded-xl">
                <img src={item?.image} alt="" className='w-36  xl:w-52 rounded-xl'/>
                <div className='text-start pe-5 flex flex-col gap-2 xl:gap-4'>
                    <h5 className='md:text-2xl xl:text-3xl font-semibold'>{item?.name}</h5>
                    <span className='text-gray-500 text-sm'>Member science {item?.science}</span>
                    <div className='text-gray-500 text-sm'>Title: <span className='font-bold text-[#1d1c1c]'>{item?.jobTitle}</span></div>
                    <div className='text-gray-500 text-sm'>Email: <span className='font-bold text-[#1d1c1c]'>{item?.email}</span></div>
                   <Link to={`/details/${item?._id}`}><button className='bg-blue-500 text-white font-semibold xl:font-bold px-2 py-1  xl:py-2 xl:px-3 rounded-md'>View Profile</button></Link>
                    
                   
                </div>
            </div>
                </div>)
            }
        </div>
        </>
        </div>
        </div>
    );
};

export default Users;