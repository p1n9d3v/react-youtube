import { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import styles from './index.module.css';

function Video({ vid, autoplay, opts }) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            if (autoplay) ref.current.internalPlayer.playVideo();
            else ref.current.internalPlayer.pauseVideo();
        }
    }, [autoplay]);
    return (
        <div
            style={{
                aspectRatio: '16/9',
            }}
        >
            <YouTube
                ref={ref}
                videoId={vid}
                opts={opts}
                className={styles.Video_iframe}
            />
        </div>
    );
}

export default Video;
