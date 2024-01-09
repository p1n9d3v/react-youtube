import { getOffsetFromDate } from 'util';
import Down from '../Down';
import Up from '../Up';
import styles from './index.module.css';

function Comment({ comment }) {
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
                        {getOffsetFromDate(
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
