import { Video } from 'apis';
import VideoCard from 'components/home/VideoCard';
import VideoCardSkeleton from 'components/home/VideoCard/skeleton';
import { useEffect, useRef } from 'react';
import styles from './index.module.css';

function Home() {
    const { isLoading, data, isFetching, fetchNextPage, hasNextPage } =
        Video.get();
    const scrollRef = useRef(null);

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
    }, [data, scrollRef, fetchNextPage, hasNextPage]);

    return (
        <div className={styles.Home}>
            <div className={styles.Home_videos}>
                {isLoading
                    ? Array(50)
                          .fill()
                          .map((_, index) => <VideoCardSkeleton key={index} />)
                    : data.videos.map((video, index) => (
                          <VideoCard key={video.id + index} videoData={video} />
                      ))}
            </div>

            <div
                ref={scrollRef}
                style={{
                    minHeight: '1rem',
                }}
            >
                {isFetching && hasNextPage && (
                    <div
                        style={{
                            width: '100%',
                        }}
                        className={styles.Home_videos}
                    >
                        {Array(8)
                            .fill()
                            .map((_, index) => (
                                <VideoCardSkeleton key={index} />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
