import Video from 'components/ui/Video';
import styles from './index.module.css';
import { Space } from 'components/ui/Space';
import { getOffsetFromDate } from 'util';
import { useNavigate } from 'react-router-dom';

function RelativeVideoCard({ id, videoData }) {
    const { snippet, statistics } = videoData;
    const navigate = useNavigate();
    return (
        <div
            className={styles.RelativeVideoCard}
            onClick={() => navigate(`/watch?id=${id}`)}
        >
            <div className={styles.RelativeVideoCard_videoBox}>
                <img src={snippet.thumbnails.medium.url} alt="thumbnails" />
                <Video
                    className={styles.RelativeVideoCard_video}
                    vid={id}
                    autoplay={1}
                    playerVars={{
                        loop: 1,
                        mute: 1,
                        autoplay: 1,
                        controls: 0,
                        fs: 0,
                        start: 5,
                        end: 20,
                        playlist: id,
                    }}
                />
            </div>
            <Space h={0.8} />
            <div className={styles.RelativeVideoCard_infoContainer}>
                <div className={styles.RelativeVideoCard_title}>
                    {snippet.title}
                </div>
                <div className={styles.RelativeVideoCard_info}>
                    <div>{snippet.channelTitle}</div>
                    {statistics && (
                        <div className={styles.RelativeVideoCard_meta}>
                            <div>{getOffsetFromDate(snippet.publishedAt)}</div>•
                            <div>{statistics.viewCount} views</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RelativeVideoCard;
