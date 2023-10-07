import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import cover from '../../assets/bgImg.jpg'
import './Details.css'
const Details = () => {

    const [users,setUsers] = useState([])
    useEffect(() => {
        fetch('https://user-profile-backend-pi.vercel.app/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        
      }, []);
      const { id } = useParams();
      console.log(id);
    const user = users.find(user => user?._id === id);
    return (
        <div>
           <div>
            <div className="bgImage flex justify-self-center items-center mt-[60px]">
                <div className=" text-5xl w-full px-2 xl:w-[80%] mx-auto flex flex-col gap-5">
                    <div className="font-semibold xl:font-bold">{user?.name}</div>
                    <div className=" text-sm xl:w-[60%] w-full ">{user?.description}</div>
                    <Link to="/"> <div className=" text-sm bg-[#61afcb] w-28 text-center p-3 rounded-md">Back To Home</div></Link>
                    </div>
            </div>
          
            <div className="w-full px-2 xl:w-[80%] flex xl:flex-row flex-col-reverse justify-center items-center gap-5 mt-5 mx-auto">
                <div className="bg-white px-10 py-16 drop-shadow-xl rounded-md">
                <h5 className="text-3xl font-semibold">General Information</h5>
               <div className="grid gric grid-cols-1 md:grid-cols-2 gap-8 mt-3">
               <h5 className="font-semibold drop-shadow-md bg-white px-4 py-1 rounded-md"><span className="text-[#61afcb]">Position: </span> {user?.jobTitle} Speciliest</h5>
               <h5 className="font-semibold drop-shadow-md bg-white px-4 py-1 rounded-md"><span className="text-[#61afcb]">Company : </span>{user?.company} </h5>
               <h5 className="font-semibold drop-shadow-md bg-white px-4 py-1 rounded-md"><span className="text-[#61afcb]">Email: </span>{user?.email} </h5>
               <h5 className="font-semibold drop-shadow-md bg-white px-4 py-1 rounded-md"><span className="text-[#61afcb]">Location:  </span>{user?.location} </h5>
               
               </div>
               <div className="font-semibold drop-shadow-md bg-white px-4 py-1 rounded-md mt-8">
               <span className="text-[#61afcb] font-semibold">Skills : </span>
                {
                    user?.skills.map((skill,i) => <span key={i} className="me-2">{skill},</span>)
                }
               </div>
                </div>
                <div className="relative flex justify-center items-center drop-shadow-lg rounded-md">
                    <div>
                    <img src={cover} alt="" className="w-96 rounded-md"/>
                    <h5 className="flex justify-center items-center"><img src={user?.image} alt="" className="xl:w-24  w-20 rounded-full absolute top-32 ring-4 ring-[#61afcb]"/></h5>
                    <div className="bg-white text-center font-bold">
                        <div className="p-10 ">
                        <div>{user?.name}</div>
                        <div>{user?.email}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Details;