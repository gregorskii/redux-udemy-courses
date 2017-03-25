import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _  from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyCOEKUrCZXrN_N0U8EeZTCqFqoHYRlXEMI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch();
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }

  videoSearch(term) {
    YTSearch({
      key: YOUTUBE_API_KEY, term: term
    }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
