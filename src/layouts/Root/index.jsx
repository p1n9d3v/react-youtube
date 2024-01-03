import { Space } from 'components/ui/Space';
import Header from 'layouts/Header';
import { Outlet } from 'react-router-dom';
import styles from './index.module.css';

function Root() {
    return (
        <div>
            <Header />
            <Space h={1} />
            <Outlet />
        </div>
    );
}

export default Root;
