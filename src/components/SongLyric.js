const SongLyric = ({title, lyric}) => {
    return (

        <div>
            <h2>{title}</h2>
            <blockquote style={{whiteSpace: "pre-wrap"}}>{lyric}</blockquote>
        </div>
    )
}

export default SongLyric