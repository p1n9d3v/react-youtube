import { AiOutlineDislike } from 'react-icons/ai';

function Down({ size }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
            }}
        >
            <AiOutlineDislike
                style={{
                    width: size,
                    height: size,
                }}
            />
        </div>
    );
}

export default Down;
