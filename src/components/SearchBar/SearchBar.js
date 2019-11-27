import React from 'react';
import './SearchBar.scss';
import { connect } from "react-redux";
import { searchTerm, changeColor } from '../../actions';

class SearchBar extends React.Component {
    state = { term: ''}

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
    render(){
        return (
            <div className='search-bar ui segment'>
                <div className='ui grid'>
                    <div className='three column row outer-search'>
                        <div className='logoSide'>
                            <div className='inside main-icon'>
                                <h3 className={this.props.color}><i className='large tint icon' />HueTube</h3>       
                            </div>
                        </div>

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
                        <div className='rightAlign'>
                            <i 
                                onClick={() => this.props.changeColor('redBG')} 
                                className={`large bullseye icon ${this.props.color === 'redBG' ? 'grey' : 'red'}`}
                            />
                            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i 
                                onClick={() => this.props.changeColor('purpleBG')} 
                                className={`large heartbeat icon ${this.props.color === 'purpleBG' ? 'grey' : 'purple'}`}
                            />
                            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i 
                                onClick={() => this.props.changeColor('greenBG')} 
                                className={`large flask icon ${this.props.color === 'greenBG' ? 'grey' : 'green'}`}
                            />
                                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i 
                                onClick={() => this.props.changeColor('yellowBG')} 
                                className={`large bell icon ${this.props.color === 'yellowBG' ? 'grey' : 'yellow'}`}
                            />
                            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i 
                                onClick={() => this.props.changeColor('blueBG')} 
                                className={`large umbrella icon ${this.props.color === 'blueBG' ? 'grey' : 'blue'}`}
                            />
                            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i 
                                onClick={() => this.props.changeColor('grayBG')} 
                                className={`large inverted circular bomb icon ${this.props.color === 'grayBG' ? 'grey' : 'black'} `}
                            />
                        </div>

                        <div className='searchSide hidden-nav-search'>
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
                            <i 
                                onClick={() => this.props.changeColor('redBG')} 
                                className={`large bullseye icon ${this.props.color === 'redBG' ? 'grey' : 'red'}`}
                            />
                            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i 
                                onClick={() => this.props.changeColor('purpleBG')} 
                                className={`large heartbeat icon ${this.props.color === 'purpleBG' ? 'grey' : 'purple'}`}
                            />
                            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i 
                                onClick={() => this.props.changeColor('greenBG')} 
                                className={`large flask icon ${this.props.color === 'greenBG' ? 'grey' : 'green'}`}
                            />
                                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i 
                                onClick={() => this.props.changeColor('yellowBG')} 
                                className={`large bell icon ${this.props.color === 'yellowBG' ? 'grey' : 'yellow'}`}
                            />
                            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i 
                                onClick={() => this.props.changeColor('blueBG')} 
                                className={`large umbrella icon ${this.props.color === 'blueBG' ? 'grey' : 'blue'}`}
                            />
                            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i 
                                onClick={() => this.props.changeColor('grayBG')} 
                                className={`large inverted circular bomb icon ${this.props.color === 'grayBG' ? 'grey' : 'black'} `}
                            />
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