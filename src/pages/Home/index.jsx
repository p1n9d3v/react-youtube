import VideoCard from 'components/home/VideoCard';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('/mock/videos.json')
            .then((data) => data.json())
            .then((data) => setVideos(data));
    }, []);

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
