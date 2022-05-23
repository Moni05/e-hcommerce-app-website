import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls"

const Login = () =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = async(e) => {
        e.preventDefault();
        login(dispatch, {username, password});
        
    }

    return(
        <div className="container">
            <h1 className="text-info">Login</h1>
            <form>
                <div className="form-outline mb-4">
                    <input type="text" id="name" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="form-control" />
                </div>
            
                <div className="form-outline mb-4">
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}

export default Login;