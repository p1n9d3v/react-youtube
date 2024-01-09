import Video from 'components/ui/Video';
import styles from './index.module.css';
import { Space } from 'components/ui/Space';
import { getOffsetFromDate } from 'util';
import { useNavigate } from 'react-router-dom';
import { formatNumberWithSuffix } from 'util';
import { useState } from 'react';

function VideoCard({ id, videoData }) {
    const [autoplay, setAutoplay] = useState(false);
    const { snippet, statistics } = videoData;
    const navigate = useNavigate();

    const onHoverVideo = () => {
        if (!autoplay) setAutoplay(true);
    };
    const onLeaveVideo = () => {
        setAutoplay(false);
    };
    return (
        <div
            className={styles.VideoCard}
            onClick={() => navigate(`/watch?id=${id}`)}
        >
            <div
                className={styles.VideoCard_video}
                onMouseOver={onHoverVideo}
                onMouseLeave={onLeaveVideo}
            >
                <img src={snippet.thumbnails.medium.url} alt="thumbnails" />
                <Video
                    vid={id}
                    autoplay={autoplay}
                    opts={{
                        playerVars: {
                            loop: 1,
                            mute: 1,
                            controls: 0,
                            fs: 0,
                            start: 5,
                            end: 10,
                            playlist: id,
                        },
                    }}
                />
            </div>
            <Space h={0.8} />
            <div className={styles.VideoCard_metas}>
                <div className={styles.VideoCard_title}>{snippet.title}</div>
                <div className={styles.VideoCard_channel}>
                    <div>{snippet.channelTitle}</div>
                    {statistics && (
                        <div className={styles.VideoCard_statistics}>
                            <div>{getOffsetFromDate(snippet.publishedAt)}</div>•
                            <div>
                                {formatNumberWithSuffix(statistics.viewCount)}{' '}
                                views
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
