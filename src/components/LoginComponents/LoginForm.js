import { useState, useEffect } from "react";

const LoginForm = () => {
    //state to hold list of all users
    const [users, setUsers] = useState([])

    //run at start to set list of users
    useEffect ( () => {
        const fetchUsers = async () => {
            const req = await fetch('http://localhost:4001/user/credentials/all');
            const res = await req.json();
            setUsers(res);
        }
        fetchUsers();
    }, [])

    //function to confirm if login is successful or not
    const checkUser = (username, password) => {
        for (let a=0; a<users.length; a++) {
            if(users[a]['username']===username && users[a]['password']===password) {
                //set user id in local storage
                localStorage.setItem('USER_ID', JSON.stringify(users[a]['id']));
                localStorage.setItem('LOGIN_STATUS', true);
                return true; 
            }
        }
        return false;
    }

    //handle login event
    const handleLogIn = async(event) => {
        event.preventDefault();
        const req = await fetch('http://localhost:4001/user/credentials/all');
        const res = await req.json();
        setUsers(res);

        if(checkUser(event.target['username'].value, event.target['password'].value)){
            var today = new Date(),
            time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            console.log(time, '- LOGIN EVENT: Successful login!')
        } else {
            alert('Invalid Username or Password!');
        }

        //clear entrys
        event.target['username'].value = '';
        event.target['password'].value = '';
    }

    return (
        <>
            <form id='login-form' onSubmit={handleLogIn}>
                <label id='user-label'>Username:</label> <br/><br/>
                <div className="input-field-container">
                    <img src="./assets/images/user_icon.png" className="input-field-icon"/>
                    <input type='text' name='username' id='user-box' placeholder="Enter Username"/> 
                </div> <br/><br/><br/>

                <label id='pass-label'>Password:</label> <br/><br/>
                <div className="input-field-container">
                    <img src="./assets/images/password_icon.png" className="input-field-icon"/>
                    <input type='password' name='password' id='pass-box' placeholder="Enter Password"/>
                </div>
                <input type="checkbox" id="remember-login" name="remember-login"/>
                <label htmlFor="remember-login" id="remember-login">Remember Me</label><br/>
                <button type="submit" id='login-btn'>Login</button><br/>
                <button id='forgot-btn'>Forgot Username or Password?</button>
            </form>
        </>
    )
};

export default LoginForm;