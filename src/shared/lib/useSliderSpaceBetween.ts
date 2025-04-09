import { useEffect, useState } from "react";


let timer: ReturnType<typeof setTimeout> | null = null;

/** Адаптировать PX в REM при изменении разрешения экрана */
export function useSliderSpaceBetween(px: number): number {
    const pageSize: number = 375;
    const [pageRem, setPageRem] = useState(window.innerWidth / pageSize * px);

    function windowResize() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            setPageRem(window.innerWidth / pageSize * px);
        }, 200);
    }

    useEffect(() => {
        window.addEventListener("resize", windowResize);
        return () => {
            window.removeEventListener("resize", windowResize);
        };
    }, []);

    return pageRem;
}
