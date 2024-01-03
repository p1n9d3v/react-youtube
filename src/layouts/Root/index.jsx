import Header from 'layouts/Header';
import { Outlet } from 'react-router-dom';
import styles from './index.module.css';

function Root() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default Root;
