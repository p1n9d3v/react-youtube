import YouTube from 'react-youtube';

function Video({ vid, autoplay = 0, controls = 0 }) {
    const opts = {
        height: '100%',
        width: '100%',
        autoplay,
        playerVars: {
            controls,
            modestbranding: 1,
        },
    };
    return (
        <YouTube
            videoId={vid}
            opts={opts}
            style={{
                aspectRatio: '16/9',
            }}
        />
    );
}

export default Video;
