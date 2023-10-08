
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const NewUser = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => { 
      const updatedData = { 
          name : data.name,
          description : data.description,
          email : data.email,
          image : data.url,
          jobTitle:data.depetment,
          company : '.3net',
          location : data.location,
          skills : ['javascript,react,node,mongo']
       } 
       console.log(updatedData);
     
      const apiUrl = 'https://server-forassiignment11.vercel.app/newUser';
      
      const requestOptions = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(updatedData), 
      };
      
     
      fetch(apiUrl, requestOptions)
        .then((response) => {
          return response.json(); 
        })
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'New user added',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/')
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
       
    }
    return (
        <div>
            <div className="bg-[#61afcb] pt-32 min-h-screen">
            <div className=" w-3/5 mx-auto  bg-white p-10 rounded-md">
              
             
              <form onSubmit={handleSubmit(onSubmit)}>
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
               Name
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("name")} />
              
             </div>
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
                Email
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("email")} />
  
             </div>
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
                 Profile Picture Url
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("url")} />
             </div>
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
               Description
         
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  {...register("description")} />
             </div>
             
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
                 Deprtment
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  {...register("depetment")} />
    
             </div>
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" >
                 Location
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  {...register("location")} />
             </div>
             
             <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline font-bold" type='submit'  value='Update' />
           </form>
 
 
             
         </div>
        </div>
        </div>
    );
};

export default NewUser;