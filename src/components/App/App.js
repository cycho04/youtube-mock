import React from 'react';
import './App.scss';
import Ad from '../Ad/Ad';
import SearchBar from '../SearchBar/SearchBar';
import VideoDetail from '../VideoDetails/VideoDetail';
import VideoList from '../VideoList/VideoList';
import { connect } from "react-redux";
import { searchTerm } from '../../actions';


const App = () => {
    return (
        <div className={`globalFont ${true ? 'backgroundd' : 'hello'}`}>
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