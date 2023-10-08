import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Swal from "sweetalert2";


const Users = () => {
    const [users,setUsers] = useState([])
    const [searchUser, setsearchUser] = useState([])
    const [search,isSearch] = useState(false)
   
    
    useEffect(() => {
        fetch('https://server-forassiignment11.vercel.app/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        
      }, []);

      const handelSearch = (e) =>{
        e.preventDefault();
        const form = e.target
        const text = form.text.value;
        
        const srcReasult = users.find(item=> item.name.toLowerCase().includes(text.toLowerCase()))
        if (!srcReasult) {
            form.text.value = '';
            return Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'No user found',
                showConfirmButton: false,
                timer: 1500
              })
        }
        setsearchUser([srcReasult]);
        isSearch(true)

        }
     
    return (
        <div className="bg-[#ADD8E6] min-h-screen pt-28 pb-12">

            <div className=" relative">
             <>
       <form onSubmit={handelSearch} className="flex mt-5 flex-col md:flex-row px-3 justify-center items-center gap-3 mb-5 fixed w-[80%] z-20 top-[60px] md:top-[75px] bg-[#ffffff3e] py-2">
    
         <div className=" xl:w-[40%] ">
        
              <input className="w-full  py-3 rounded-md placeholder:italic placeholder:text-text-slate-400 px-5 focus:outline-none border focus:border-[#61afcb]" name="text" placeholder="Search..." />
         </div>
    
            <input  className="bg-[#61afcb] font-semibold w-full md:w-32 text-white px-8 py-3 rounded-md " type='submit'  value='search' />
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full xl:w-[90%] gap-5 xl:gap-10 mx-auto px-3 mt-44 md:mt-32">
            {
              search ? searchUser?.map(item => <UserCard key={item?._id} item={item}/>) :  users?.map(item => <UserCard key={item?._id} item={item}/>)
            }
        </div>
        </>
        </div>
        </div>
    );
};

export default Users;