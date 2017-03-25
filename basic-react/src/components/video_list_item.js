import React from 'react';

// Es6 syntax to get video from props
const VideoListItem = ({video, onVideoSelect}) => {
//const VideoListItem = (props) => {
  // will pull off video from props.video, but using above is cleaner
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;