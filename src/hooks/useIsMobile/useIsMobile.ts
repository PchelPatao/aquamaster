import { useEffect, useState } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const width = window.visualViewport?.width || window.innerWidth;
            setIsMobile(width <= 576);
        };

        checkIfMobile(); // Проверяем сразу при монтировании
        window.addEventListener("resize", checkIfMobile);

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    return isMobile }
