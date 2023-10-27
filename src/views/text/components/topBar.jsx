import React from 'react'
import Flex from '../../../components/containers/flexi'
import { Clickable, WideContainer } from '../text.styles'
import { MdArrowBackIos, MdOutlineModeEditOutline } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";
import { BiCloudDownload } from "react-icons/bi";

export default function TopBar() {
  return (
    <WideContainer>
      <Flex justifyContent='flex-start'>
        <Clickable>
          <MdArrowBackIos /> Back to xyz 
        </Clickable>
      </Flex>
      <Flex>  Untitled Project <MdOutlineModeEditOutline size={22} /> </Flex>
      <Flex justifyContent='flex-end'>
        <Clickable> <VscDebugStart size={25} /> </Clickable> &nbsp;
        <Clickable> <BiCloudDownload size={30} /> </Clickable>
      </Flex>
    </WideContainer>
  )
}
