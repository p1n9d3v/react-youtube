import { Video } from 'apis';
import VideoCard from 'components/home/VideoCard';
import VideoCardSkeleton from 'components/home/VideoCard/skeleton';
import { useEffect, useRef } from 'react';
import styles from './index.module.css';

function Home() {
    const { isLoading, data, isFetching, fetchNextPage, hasNextPage } =
        Video.get();
    const scrollRef = useRef(null);
    console.log(data);

    useEffect(() => {
        if (scrollRef.current) {
            const observer = new IntersectionObserver(
                (entry) => {
                    if (entry.at(0).isIntersecting && hasNextPage) {
                        fetchNextPage();
                    }
                },
                {
                    rootMargin: '0px',
                    threshold: 0.1,
                },
            );

            observer.observe(scrollRef.current);
        }
    }, [data, scrollRef]);

    return (
        <div className={styles.Home}>
            <div className={styles.Home_videos}>
                {isLoading
                    ? Array(50)
                          .fill()
                          .map((_, index) => <VideoCardSkeleton key={index} />)
                    : data.videos.map((video) => (
                          <VideoCard key={video.id} videoData={video} />
                      ))}
            </div>

            <div
                ref={scrollRef}
                style={{
                    width: '100%',
                    height: '1rem',
                    fontSize: '2.4rem',
                    textAlign: 'center',
                    padding: '1rem 0',
                }}
            >
                {isFetching && 'Loading more...'}
            </div>
        </div>
    );
}

export default Home;
