import { useRef } from 'react';
import YouTube from 'react-youtube';

function Video({ vid, autoplay = 0, controls = 0 }) {
    const ref = useRef(null);
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
            ref={ref}
            videoId={vid}
            opts={opts}
            style={{
                aspectRatio: '16/9',
            }}
        />
    );
}

export default Video;
