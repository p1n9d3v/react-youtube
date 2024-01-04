import { getVideos } from 'apis';
import VideoCard from 'components/home/VideoCard';
import { useQuery } from 'react-query';
import styles from './index.module.css';

function Home() {
    const {
        isLoading,
        isError,
        data: videos,
        error,
    } = useQuery('videos', getVideos);

    if (videos.length === 0) return;
    return (
        <div className={styles.Home}>
            <div className={styles.Home_videos}>
                {videos.items.map((video) => (
                    <VideoCard videoData={video} />
                ))}
            </div>
        </div>
    );
}

export default Home;
