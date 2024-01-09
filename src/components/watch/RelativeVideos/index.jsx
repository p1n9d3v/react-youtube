import { RelativeVideosQuery } from 'apis';
import ScrollPoint from 'components/ui/ScrollPoint';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import RelativeVideoCard from '../RelativeVideoCard';
import RelativeVideoCardSkeleton from '../RelativeVideoCard/skeleton';
import styles from './index.module.css';

function RelativeVideos({ videoCategory }) {
    const {
        isLoading,
        isFetching,
        data: videos,
        fetchNextPage,
        hasNextPage,
    } = RelativeVideosQuery.get(videoCategory);
    const { setScrollRef } = useInfiniteScroll(fetchNextPage);
    return (
        <div className={styles.RelativeVideos}>
            <div className={styles.RelativeVideos_videos}>
                {isLoading
                    ? Array(50)
                          .fill()
                          .map((_, index) => (
                              <RelativeVideoCardSkeleton key={index} />
                          ))
                    : videos.videos.map((video) => (
                          <RelativeVideoCard
                              key={video.id}
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
                        <RelativeVideoCardSkeleton key={index} />
                    ))}
            </ScrollPoint>
        </div>
    );
}
export default RelativeVideos;
