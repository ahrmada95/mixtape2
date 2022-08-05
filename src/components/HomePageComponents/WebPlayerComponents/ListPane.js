import "./webplayer.css"

import { LineItem, LineTitle } from "./LineItem";

const ListPane = () => {
    return (
        <div id='player-list-pane'>
            <LineTitle />
            <LineItem />
            <LineItem />
        </div>
    )
}

export default ListPane;