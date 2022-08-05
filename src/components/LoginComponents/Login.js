import './login.css'

import LoginForm from "./LoginForm";
import LoginVideo from ".//LoginVideo";
import { useHistory } from "react-router-dom";

const Login = () => {
  // const history = useHistory();

  // if(localStorage.getItem('USER_ID') !== 0){
  //   history.push("/home");
  // } 

  return (
    <div id='login-background'>

      <LoginVideo />

      <div id='login-container'>
        <div id='login-box'>
          <div id='title-container'>

            <img src='./assets/images/title2.png' id='title-img'/>
            
          </div>
          <div id='form-container'>

            <LoginForm />
  
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;