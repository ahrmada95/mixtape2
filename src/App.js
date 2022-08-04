import Login from "./components/LoginComponents/Login";

//GLOBAL VARIABLES FOR USER CACHING
//login status 
if(localStorage.getItem('LOGIN_STATUS') === 0) {
  localStorage.setItem('LOGIN_STATUS', JSON.stringify(true)); //if true, the user has been logged in, false is logged out
}

//setting user id for caching
if(localStorage.getItem('USER_ID') === 0){
  localStorage.setItem('USER_ID', JSON.stringify(0)); //set to default value for server
}

function App() {
  
  return (
    <div >  
      <Login />
    </div>
  );
}

export default App;
