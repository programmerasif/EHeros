import { useParams } from "react-router-dom";


const EditPage = () => {
    const id = useParams()
    console.log(id);
    return (
        <div>
            yhis is edit page 
        </div>
    );
};

export default EditPage;