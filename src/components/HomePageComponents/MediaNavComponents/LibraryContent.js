import "./content.css"

const LibraryContent = () => {
    return (
        <div className="var-container">
            <div className="var-title">
                Your Tapes
            </div>
            <div className="yourtapes-items">
                <div id="add-new">
                    <img src="./assets/images/add_btn.png" className="nav-icon-small"/>
                    Create New
                </div>
            </div>
        </div>
    )
}

export default LibraryContent