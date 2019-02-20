import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
    }

    render(){
        return (
            <div className='search-bar ui segment'>
                <div className='ui grid'>
                    <div className='three column row'>
                        <div className='five wide column'>
                            <i className='large grey bars icon'/>

                            <i className='large red youtube icon'/>
                            YouTube Copy
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
                            <i className='large grey video icon'/>
                            <i className='grey th icon large'/>
                            <i className='large grey envelope outline icon'/>
                            <i className='large grey bell icon'/>
                            <i className='large grey circular user icon'/>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default SearchBar;

                