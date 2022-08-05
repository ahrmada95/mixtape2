import './webplayer.css'

const LineTitle = () => {
    return (
        <div id="librarylinetitle">
            <div id='title-line-number'>#</div>
            <div id='title-song-name'>Song</div>
            <div id='title-time'>Time</div>
            <div id='title-artist'>Artist</div>
            <div id='title-album'>Album</div>
        </div>
    )
}
const LineItem = () => {
    const song_ = '';

    const index = 0;
    
    return (
        <div className="libraryline">
            <div className='line-number'>TEST</div>
            <div className='song-name'>TEST</div>
            <div className='time'>TEST</div>
            <div className='artist'>TEST</div>
            <div className='album'>TEST</div>
        </div>
    )
}

export { LineTitle, LineItem};