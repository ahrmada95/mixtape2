import "./homepage.css"

import MediaNav from "./MediaNavComponents/MediaNav";
import SocialNav from "./SocialNavComponents/SocialNav";
import WebPlayer from "./WebPlayerComponents/WebPlayer";


const HomePage = () => {
    return (
        <div id="homepage">
            <div>
                <video autoPlay muted loop id='player-bg-video'>
                    <source src='./assets/videos/player_bg.mp4'/>
                </video>
            </div>
            <WebPlayer />
            <MediaNav  />
            <SocialNav />
        </div>
    )
}

export default HomePage;