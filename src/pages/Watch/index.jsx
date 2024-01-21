import { VideoQuery } from 'apis';
import { Space } from 'components/ui/Space';
import Video from 'components/ui/Video';
import styles from './index.module.css';
import { useSearchParams } from 'react-router-dom';
import Comments from 'components/watch/Comments';
import RelativeVideos from 'components/watch/RelativeVideos';
import VideoMeta from 'components/watch/VideoMeta';
import Spinner from 'components/ui/Spinner';

function Watch() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const { isLoading, data: video } = VideoQuery.get(id);

    if (isLoading) return <Spinner />;
    return (
        <div className={styles.Watch}>
            <div className={styles.Watch_detail}>
                <Video vid={video.id} autoplay={false} />
                <Space h={1} />
                <VideoMeta
                    snippet={video.snippet}
                    statistics={video.statistics}
                />
                <Space h={3} />
                <Comments
                    id={id}
                    commentCount={video.statistics.commentCount}
                />
            </div>
            <div className={styles.Watch_relative}>
                <RelativeVideos tags={video.snippet.tags} />
            </div>
        </div>
    );
}

export default Watch;
