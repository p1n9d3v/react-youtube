import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './index.module.css';

function SearchVideo() {
    const navigate = useNavigate();
    const [_, setSearchParams] = useSearchParams();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/search');
        setSearchParams({ q: e.target[0].value });
    };

    return (
        <form className={styles.Header_search} onSubmit={onSubmit}>
            <input placeholder="검색" />
            <button>
                <IoSearchOutline size={24} />
            </button>
        </form>
    );
}

export default SearchVideo;
