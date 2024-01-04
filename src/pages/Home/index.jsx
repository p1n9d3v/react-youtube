import { getVideos } from 'apis';
import VideoCard from 'components/home/VideoCard';
import VideoCardSkeleton from 'components/home/VideoCard/skeleton';
import { useQuery } from 'react-query';
import styles from './index.module.css';

function Home() {
    const { isLoading, data: videos } = useQuery('videos', getVideos);

    return (
        <div className={styles.Home}>
            <div className={styles.Home_videos}>
                {isLoading
                    ? Array(30)
                          .fill()
                          .map((item) => <VideoCardSkeleton />)
                    : videos.items.map((video) => (
                          <VideoCard videoData={video} />
                      ))}
            </div>
        </div>
    );
}

export default Home;
