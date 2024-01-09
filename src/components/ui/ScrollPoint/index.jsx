function ScrollPoint({ setRef, isFetching, hasNextPage, children }) {
    if (!hasNextPage) return null;
    return (
        <div
            ref={(ref) => setRef(ref)}
            style={{
                minHeight: '1rem',
            }}
        >
            {isFetching && children}
        </div>
    );
}

export default ScrollPoint;
