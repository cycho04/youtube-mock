import React from 'react';
import PropTypes from 'prop-types';
import Popper from '@material-ui/core/Popper';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheese, faPepperHot, faIceCream, faFish, faAppleAlt, faBone, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

import {changeColor} from '../../actions/index';


const ColorPopper = props => {

    const {open, changeColor, color, handleClick} = props;

    return(
        <Popper open={open} popper={open} className='popper'>
            <FontAwesomeIcon
                onClick={() => changeColor('redBG')} 
                className={`icons ${color === 'redBG' ? 'black' : 'red'}`}
                icon={faPepperHot}
            />
            <FontAwesomeIcon
                icon={faIceCream}
                onClick={() => changeColor('purpleBG')} 
                className={`icons ${color === 'purpleBG' ? 'black' : 'purple'}`}
            />
            <FontAwesomeIcon
                icon={faAppleAlt}
                onClick={() => changeColor('greenBG')} 
                className={`icons ${color === 'greenBG' ? 'black' : 'green'}`}
            />
            <FontAwesomeIcon
                icon={faCheese} 
                onClick={() => changeColor('yellowBG')} 
                className={`icons ${color === 'yellowBG' ? 'black' : 'yellow'}`}
            />
            <FontAwesomeIcon
                icon={faFish}
                onClick={() => changeColor('blueBG')} 
                className={`icons ${color === 'blueBG' ? 'black' : 'blue'}`}
            />
            <FontAwesomeIcon
                icon={faBone}
                onClick={() => changeColor('grayBG')} 
                className={`icons ${color === 'grayBG' ? 'gray' : 'black'}`}
            /> 
            

            <FontAwesomeIcon
                icon={faTimesCircle}
                onClick={() => handleClick()} 
                className='icons'
            />    
        </Popper>
    )
}

const mapStateToProps = state => {
    return{
        color: state.color,
    }
}


ColorPopper.propTypes = {
    open: PropTypes.bool,
    changeColor: PropTypes.func,
    color: PropTypes.string,
    handleClick: PropTypes.func,
}

export default connect(mapStateToProps, {changeColor})(ColorPopper);