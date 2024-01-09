import Down from '../Down';
import Up from '../Up';
import styles from './index.module.css';

function Comment({ comment }) {
    function convertRelativeTime(time) {
        const now = new Date();
        const timeDate = new Date(time);
        const seconds = Math.floor((now - timeDate) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (seconds < 60) {
            return `${seconds} seconds ago`;
        } else if (minutes < 60) {
            return `${minutes} minutes ago`;
        } else if (hours < 24) {
            return `${hours} hours ago`;
        } else if (days < 30) {
            return `${days} days ago`;
        } else if (months < 12) {
            return `${months} months ago`;
        } else {
            return `${years} years ago`;
        }
    }
    return (
        <div className={styles.Comment}>
            <img
                src={comment.topLevelComment.snippet.authorProfileImageUrl}
                alt="user profile image"
            />
            <div className={styles.Comment_dataBox}>
                <div className={styles.Comment_infoBox}>
                    <div className={styles.Comment_name}>
                        {comment.topLevelComment.snippet.authorDisplayName}
                    </div>
                    <div className={styles.Comment_date}>
                        {convertRelativeTime(
                            comment.topLevelComment.snippet.publishedAt,
                        )}
                    </div>
                </div>
                <div className={styles.Comment_text}>
                    {comment.topLevelComment.snippet.textOriginal}
                </div>
                <div className={styles.Comment_metaBox}>
                    <Up
                        count={comment.topLevelComment.snippet.likeCount}
                        size={20}
                        fontSize={12}
                        color="#fff"
                    />
                    <Down size={20} />
                </div>
            </div>
        </div>
    );
}
export default Comment;
