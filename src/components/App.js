import React from 'react';
import youtube from '../apis/youtube';

import './styles/App.css';
import Ad from './Ad';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';


export default class App extends React.Component {

    state = { 
        videos: [],
        selectedVideo: null,
        videoDetails: [],
        comments: [],
        viewCounts: [],
        subscriberCount: 0
    };

    componentDidMount() {
        this.onSearchSubmit('Breaking Bad');
    };

    onSearchSubmit = async (searchTerm) => {

        const searchTermResponse = await youtube.get('/search', {
            params: {
                part: 'snippet',
                q: searchTerm
            }
        });

        //loops through list of videos and checks to see if it is a channel. (video doesn't and shouldn't play if channel)
        const checkIfChannel = searchTermResponse.data.items.find(video => !video.id.channelId);

        const comments = await youtube.get('/commentThreads', {
            params:{
                part: 'snippet,replies',
                videoId: checkIfChannel === undefined ? 'V9x86Ind880' : checkIfChannel.id.videoId, 
                order: 'relevance'
            }
        });
        const response3 = await youtube.get('/videos', {
            params:{
                id: checkIfChannel === undefined ? 'V9x86Ind880' : checkIfChannel.id.videoId,
                part: 'snippet,statistics'
            }
        });
        
        //error checking for fetch viewCounts if a channel is searched.
        let viewCountsString = ''
        searchTermResponse.data.items.map((video, i) => {
            //skips over item if channel
            if(video.id.channelId){
                return true;
            }
            //first item doesn't need to be added with ,
            else if(viewCountsString === ''){
                return viewCountsString = video.id.videoId
            }
            //all else is added with , format
            return viewCountsString = viewCountsString === undefined ? '' : viewCountsString.concat(',', video.id.videoId)
        })


        const viewCountResponse = await youtube.get('/videos', {
            params:{
                id: viewCountsString,
                part: 'statistics'
            }
        });

        const subscribeInfo = await youtube.get('/channels', {
            params:{
                id: checkIfChannel === undefined ? '' : checkIfChannel.snippet.channelId,
                part: 'statistics'
            }
        });


        this.setState({ 
            videos: searchTermResponse.data.items, 
            selectedVideo: checkIfChannel, 
            comments: comments.data.items, 
            videoDetails: response3.data.items[0], 
            viewCounts: viewCountResponse.data.items,
            subscriberCount: subscribeInfo.data.items[0] === undefined ? '' : subscribeInfo.data.items[0].statistics.subscriberCount
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
        this.setState({ selectedVideo: video , comments: response2.data.items, videoDetails: response3.data.items[0], subscriberCount: response4.data.items[0].statistics.subscriberCount});    
    };

    render(){
        console.log(this.state)
        return (
            <div className='globalFont'>
                <SearchBar onTermSubmit={this.onSearchSubmit} />

                <div className='ui stackable grid'>
                    <div className='ui row'>
                    
                        <div className='ten wide column left-place-holder'>
                            <VideoDetail 
                                comments={this.state.comments}
                                video={this.state.selectedVideo}  
                                videoDetails={this.state.videoDetails} 
                                subscriberCount={this.state.subscriberCount}
                            />
                        </div>

                        <div className='four wide column'>
                            <Ad />
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} 
                                videoDetails={this.state.videoDetails} 
                                viewCounts={this.state.viewCounts}
                            />
                        </div>

                    </div>    
                </div>  
                  
            </div>
        )
    };
};