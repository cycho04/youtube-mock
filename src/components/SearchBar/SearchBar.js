import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import './SearchBar.scss';
import ColorPopper from '../ColorPopper/ColorPopper';
import { searchTerm } from '../../actions';


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

        const { color, error } = this.props;

        return (
            <div className='search-bar ui segment'>
                <div className='ui grid'>
                    <div className='two column row outer-search'>
                        <div className='logoSide'>
                            <div className='inside main-icon' onClick={this.handleClick}>
                                <h3 className={color}><i className='large tint icon' />HueTube</h3>       
                            </div>
                        </div>

                        <ColorPopper open={this.state.popper} handleClick={this.handleClick}/>

                        <div className='searchSide'>
                            <form onSubmit={this.onFormSubmit} className='ui form'>
                                <div className='ui fluid input'>
                                    <input 
                                        type='text'
                                        value={this.state.term}
                                        onChange={this.onInputChange}   
                                        placeholder='Search'
                                        className={error ? 'term-error' : ''} 
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
        color: state.color,
        error: state.error,
    }
}

SearchBar.propTypes = {
    searchTerm: PropTypes.func,
    color: PropTypes.string,
    error: PropTypes.bool,
}

export default connect(mapStateToProps, {searchTerm})(SearchBar);            