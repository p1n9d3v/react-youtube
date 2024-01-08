function Video({ vid, className, playerVars }) {
    const opts = new URLSearchParams(playerVars).toString();
    return (
        <iframe
            title="video"
            className={className}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${vid}?${opts}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
                aspectRatio: '16/9',
            }}
        ></iframe>
    );
}

export default Video;
