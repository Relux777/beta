'use client'
import { useEffect } from 'react';

const YandexPartner = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://yandex.ru/ads/system/context.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="yandex_rtb_C-A-7398888-3"></div>
    );
};

export default YandexPartner;
