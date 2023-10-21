import { useEffect, useState } from "react";

const getDimensions = () => {
    const [width, setWidth] = useState(0);

    const getWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        getWidth();
        window.addEventListener('resize', () => {
            getWidth(window.innerWidth)
        })
    }, []);

    return width;
}

export default getDimensions;