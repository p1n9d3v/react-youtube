import VideoCard from 'components/home/VideoCard';
import styles from './index.module.css';

function Home() {
    return (
        <div className={styles.Home}>
            <div className={styles.Home_videos}>
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
}

export default Home;
