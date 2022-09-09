import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom'

const ManagerLogin = () => {

    const [id, setId] = useState(0);

    const handleChange = event => {
        setId(event.target.value);
    }

    const navigate = useNavigate();
    const handleLogin = () => {
        //redirect to manager dashboard
        //TODO:  validate manager id
        navigate(`/manager/profile/${id}`);
    }
    

    return (
        <div className="container" >
            <h2>Manager Login</h2>
            <div class="form-group">
                <label >Enter Id</label>
                <input type="text" class="form-control" placeholder="Enter Id" onChange={handleChange} />

            </div>
            <button type="submit" class="btn btn-primary" onClick={handleLogin} >Login</button>
        </div>
    );
}


export default ManagerLogin;