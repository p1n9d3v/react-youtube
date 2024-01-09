import { VideoQuery } from 'apis';
import { Space } from 'components/ui/Space';
import Video from 'components/ui/Video';
import styles from './index.module.css';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import Comments from 'components/watch/Comments';

function Watch() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const { isLoading: isVideoLoading, data: video } = VideoQuery.get(id);

    if (isVideoLoading) return <div>Loading...</div>;
    return (
        <div className={styles.Watch}>
            <div className={styles.Watch_detail}>
                <Video vid={video.id} />
                <Space h={1} />
                <div className={styles.Watch_title}>{video.snippet.title}</div>
                <div className={styles.Watch_meta}>
                    <div className={styles.Watch_channel}>
                        <img
                            src={video.snippet.thumbnails.default.url}
                            alt="image"
                        />
                        {video.snippet.channelTitle}
                    </div>
                    <div className={styles.Watch_likesButtonGroup}>
                        <button className={styles.Watch_likes}>
                            <AiOutlineLike />
                            {video.statistics.likeCount.toLocaleString()}
                        </button>
                        <button className={styles.Watch_dislikes}>
                            <AiOutlineDislike />
                        </button>
                    </div>
                </div>
                <Space h={1} />
                <div className={styles.Watch_information}>
                    <div className={styles.Watch_viewsFavorContainer}>
                        <div className={styles.Watch_views}>
                            Views -{' '}
                            {video.statistics.viewCount.toLocaleString()}
                        </div>
                        <div>
                            Favorite -{' '}
                            {video.statistics.favoriteCount.toLocaleString()}
                        </div>
                    </div>
                    <div className={styles.Watch_description}>
                        {video.snippet.description}
                    </div>
                </div>
                <Space h={3} />
                <div className={styles.Watch_comments}>
                    <div className={styles.Watch_commentCount}>
                        Comments {video.statistics.commentCount}
                    </div>
                    <Space h={2} />
                    <Comments id={'WZ375Y6Cx0o'} />
                </div>
            </div>
            <div className={styles.Watch_relative}></div>
        </div>
    );
}

export default Watch;
