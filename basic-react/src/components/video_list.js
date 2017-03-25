import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  });


  // React recognizes videoItems is an array and will try to render
  // them as the values

  // React array iterators need a key so React knows to only rerender a single item
  // rather than the whole list
  return (
    <ul className="col-md-4 list-group">
       {videoItems}
    </ul>
  );
}

export default VideoList;
