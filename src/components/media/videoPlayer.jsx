import React, { useRef } from 'react';
import styled from 'styled-components';

// Styled Video Container
const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

// Styled Video
const Video = styled.video`
  width: 100%;
  height: auto;
`;

const VideoPlayer = ({ src, videoRef }) => {


  return (
    <VideoContainer>
      <Video ref={videoRef}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default VideoPlayer;
