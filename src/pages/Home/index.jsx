import { VideosQuery } from 'apis';
import VideoCard from 'components/home/VideoCard';
import VideoCardSkeleton from 'components/home/VideoCard/skeleton';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import styles from './index.module.css';

function Home() {
    const { isLoading, data, isFetching, fetchNextPage, hasNextPage } =
        VideosQuery.get();

    const { scrollRef } = useInfiniteScroll(fetchNextPage);

    return (
        <div className={styles.Home}>
            <div className={styles.Home_videos}>
                {isLoading
                    ? Array(50)
                          .fill()
                          .map((_, index) => <VideoCardSkeleton key={index} />)
                    : data.videos.map((video, index) => (
                          <VideoCard
                              key={video.id + index}
                              id={video.id}
                              videoData={video}
                          />
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
