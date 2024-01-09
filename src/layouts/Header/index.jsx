import { Logo } from 'components/icons/Logo';
import styles from './index.module.css';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import SearchVideo from 'components/common/Search';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('dark') === 'true';
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (darkMode) {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }

        localStorage.setItem('dark', darkMode.toString());
    }, [darkMode]);

    return (
        <div className={styles.Header}>
            <div className={styles.Heaer_col}>
                <div
                    className={styles.Header_logo}
                    onClick={() => navigate('/')}
                >
                    <Logo />
                </div>
            </div>
            <div className={styles.Header_col}>
                <SearchVideo />
            </div>
            <div
                className={styles.Header_col}
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? (
                    <MdDarkMode size={24} color="orange" />
                ) : (
                    <CiLight size={24} color="orange" />
                )}
            </div>
        </div>
    );
}

export default Header;
