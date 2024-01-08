import Down from '../Down';
import { Space } from '../Space';
import Up from '../Up';
import styles from './index.module.css';

function Comment() {
    return (
        <div className={styles.Comment}>
            <img
                src="https://yt3.ggpht.com/l-43xDUQdAbFdjF8LF9nysQwtJ4CENS3CZlc8FR3SrcP1IIyUDC7Iwy6dgHtVvSr3trwfv2r_g=s48-c-k-c0x00ffffff-no-rj"
                alt="user profile image"
            />
            <div className={styles.Comment_dataBox}>
                <div className={styles.Comment_infoBox}>
                    <div className={styles.Comment_name}>name</div>
                    <div className={styles.Comment_date}>2 days ago</div>
                </div>
                <Space h={0.5} />
                <div className={styles.Comment_text}>
                    123123123123123123123123
                </div>
                <div className={styles.Comment_metaBox}>
                    <Up count={4} size={20} fontSize={12} color="#020202" />
                    <Down size={20} />
                    <div>Replis</div>
                </div>
            </div>
        </div>
    );
}
export default Comment;
