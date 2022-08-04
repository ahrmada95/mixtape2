
import React, {useState} from "react";
const LoginForm = () => {



    const [testState, setTestState] = useState(1)

    const handleSubmit = (e) => {
        setTestState(0);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label id='user-label'>Username:</label>
                <br/>
                <input type='text' name='username' id='user-box' placeholder="Enter Username"/>
                <br/>
                <br/>
                <br/>
                <label id='pass-label'>Password:</label>
                <br/>
                <input type='password' name='password' id='pass-box' placeholder="Enter Password"/>
            </form>
        </>
    )
};

export default LoginForm;