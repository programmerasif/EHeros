import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Privaterout = ({children}) => {
    const navigate = useNavigate()
    const { user} = useContext(AuthContext)
    
    if (user) {
        return children
    }else{
        navigate('/')
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'You have to login first',
            showConfirmButton: false,
            timer: 1500
          })
          
        return 
    }
};

export default Privaterout;