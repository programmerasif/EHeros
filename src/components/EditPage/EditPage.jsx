import { useParams } from "react-router-dom";


const EditPage = () => {
    const id = useParams()
    console.log(id);
    return (
        <div className="mt-32 w-3/5 mx-auto">
            <form >
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " name="password" type="password" placeholder="password.." />
    </div>
    
    <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline font-bold" type='submit'  value='log in' />
  </form> 
        </div>
    );
};

export default EditPage;