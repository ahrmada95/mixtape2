import Login from "./components/LoginComponents/Login";
import HomePage from "./components/HomePageComponents/HomePage"

//GLOBAL VARIABLES FOR USER CACHING
//login status (default is false)
localStorage.setItem('LOGIN_STATUS', false); 

localStorage.setItem('CURR_SONG', './music/All The Rage.mp3');

//setting user id for caching
if(localStorage.getItem('USER_ID') === 0){
  localStorage.setItem('USER_ID', JSON.stringify(0)); //set to default value for server
}


function App() {
  
  return (
    <div id="background">  
      {/* <Login /> */}
      <HomePage />
    </div>
  );
}

export default App;
