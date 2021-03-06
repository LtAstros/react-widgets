import { useState, useEffect } from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(`/${window.location.pathname}`);
    
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(`/${window.location.pathname}`);
        }
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])

    console.log(currentPath);
    console.log(path)
    return currentPath === path
    ? children
    : null;
};

export default Route;