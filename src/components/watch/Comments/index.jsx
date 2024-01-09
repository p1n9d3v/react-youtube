import { CommentsQuery } from 'apis';
import Comment from 'components/ui/Comment';
import CommentSkeleton from 'components/ui/Comment/skeleton';
import ScrollPoint from 'components/ui/ScrollPoint';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import styles from './index.module.css';

function Comments({ id, commentCount }) {
    const {
        isLoading,
        isFetching,
        data: comments,
        fetchNextPage,
        hasNextPage,
    } = CommentsQuery.get(id);

    const { setScrollRef } = useInfiniteScroll(fetchNextPage);

    return (
        <div className={styles.Comments}>
            <div className={styles.Comments_count}>Comments {commentCount}</div>
            {isLoading
                ? Array(30)
                      .fill()
                      .map((_, index) => <CommentSkeleton key={index} />)
                : comments.pages.map((page) =>
                      page.map((comment) => (
                          <Comment
                              key={comment.topLevelComment.id}
                              comment={comment}
                          />
                      )),
                  )}
            <ScrollPoint
                setRef={setScrollRef}
                isFetching={isFetching}
                hasNextPage={hasNextPage}
            >
                {Array(20)
                    .fill()
                    .map((_, index) => (
                        <CommentSkeleton key={index} />
                    ))}
            </ScrollPoint>
        </div>
    );
}

export default Comments;
