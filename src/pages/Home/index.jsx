import { VideosQuery } from 'apis';
import VideoCard from 'components/common/VideoCard';
import VideoCardSkeleton from 'components/common/VideoCard/skeleton';
import ScrollPoint from 'components/ui/ScrollPoint';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import styles from './index.module.css';

function Home() {
    const { isLoading, data, isFetching, fetchNextPage, hasNextPage } =
        VideosQuery.get();

    const { setScrollRef } = useInfiniteScroll(fetchNextPage);

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

            <ScrollPoint
                setRef={setScrollRef}
                isFetching={isFetching}
                hasNextPage={hasNextPage}
            >
                {Array(8)
                    .fill()
                    .map((_, index) => (
                        <VideoCardSkeleton key={index} />
                    ))}
            </ScrollPoint>
        </div>
    );
}

export default Home;
