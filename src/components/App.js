import React from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Ad from './Ad';
import './App.css';

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null,
        videoDetails: [],
        comments: []
    }; //needs to be array so we can get the length w/o error

    componentDidMount() {
        this.onTermSubmit('buildings');
    }


    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                q: term
            }
        });
        //loops through list of videos and checks to see if it is a channel. (video doesnt play if its a channelvideo)
        const checkIfChannel = response.data.items.find(video => !video.id.channelId);
        const response2 = await youtube.get('/commentThreads', {
            params:{
                part: 'snippet,replies',
                videoId: checkIfChannel.id.videoId ? checkIfChannel.id.videoId : 'V9x86Ind880',
                order: 'relevance'
            }
        });
        const response3 = await youtube.get('/videos', {
            params:{
                id: checkIfChannel.id.videoId ? checkIfChannel.id.videoId : 'V9x86Ind880',
                part: 'snippet,statistics'
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: checkIfChannel, comments: response2.data.items, videoDetails: response3.data.items[0] });
    };

    onVideoSelect = async (video) => {
        const response2 = await youtube.get('/commentThreads', {
            params:{
                part: 'snippet,replies',
                videoId: video.id.videoId,
                order: 'relevance'
            }
        });
        const response3 = await youtube.get('/videos', {
            params:{
                id: video.id.videoId,
                part: 'snippet,statistics'
            }
        });
        this.setState({ selectedVideo: video , comments: response2.data.items, videoDetails: response3.data.items[0] });
    }

    render(){
        return (
            <div className='globalFont'>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className='ui fluid container'>
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div className='one wide column'></div>
                            <div className='ten wide column'>
                                <VideoDetail video={this.state.selectedVideo} comments={this.state.comments} videoDetails={this.state.videoDetails}/>
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