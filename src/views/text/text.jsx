import React, { useRef, useState, useEffect } from 'react';
import Flex from '../../components/containers/flexi';
import Wrapper from '../../components/containers/wrapper';
import VideoPlayer from '../../components/media/videoPlayer';
import Navbar from '../../components/navigation/navbar/navbar';
import TopBar from './components/topBar';
import teenVideo from "../../assets/teen-video.mp4";
import Main from '../../components/containers/main';
import Settings from './components/SettingsSide/settings';
import { Divider } from './text.styles';
import WaveBar from './components/waveBar';
import ControlBar from './components/controlBar';
import VideoPlayer2 from '../../components/media/videoPlayer2';

export default function Text() {
  const videoRef = useRef(null);
  const [style, setStyle] = useState({
    italic: false,
    underline: false,
    position:'mid',
    fontColor: {
      status: true,
      color:''
    },
    fontStroke: {
      status: true,
      color:''
    },
    fontShadow: {
      status: true,
      color:''
    },
    animated: {
      status: true,
      color1: '',
      color2: '',
    }
  })

  const onSaveEdit = () => {
    console.log(style)
  }
  return (
    <Wrapper>
      <Navbar />
      <Main>
        <TopBar />
        <Flex>
          <Divider>
            <Settings style={style} setStyle={setStyle} />
          </Divider>
          <Divider>
            <VideoPlayer videoRef={videoRef} src={teenVideo} />
          </Divider>
        </Flex>
        <ControlBar onSaveEdit={onSaveEdit} videoRef={videoRef} />
        <WaveBar src={teenVideo} />
      </Main>
    </Wrapper>
  );
}
