import "../homepage.css"

import AlbumArt from "./AlbumArt";
import ListPane from "./ListPane";

const WebPlayer = () => {
    return (
        <div id="webplayer-container">
            <AlbumArt />
            <ListPane />
        </div>
    )
}

export default WebPlayer;