import React from 'react';
import {toJpeg} from "html-to-image";

const useScreenshot = (ref, name) => {
    const makeScreenshot = ()=> toJpeg(ref, { cacheBust: true, })
        .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = name+'.jpg'
            link.href = dataUrl
            link.click()
        })
        .catch((err) => {
            console.log(err)
        })
    return makeScreenshot;
};

export default useScreenshot;