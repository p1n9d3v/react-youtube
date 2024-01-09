import { CommentsQuery } from 'apis';
import Comment from 'components/ui/Comment';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import styles from './index.module.css';

function Comments({ id, commentCount }) {
    const { isLoading, data: comments, fetchNextPage } = CommentsQuery.get(id);

    const { setScrollRef } = useInfiniteScroll(fetchNextPage);

    if (isLoading) return <div>Loading....</div>;
    return (
        <div className={styles.Comments}>
            <div className={styles.Comments_count}>Comments {commentCount}</div>
            {comments.pages.map((page) =>
                page.map((comment) => (
                    <div>
                        <Comment
                            key={comment.topLevelComment.id}
                            comment={comment}
                        />
                    </div>
                )),
            )}
            <div
                ref={(ref) => setScrollRef(ref)}
                style={{
                    minHeight: '1rem',
                }}
            >
                123123
            </div>
        </div>
    );
}

export default Comments;
