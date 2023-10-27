import React from 'react'
import Flex from '../../../components/containers/flexi'
import {  WideContainer } from '../text.styles'
import { AiOutlinePlus } from "react-icons/ai";

import Button from '../../../components/buttons/button';
import VideoWave from '../../../components/media/videoWave';

export default function WaveBar({ src }) {
  // console.log(currentTime)
  return (
    <WideContainer>
      <Flex justifyContent='flex-start'>
        <Button> <AiOutlinePlus size={25} /> </Button>
      </Flex>
      <Flex>
        <VideoWave selectedFile={src} />        
      </Flex>
      <Flex justifyContent='flex-end'>
        <Button> <AiOutlinePlus size={25} /> </Button>
        
      </Flex>
    </WideContainer>
  )
}
