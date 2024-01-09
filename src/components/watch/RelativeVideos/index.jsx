import { RelativeVideosQuery } from 'apis';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import RelativeVideoCard from '../RelativeVideoCard';
import styles from './index.module.css';
function RelativeVideos({ videoCategory }) {
    const {
        isLoading,
        data: videos,
        fetchNextPage,
    } = RelativeVideosQuery.get(videoCategory);
    const { setScrollRef } = useInfiniteScroll(fetchNextPage);
    if (isLoading) return <div>Loading...</div>;
    return (
        <div className={styles.RelativeVideos}>
            <div className={styles.RelativeVideos_videos}>
                {videos.videos.map((video) => (
                    <RelativeVideoCard
                        key={video.id.videoId}
                        id={video.id.videoId}
                        videoData={video}
                    />
                ))}
            </div>
            <div
                ref={(ref) => setScrollRef(ref)}
                styles={{
                    height: '1rem',
                }}
            ></div>
        </div>
    );
}
export default RelativeVideos;
