import { useParams, useSearchParams } from 'react-router-dom';
import styles from './index.module.css';

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    return <div>1</div>;
}

export default Search;
