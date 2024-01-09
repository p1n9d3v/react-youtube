import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CommentSkeleton() {
    return (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
            }}
        >
            <Skeleton
                height={40}
                width={40}
                circle={true}
                baseColor="#343a40"
                highlightColor="#adb5bd"
            />
            <div>
                <Skeleton
                    height={13}
                    width={200}
                    baseColor="#343a40"
                    highlightColor="#adb5bd"
                />
                <Skeleton
                    style={{
                        marginTop: '.5rem',
                    }}
                    height={14}
                    width={400}
                    baseColor="#343a40"
                    highlightColor="#adb5bd"
                />
                <Skeleton
                    style={{
                        marginTop: '.5rem',
                    }}
                    height={14}
                    width={400}
                    baseColor="#343a40"
                    highlightColor="#adb5bd"
                />
            </div>
        </div>
    );
}

export default CommentSkeleton;
