import React from 'react';
import './styles/SearchBar.css';

export default class SearchBar extends React.Component {
    state = { 
        term: '',
        leftIcon: true,
        videoIcon: true,
        appIcon: true,
        messageIcon: true,
        bellIcon: true,
        loginIcon: true,
     };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        console.log(this)
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }

    handleLeftIconClick = () => {
        this.setState({ leftIcon: !this.state.leftIcon })
    }
    handleVideoIconClick = () => {
        this.setState({ videoIcon: !this.state.videoIcon })
    }
    handleAppIconClick = () => {
        this.setState({ appIcon: !this.state.appIcon })
    }
    handleMessageIconClick = () => {
        this.setState({ messageIcon: !this.state.messageIcon })
    }
    handleBellIconClick = () => {
        this.setState({ bellIcon: !this.state.bellIcon })
    }
    handleLoginIconClick = () => {
        this.setState({ loginIcon: !this.state.loginIcon })
    }

    render(){
        return (
            <div className='search-bar ui segment'>
                <div className='ui grid'>
                    <div className='three column row'>
                        <div className='five wide column logoSide'>
                            <div className='inside'>
                                <i onClick={this.handleLeftIconClick} className={`large ${this.state.leftIcon ? 'grey' : 'red'} bars icon`} />
                                &thinsp;
                                &thinsp;
                                &thinsp;
                                <span onClick={this.handleIconClick}>
                                    <i className='large red youtube icon'/>
                                    <span>YouTube Copy</span>       
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
                            <i onClick={this.handleVideoIconClick} className={`large video icon ${this.state.videoIcon ? 'grey' : 'blue'}`}/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i onClick={this.handleAppIconClick} className={`large th icon ${this.state.appIcon ? 'grey' : 'green'}`}/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i onClick={this.handleMessageIconClick} className={`large envelope outline icon ${this.state.messageIcon ? 'grey' : 'pink'}`}/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i onClick={this.handleBellIconClick} className={`large bell icon ${this.state.bellIcon ? 'grey' : 'yellow'}`}/>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
                            <i onClick={this.handleLoginIconClick} className={`large inverted circular user icon ${this.state.loginIcon ? 'grey' : 'purple'} `}/>
                        </div>
                    </div>
                </div>  
            </div>
        )
    };
};

                