import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function VideoCardSkeleton() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.4rem',
            }}
        >
            <Skeleton
                height={180}
                baseColor="#343a40"
                highlightColor="#adb5bd"
            />
            <Skeleton
                height={20}
                baseColor="#343a40"
                highlightColor="#adb5bd"
            />
            <Skeleton
                height={20}
                width="50%"
                baseColor="#343a40"
                highlightColor="#adb5bd"
            />
        </div>
    );
}

export default VideoCardSkeleton;
