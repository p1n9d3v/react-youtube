import { useInfiniteQuery } from 'react-query';

const root =
    process.env.REACT_APP_ENV === 'development'
        ? '/mock'
        : 'https://www.googleapis.com/youtube/v3';
const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const mock = {
    videos: () => `${root}/videos.json`,
};
const youtube = {
    videos: (pageParams) =>
        `${root}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&pageToke=${pageParams}&key=${key}`,
};
const apis = process.env.REACT_APP_ENV === 'development' ? mock : youtube;

export const Video = {
    key: ['videos'],
    fetch: async (pageParams) => {
        return await fetch(apis.videos(pageParams)).then((res) => res.json());
    },
    get() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useInfiniteQuery(
            this.key,
            ({ pageParams = '' }) => this.fetch(pageParams),
            {
                getNextPageParam: (lastPage, pages) => {
                    const nextPageToken = lastPage.nextPageToken;
                    return nextPageToken;
                },
                select: (data) => ({
                    videos: data.pages.flatMap((page) => page.items),
                    nextPageToken:
                        data.pages[data.pages.length - 1].nextPageToken,
                }),
            },
        );
    },
};
