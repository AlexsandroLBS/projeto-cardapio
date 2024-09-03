import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StoreIdHandler: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const match = location.pathname.match(/^\/s\/([a-zA-Z0-9]+)/);
        if (match) {
            const storeId = match[1];
            localStorage.setItem('storeId', storeId);
        }
    }, [location]);

    return null;
};

export default StoreIdHandler;
