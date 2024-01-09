const { useRef, useEffect, useState, useCallback } = require('react');

function useInfiniteScroll(callback) {
    const [scrollRef, setScrollRef] = useState(null);

    useEffect(() => {
        if (scrollRef) {
            const observer = new IntersectionObserver(
                (entry) => {
                    if (entry.at(0).isIntersecting) {
                        console.log('callback');
                        callback();
                    }
                },
                {
                    rootMargin: '0px',
                    threshold: 0.1,
                },
            );

            observer.observe(scrollRef);

            return () => {
                if (scrollRef) observer.unobserve(scrollRef);
            };
        }
    }, [scrollRef, callback]);

    return {
        setScrollRef,
    };
}
export default useInfiniteScroll;
