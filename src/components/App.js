import React from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Ad from './Ad';

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null,
        videoID: 'V9x86Ind880',
        comments: []
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
        const response2 = await youtube.get('/commentThreads', {
            params:{
                videoId: this.state.videoID
            }
        });
        //loops through list of videos and checks to see if it is a channel. (video doesnt play if its a channelvideo)
        const checkIfChannel = response.data.items.find(video => !video.id.channelId);
        this.setState({ videos: response.data.items, selectedVideo: checkIfChannel, videoID: checkIfChannel.id.videoId, comments: response2.data.items });
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
                                <VideoDetail video={this.state.selectedVideo} comments={this.state.comments}/>
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