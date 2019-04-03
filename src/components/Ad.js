import React from 'react';
import faker from 'faker'; //random image generator

import './styles/Ad.css';


const Ad = () => {
    return (
        <div className='ui banner ad'>
            <img src={faker.image.image()} alt='Images Generated from faker.js'/>
        </div>
    )
}

export default Ad;