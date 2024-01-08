import { useInfiniteQuery, useQuery } from 'react-query';

const env = 'development';
const root =
    process.env.REACT_APP_ENV === env
        ? '/mock'
        : 'https://www.googleapis.com/youtube/v3';
const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const mock = {
    video: () => `${root}/video.json`,
    videos: () => `${root}/videos.json`,
    search: () => `${root}/search.json`,
};
const encodeParams = (params) =>
    new URLSearchParams({
        ...params,
        key,
    }).toString();

const youtube = {
    video: (params) => `/videos?${encodeParams(params)}`,
    videos: (params) => `${root}/videos?${encodeParams(params)}`,
    search: (params) => `${root}/search?${encodeParams(params)}`,
};

const apis = process.env.REACT_APP_ENV === env ? mock : youtube;

export const VideosQuery = {
    key: ['videos'],
    fetch: (pageParams) => {
        const opts = {
            part: ['snippet', 'contentDetails', 'statistics'],
            chart: 'mostPopular',
            maxResults: 50,
            regionCode: 'US',
            pageToken: pageParams,
        };
        return fetch(apis.videos(opts)).then((res) => res.json());
    },
    get() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useInfiniteQuery(
            this.key,
            ({ pageParams = '' }) => this.fetch(pageParams),
            {
                getNextPageParam: (lastPage, pages) => {
                    const totalResults = lastPage.pageInfo.totalResults;
                    const totalCurrentResults = pages.reduce(
                        (acc, cur) => acc + cur,
                        0,
                    );
                    if (totalResults === totalCurrentResults) return undefined;
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

export const SearchQuery = {
    key: (query) => ['search', query],
    fetch: (query, pageParams) => {
        const opts = {
            part: ['snippet'],
            maxResults: 50,
            q: query,
            pageToken: pageParams,
        };
        return fetch(apis.search(opts)).then((res) => res.json());
    },
    get(query) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useInfiniteQuery(
            this.key(query),
            ({ pageParams = '' }) => this.fetch(query, pageParams),
            {
                getNextPageParam: (lastPage, pages) => {
                    const totalResults = lastPage.pageInfo.totalResults;
                    const totalCurrentResults = pages.reduce(
                        (acc, cur) => acc + cur,
                        0,
                    );
                    if (totalResults === totalCurrentResults) return undefined;
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

export const VideoQuery = {
    key: (id) => ['video', id],
    fetch: (id) => {
        const opts = {
            part: ['snippet', 'contentDetails', 'statistics'],
            id,
        };
        return fetch(apis.video(opts)).then(async (res) => {
            const ret = await res.json();
            if (ret) return ret['items'][0];
            return;
        });
    },
    get(id) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useQuery(this.key(id), () => this.fetch(id));
    },
};
