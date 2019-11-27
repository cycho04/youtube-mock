import React from 'react';
import Popper from '@material-ui/core/Popper';
import './SearchBar.scss';
import { connect } from "react-redux";
import { searchTerm, changeColor } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheese, faPepperHot, faIceCream, faFish, faAppleAlt, faBone, faTimesCircle} from '@fortawesome/free-solid-svg-icons';



class SearchBar extends React.Component {
    state = { term: '', popper: false}

    onTermSubmit = term => {
        this.props.searchTerm(term)
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.onTermSubmit(this.state.term);
    }

    handleClick = () => {
        this.setState({ popper: !this.state.popper});
    }
    
    render(){
        return (
            <div className='search-bar ui segment'>
                <div className='ui grid'>
                    <div className='two column row outer-search'>
                        <div className='logoSide'>
                            <div className='inside main-icon' onClick={this.handleClick}>
                                <h3 className={this.props.color}><i className='large tint icon' />HueTube</h3>       
                            </div>
                        </div>

                        <Popper open={this.state.popper} popper={this.state.popper} className='popper'>
                            <FontAwesomeIcon
                                onClick={() => this.props.changeColor('redBG')} 
                                className={`icons ${this.props.color === 'redBG' ? 'black' : 'red'}`}
                                icon={faPepperHot}
                            />
                            <FontAwesomeIcon
                                icon={faIceCream}
                                onClick={() => this.props.changeColor('purpleBG')} 
                                className={`icons ${this.props.color === 'purpleBG' ? 'black' : 'purple'}`}
                            />
                            <FontAwesomeIcon
                                icon={faAppleAlt}
                                onClick={() => this.props.changeColor('greenBG')} 
                                className={`icons ${this.props.color === 'greenBG' ? 'black' : 'green'}`}
                            />

                            <FontAwesomeIcon
                                icon={faCheese} 
                                onClick={() => this.props.changeColor('yellowBG')} 
                                className={`icons ${this.props.color === 'yellowBG' ? 'black' : 'yellow'}`}
                            />
                            <FontAwesomeIcon
                                icon={faFish}
                                onClick={() => this.props.changeColor('blueBG')} 
                                className={`icons ${this.props.color === 'blueBG' ? 'black' : 'blue'}`}
                            />
                            <FontAwesomeIcon
                                icon={faBone}
                                onClick={() => this.props.changeColor('grayBG')} 
                                className={`icons ${this.props.color === 'grayBG' ? 'gray' : 'black'}`}
                            /> 
                            <FontAwesomeIcon
                                icon={faTimesCircle}
                                onClick={() => this.handleClick()} 
                                className='icons'
                            />    
                        </Popper>

                        <div className='searchSide'>
                            <form onSubmit={this.onFormSubmit} className='ui form'>
                                <div className='ui fluid input'>
                                    <input 
                                        type='text'
                                        value={this.state.term}
                                        onChange={this.onInputChange}   
                                        placeholder='Search' 
                                    />
                                    <button className='ui button'><i className='search icon' /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>  
            </div>
        )
    };
};

const mapStateToProps = state => {
    return{
        videos: state.videos,
        videoId: state.selectedVideo.id.videoId,
        channelId: state.selectedVideo.snippet.channelId,
        color: state.color,
    }
}

const mapDispatchToProps = {
    searchTerm,
    changeColor
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);            