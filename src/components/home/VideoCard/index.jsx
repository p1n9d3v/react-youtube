import Video from 'components/ui/Video';
import styles from './index.module.css';
import { useRef } from 'react';

function VideoCard({ videoData }) {
    const ref = useRef(null);
    const { id, snippet } = videoData;

    return (
        <div ref={ref} className={styles.VideoCard}>
            <div className={styles.VideoCard_overlay}></div>
            <img
                src={snippet.thumbnails.medium.url}
                style={{
                    position: 'absolute',
                    top: 0,
                }}
                alt="thumbnails"
            />
            <Video
                className={styles.VideoCard_video}
                vid={id}
                autoplay={1}
                playerVars={{
                    mute: 1,
                    autoplay: 1,
                    controls: 0,
                    modestbranding: 1,
                    fs: 0,
                    start: 5,
                    end: 15,
                }}
                loop={true}
            />
        </div>
    );
}

export default VideoCard;
