const LoginForm = () => {

    return (
        <>
            <form id='login-form'>
                <label id='user-label'>Username:</label> <br/>
                <div className="input-field-container">
                    <img src="./assets/images/user_icon.png" className="input-field-icon"/>
                    <input type='text' name='username' id='user-box' placeholder="Enter Username"/>
                </div> <br/><br/><br/>

                <label id='pass-label'>Password:</label><br/>
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