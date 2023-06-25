import { useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom';

const NavScrollTop = ({children}) => {
    const { pathname } = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [pathname]);

    return children;
};

export default NavScrollTop;