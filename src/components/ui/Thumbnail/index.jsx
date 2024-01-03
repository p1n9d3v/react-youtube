function Thumbnail({ thumbnails }) {
    const styles = {
        width: '100%',
        height: '100%',
        aspectRatio: '16/9',
    };
    return <img src={thumbnails.medium.url} style={styles} alt="thumbnails" />;
}

export default Thumbnail;
