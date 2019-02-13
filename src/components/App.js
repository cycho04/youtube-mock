import React from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Ad from './Ad';

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null
    }; //needs to be array so we can get the length w/o error

    componentDidMount() {
        this.onTermSubmit('buildings');
    }


    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render(){
        return (
            <div>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className='ui fluid container'>
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div className='one wide column'></div>
                            <div className='ten wide column'>
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className='four wide column'>
                                <Ad />
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            </div>
                        </div>    
                    </div>    
                </div>
                    
                   
            </div>
            
        )
    }
}

export default App;