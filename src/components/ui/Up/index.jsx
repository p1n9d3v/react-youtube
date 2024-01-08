import { AiOutlineLike } from 'react-icons/ai';

function Up({ count, size, fontSize, color }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
            }}
        >
            <AiOutlineLike
                style={{
                    width: size,
                    height: size,
                }}
            />
            <div
                style={{
                    fontSize,
                    color,
                }}
            >
                {count}
            </div>
        </div>
    );
}

export default Up;
