import Thumbnail from 'components/ui/Thumbnail';

function VideoCard({ videoData }) {
    // const { vid, title, thumbnails, description, date, view } = videoData;
    return (
        <div>
            <Thumbnail
                thumbnails={{
                    medium: {
                        url: 'https://i.ytimg.com/vi/ftaXMKV3ffE/mqdefault.jpg',
                    },
                }}
            />
        </div>
    );
}

export default VideoCard;
