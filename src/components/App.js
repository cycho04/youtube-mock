import React from 'react';
import './styles/App.css';
import Ad from './Ad';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import { connect } from "react-redux";
import { searchTerm } from '../actions';


const App = () => {
    return (
        <div className={`globalFont ${true ? 'gray-background' : 'hello'}`}>
            <SearchBar/>
            <div className='ui stackable grid'>
                <div className='ui row'>   
                    <div className='ten wide column left-place-holder'>
                        <VideoDetail />
                    </div>
                    <div className='four wide column'>
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
        videos: state.videos
    }
}


export default connect(mapStateToProps, {searchTerm})(App);