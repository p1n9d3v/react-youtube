import Video from 'components/ui/Video';
import styles from './index.module.css';
import { useRef } from 'react';
import { Space } from 'components/ui/Space';

function VideoCard({ videoData }) {
    const ref = useRef(null);
    const { id, snippet, statistics } = videoData;

    return (
        <div className={styles.VideoCard}>
            <div ref={ref} className={styles.VideoCard_videoContainer}>
                <div className={styles.VideoCard_overlay}></div>
                <img src={snippet.thumbnails.medium.url} alt="thumbnails" />
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
            <Space h={0.8} />
            <div className={styles.VideoCard_infoContainer}>
                <div>{snippet.title}</div>
                <div>{snippet.channelTitle}</div>
                <div>{snippet.publishedAt}</div>
                <div>{statistics.viewCount}</div>
                <div>{statistics.favoriteCount}</div>
                <div>{statistics.likeCount}</div>
                <div>{statistics.commentCount}</div>
            </div>
        </div>
    );
}

export default VideoCard;
