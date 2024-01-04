const root = '/mock';
const routes = {
    videos: `${root}/videos.json`,
};

export const getVideos = async () => {
    return await fetch(routes.videos).then((res) => res.json());
};
