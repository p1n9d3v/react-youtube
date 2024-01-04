import Video from 'components/ui/Video';
import styles from './index.module.css';
import { useRef } from 'react';
import { Space } from 'components/ui/Space';
import { getOffsetFromDate } from 'util';

function VideoCard({ videoData }) {
    const ref = useRef(null);
    const { id, snippet, statistics } = videoData;

    return (
        <div className={styles.VideoCard}>
            <div ref={ref} className={styles.VideoCard_videoContainer}>
                <img src={snippet.thumbnails.medium.url} alt="thumbnails" />
                <Video
                    className={styles.VideoCard_video}
                    vid={id}
                    autoplay={1}
                    playerVars={{
                        mute: 1,
                        autoplay: 1,
                        controls: 0,
                        fs: 0,
                        start: 5,
                        end: 15,
                    }}
                    loop={true}
                />
            </div>
            <Space h={0.8} />
            <div className={styles.VideoCard_infoContainer}>
                <div className={styles.VideoCard_title}>{snippet.title}</div>
                <div className={styles.VideoCard_info}>
                    <div>{snippet.channelTitle}</div>
                    <div className={styles.VideoCard_meta}>
                        <div>{getOffsetFromDate(snippet.publishedAt)}</div>•
                        <div>{statistics.viewCount} views</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
