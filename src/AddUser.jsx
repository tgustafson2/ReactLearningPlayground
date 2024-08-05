import { Link, Navigate } from "react-router-dom";


function AddUser(){
    return(<>
        <form>
            <label htmlFor="name">
                User Name
            </label>
            <input type="text"/>
        </form>

    </>)
}

export default AddUser;