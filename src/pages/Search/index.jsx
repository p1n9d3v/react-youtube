import { SearchQuery } from 'apis';
import VideoCard from 'components/home/VideoCard';
import VideoCardSkeleton from 'components/home/VideoCard/skeleton';
import ScrollPoint from 'components/ui/ScrollPoint';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import { useSearchParams } from 'react-router-dom';
import styles from './index.module.css';

function Search() {
    const [searchParams] = useSearchParams();
    const { isLoading, data, isFetching, fetchNextPage, hasNextPage } =
        SearchQuery.get(searchParams.get('q'));
    const { setScrollRef } = useInfiniteScroll(fetchNextPage);

    return (
        <div className={styles.Search}>
            <div className={styles.Search_videos}>
                {isLoading
                    ? Array(50)
                          .fill()
                          .map((_, index) => <VideoCardSkeleton key={index} />)
                    : data.videos.map((video, index) => (
                          <VideoCard
                              key={video.id + index}
                              id={video.id.videoId}
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

export default Search;
