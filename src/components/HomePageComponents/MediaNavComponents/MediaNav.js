import "../homepage.css"
import React, {useState, useEffect} from "react";
import NavSelector from "./NavSelector";
import LibraryContent from "./LibraryContent";
import SearchContent from "./SearchContent";


const MediaNav = () => {
    const [navState, setNavState] = useState(true); //if true, then it is set to library, if false, it is set to search
    return (
        <div id="media-nav-container">
            <NavSelector />
            {(navState === true) ? <LibraryContent /> : <SearchContent />}
        </div>
    )
}

export default MediaNav;