import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import './App.scss';
import Ad from '../Ad/Ad';
import SearchBar from '../SearchBar/SearchBar';
import VideoDetail from '../VideoDetails/VideoDetail';
import VideoList from '../VideoList/VideoList';
import { searchTerm } from '../../actions';


const App = ({color}) => {
    return (
        <div className={`globalFont ${color}`}>
            <SearchBar/>
            <div className='ui stackable grid'>
                <div className='ui row main-section'>   
                    <div className='ten wide column left-place-holder'>
                        <VideoDetail />
                    </div>
                    <div className='four wide column vlist'>
                        <Ad />
                        <VideoList />
                    </div>
                </div>    
            </div>        
        </div>
    )
};

const mapStateToProps = state => {
    return{
        videos: state.videos,
        color: state.color,
    }
}

App.propTypes = {
    color: PropTypes.string,
}


export default connect(mapStateToProps, {searchTerm})(App);