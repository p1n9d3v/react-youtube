import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function RelativeVideoCardSkeleton() {
    return (
        <div
            style={{
                display: 'flex',
                gap: '.4rem',
            }}
        >
            <Skeleton
                height={94}
                width={164}
                style={{
                    borderRadius: '1rem',
                }}
                baseColor="#343a40"
                highlightColor="#adb5bd"
            />
            <div>
                <Skeleton
                    height={13}
                    width={100}
                    baseColor="#343a40"
                    highlightColor="#adb5bd"
                />
                <Skeleton
                    style={{
                        marginTop: '.5rem',
                    }}
                    height={14}
                    width={180}
                    baseColor="#343a40"
                    highlightColor="#adb5bd"
                />
                <Skeleton
                    style={{
                        marginTop: '.5rem',
                    }}
                    height={14}
                    width={180}
                    baseColor="#343a40"
                    highlightColor="#adb5bd"
                />
            </div>
        </div>
    );
}

export default RelativeVideoCardSkeleton;
