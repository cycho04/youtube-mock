import React from 'react';
import './SearchBar.scss';
import { connect } from "react-redux";
import { searchTerm } from '../../actions';


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
                    <div className='three column row'>
                        <div className='five wide column logoSide'>
                            <div className='inside'>
                                <i className='large bars icon' />
                                &thinsp;
                                &thinsp;
                                &thinsp;
                                <span>
                                    <i className='large red youtube icon'/>
                                    <span>HueTube</span>       
                                </span>
                            </div>
                        </div>
                        
                        <div className='six wide column'>
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

                        <div className='five wide column rightAlign'>
                            <i className={`large bullseye icon ${this.state.videoIcon ? 'grey' : 'red'}`}/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i className={`large heartbeat icon ${this.state.appIcon ? 'grey' : 'purple'}`}/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i className={`large flask icon ${this.state.messageIcon ? 'grey' : 'green'}`}/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i className={`large bell icon ${this.state.bellIcon ? 'grey' : 'yellow'}`}/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i className={`large umbrella icon ${this.state.bellIcon ? 'grey' : 'blue'}`}/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i className={`large inverted circular bomb icon ${this.state.loginIcon ? 'grey' : 'black'} `}/>
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
        channelId: state.selectedVideo.snippet.channelId
    }
}

const mapDispatchToProps = {
    searchTerm
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);            