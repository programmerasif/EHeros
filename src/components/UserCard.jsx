import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";

const UserCard = ({item}) =>  {
    
    
    return (
        <div>
          <div className="relative">
                    <Link to={`edit/${item?._id}`} className="absolute right-5 top-5 p-3 border rounded-full text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white duration-300 z-10"><FaPen /> </Link>
                    <div className="flex gap-3 items-center  bg-white drop-shadow-2xl rounded-xl">
                <img src={item?.image} alt="" className='w-36  xl:w-52 rounded-xl'/>
                <div className='text-start pe-5 flex flex-col gap-2 xl:gap-4'>
                    <h5 className='md:text-2xl xl:text-3xl font-semibold'>{item?.name}</h5>
                    <span className='text-gray-500 text-sm'>Member science {item?.science}</span>
                    <div className='text-gray-500 text-sm'>Deprtment: <span className='font-bold text-[#1d1c1c]'>{item?.jobTitle}</span></div>
                    <div className='text-gray-500 text-sm'>Email: <span className='font-bold text-[#1d1c1c]'>{item?.email}</span></div>
                   <Link to={`/details/${item?._id}`}><button className='bg-blue-500 text-white font-semibold xl:font-bold px-2 py-1  xl:py-2 xl:px-3 rounded-md'>View Profile</button></Link>
                    
                   
                </div>
            </div>
                </div>  
        </div>
    );
};

export default UserCard;