import React, {  useState, useEffect } from 'react';
import Flex from '../../../components/containers/flexi'
import { Box, Clickable, WideContainer } from '../text.styles'
import { MdOpenInFull } from "react-icons/md";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { TbArrowForwardUpDouble , TbArrowBackUpDouble } from "react-icons/tb";
import { GiPauseButton } from "react-icons/gi";
import { VscDebugStart } from 'react-icons/vsc';

import Button from '../../../components/buttons/button';

export default function ControlBar({ videoRef, onSaveEdit }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const onPlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const onSeekForward = () => {
    videoRef.current.currentTime += 5; // You can adjust the seek time as needed
  };

  const onSeekBackward = () => {
    videoRef.current.currentTime -= 5; // You can adjust the seek time as needed
  };

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else {
      videoRef.current.requestFullscreen();
      setIsFullScreen(true);
    }
  };

  const zoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
    adjustVideoSize();
  };

  const zoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
    adjustVideoSize();
  };

  const adjustVideoSize = () => {
    if (videoRef.current) {
      videoRef.current.style.width = `${zoomLevel * 100}%`;
      videoRef.current.style.height = `${zoomLevel * 100}%`;
    }
  };
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    return formattedTime;
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('timeupdate', updateCurrentTime);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', updateCurrentTime);
      }
    };
  }, [videoRef]);

  return (
    <WideContainer>
      <Flex justifyContent='flex-start'>
        <Button variant='primary' onPress={onSaveEdit}> Save Edit </Button>
      </Flex>
      <Flex>
        <Clickable>
          <TbArrowBackUpDouble onClick={onSeekBackward} size={25} />
        </Clickable>
        <Clickable onClick={onPlayPause}>
          {videoRef.current && !videoRef.current.paused ?
            < GiPauseButton size={25} /> : <VscDebugStart size={25} />
          }
        </Clickable>
        <Clickable onClick={onSeekForward}>
          <TbArrowForwardUpDouble size={25} />
        </Clickable>
        {formatTime(currentTime)} / {videoRef.current ? formatTime(videoRef.current.duration.toFixed(2)) : formatTime(0)}
      </Flex>
      <Flex justifyContent='flex-end'>
        <Clickable onClick={zoomOut}> <AiFillMinusCircle size={25} /> </Clickable>
        <Box> Zoom Level: {zoomLevel.toFixed(1)}x </Box>
        <Clickable onClick={zoomIn}> <AiFillPlusCircle size={25} /> </Clickable>
        
            <Clickable onClick={toggleFullScreen}>
              <MdOpenInFull size={25} />
            </Clickable>
      </Flex>
    </WideContainer>
  )
}
