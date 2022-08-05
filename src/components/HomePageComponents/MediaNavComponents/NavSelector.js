import "./medianav.css"

const NavSelector = () => {
    return (
        <div id='nav-selector'>
            <div id="library-option">
                <img src='./assets/images/multi_mixtape_icon.png' className="nav-icon"/>
                Library
            </div>
            <div id="search-option">
                <img src='./assets/images/search_icon.png' className="nav-icon"/>
                Search
            </div>
        </div>
    )
}

export default NavSelector