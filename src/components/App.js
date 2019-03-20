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
        comments: [],
        viewCounts: [],
        subscriberCount: 0
    }; //needs to be array so we can get the length w/o error

    componentDidMount() {
        this.onTermSubmit('Breaking Bad');

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
        
        //error checking for fetch viewCounts if a channel is searched.
        let viewCountsString = ''
        response.data.items.map((video, i) => {
            //skips over item if channel
            if(video.id.channelId){
                return true;
            }
            //first item doesn't need to be added with ,
            else if(viewCountsString === ''){
                return viewCountsString = video.id.videoId
            }
            //all else is added with , format
            return viewCountsString = viewCountsString .concat(',', video.id.videoId);
        })


        const response4 = await youtube.get('/videos', {
            params:{
                id: viewCountsString,
                part: 'statistics'
            }
        });

        const response5 = await youtube.get('/channels', {
            params:{
                id: checkIfChannel.snippet.channelId,
                part: 'statistics'
            }
        });


        this.setState({ 
            videos: response.data.items, 
            selectedVideo: checkIfChannel, 
            comments: response2.data.items, 
            videoDetails: response3.data.items[0], 
            viewCounts: response4.data.items,
            subscriberCount: response5.data.items[0].statistics.subscriberCount
        });

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
        const response4 = await youtube.get('/channels', {
            params:{
                id: video.snippet.channelId,
                part: 'statistics'
            }
        });
        console.log(response3)
        this.setState({ selectedVideo: video , comments: response2.data.items, videoDetails: response3.data.items[0], subscriberCount: response4.data.items[0].statistics.subscriberCount});    
    }

    render(){
        return (
            <div className='globalFont'>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                    <div className='ui stackable grid'>
                        <div className='ui row'>
                            <div className='one wide computer column'></div>
                            <div className='ten wide computer column'>
                                <VideoDetail video={this.state.selectedVideo} comments={this.state.comments} videoDetails={this.state.videoDetails} subscriberCount={this.state.subscriberCount}/>
                            </div>
                            <div className='four wide computer column'>
                                <Ad />
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} videoDetails={this.state.videoDetails} viewCounts={this.state.viewCounts}/>
                            </div>
                        </div>    
                    </div>    
            </div>
        )
    }
}

export default App;