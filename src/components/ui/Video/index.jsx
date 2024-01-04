import YouTube from 'react-youtube';

function Video({ vid, className, playerVars, loop }) {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars,
    };

    return (
        <YouTube
            className={className}
            videoId={vid}
            opts={opts}
            style={{
                aspectRatio: '16/9',
            }}
            onEnd={loop ? (e) => e.target.playVideo() : undefined}
        />
    );
}

export default Video;
