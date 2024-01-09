import styles from './index.module.css';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { MdRemoveRedEye } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';
import { formatNumberWithSuffix } from 'util';

function VideoMeta({ snippet, statistics }) {
    return (
        <div className={styles.VideoMeta}>
            <div className={styles.VideoMeta_title}>{snippet.title}</div>
            <div className={styles.VideoMeta_information}>
                <div className={styles.VideoMeta_channel}>
                    <img
                        src={snippet.thumbnails.default.url}
                        alt="channel profile image"
                    />
                    {snippet.channelTitle}
                </div>
                <div className={styles.VideoMeta_statistics}>
                    <div className={styles.VideoMeta_likesGroup}>
                        <button className={styles.VideoMeta_statisticsButton}>
                            <AiOutlineLike />
                            {formatNumberWithSuffix(statistics.likeCount)}
                        </button>
                        <button className={styles.VideoMeta_statisticsButton}>
                            <AiOutlineDislike />
                        </button>
                    </div>
                    <button className={styles.VideoMeta_statisticsButton}>
                        <MdRemoveRedEye />
                        {formatNumberWithSuffix(statistics.viewCount)}
                    </button>
                    <button className={styles.VideoMeta_statisticsButton}>
                        <FaRegHeart />
                        {formatNumberWithSuffix(statistics.favoriteCount)}
                    </button>
                </div>
            </div>
            <div className={styles.VideoMeta_description}>
                {snippet.description}
            </div>
        </div>
    );
}

export default VideoMeta;
