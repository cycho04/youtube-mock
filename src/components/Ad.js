import React from 'react';
import faker from 'faker';

import './Ad.css';

//Uses faker API to pull random image for "banner ad"
const Ad = () => {
    return (
        <div className='ui banner ad'>
            <img src={faker.image.image()} alt='Images Generated from faker.js'/>
        </div>
    )
}

export default Ad;