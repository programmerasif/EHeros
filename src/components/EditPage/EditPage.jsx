import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const EditPage = () => {
    const id = useParams()
    const [update,setUpdate] = useState([])
    const navigete = useNavigate()
    useEffect(() => {
        fetch('https://server-forassiignment11.vercel.app/users')
        .then(response => response.json())
        .then(data => {
            const d = data.find(item => item._id == id.id)
            setUpdate(d)
         })
        
      }, []);

      const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data => { 
        const updatedData = { 
            name : data.name,
            description : data.description,
            email : data.email,
            url : data.url
         } 
         console.log(updatedData);


         fetch(`https://server-forassiignment11.vercel.app/updateUser/${id.id}`, {
            method: 'PATCH', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(updatedData), 
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json(); 
            })
            .then((data) => {
             if (data.acknowledged) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Update success full',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigete('/')
             }
              console.log(data);
            })
            .catch((error) => {
             
              console.error('Error:', error);
            });
      }    
    return (
        <div className="bg-[#61afcb] pt-32 min-h-screen">
            <div className=" w-3/5 mx-auto  bg-white p-10 rounded-md">
              
             
              <form onSubmit={handleSubmit(onSubmit)}>
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
               Name
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={`${update.name}`} {...register("name")} />
              
             </div>
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
                Email
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={`${update.email}`} {...register("email")} />
  
             </div>
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
                 Profile Picture Url
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={`${update.image}`} {...register("url")} />
             </div>
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
               Description
         
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={update.description} {...register("description")} />
             </div>
             
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
                 Deprtment
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={update.jobTitle} {...register("depetment")} />
    
             </div>
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
                 Location
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={update.location} {...register("location")} />
             </div>
             
             <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline font-bold" type='submit'  value='Update' />
           </form>
 
 
             
         </div>
        </div>
    );
};

export default EditPage;