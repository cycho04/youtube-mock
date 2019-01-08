import React from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] }; //needs to be array so we can get the length w/o error

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    render(){
        return (
            <div>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App;