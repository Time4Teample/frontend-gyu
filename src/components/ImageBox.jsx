import * as React from 'react';

import img1 from "../assets/images/enroll.png"
import img2 from "../assets/images/check.png"
import img3 from "../assets/images/logout.png"


const ImageBox = () => {
    return (
        <div>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
        </div>
    );
}

export default ImageBox
