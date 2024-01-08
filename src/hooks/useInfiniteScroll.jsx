const { useRef, useEffect } = require('react');

function useInfiniteScroll(callback) {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            const observer = new IntersectionObserver(
                (entry) => {
                    if (entry.at(0).isIntersecting) {
                        callback();
                    }
                },
                {
                    rootMargin: '0px',
                    threshold: 0.1,
                },
            );

            observer.observe(scrollRef.current);
        }
    }, [scrollRef, callback]);

    return {
        scrollRef,
    };
}
export default useInfiniteScroll;
