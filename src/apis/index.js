const root =
    process.env.REACT_APP_ENV === 'development'
        ? '/mock'
        : 'https://www.googleapis.com/youtube/v3';
const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const mock = {
    videos: `${root}/videos.json`,
};
const youtube = {
    videos: `${root}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=10&regionCode=US&key=${key}`,
};
const apis = process.env.REACT_APP_ENV === 'development' ? mock : youtube;

export const getVideos = async () => {
    return await fetch(apis.videos).then((res) => res.json());
};
