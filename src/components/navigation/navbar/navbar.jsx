import React from 'react'
import { Container, Footer, Item, ItemContainer, Logo, Sidebar } from './navbar.styles'
import logo from '../../../assets/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import { AiFillRobot, AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsChatQuote } from 'react-icons/bs'
import { FaSass } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import Switch from '../../inputs/switch'
import Flex from '../../containers/flexi'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../../../redux/slices/themeSlice'

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.pathname)
  const onTheme = (event) => {
    if(event.target.checked)
      dispatch(changeTheme('light'))
    else
      dispatch(changeTheme('dark'))
  }
  return (
      <Sidebar>
        <Logo src={logo} />
        <ItemContainer>
          <Item onClick={() => { navigate('/media') }} active={location.pathname == '/media'} >
            <HiOutlineVideoCamera size={20} /> Media
          </Item>
          <Item onClick={() => { navigate('/transform') }} active={location.pathname == '/transform'}>
            <AiFillRobot />Transform
          </Item>
          <Item onClick={() => { navigate('/text') }} active={location.pathname == '/text' || location.pathname == '/'}>
            <BsChatQuote size={20} /> Text
          </Item>
          <Item onClick={() => { navigate('/brand') }} active={location.pathname == '/brand'}>
            <FaSass size={25} /> Brand
          </Item>
      </ItemContainer>
      <Footer>
        <Flex justifyContent='flex-start'>
          &nbsp; &nbsp; Bonus :)
          <Switch onChange={onTheme} />
        </Flex>
        
        <Item onClick={() => { navigate('/settings') }} active={location.pathname == '/settings'} >
            <FiSettings size={20} /> Settings
        </Item>
        <Item onClick={() => { navigate('/questions') }} active={location.pathname == '/questions'} >
          <AiOutlineQuestionCircle size={20} /> Questions
        </Item>
      </Footer>
      </Sidebar>
  )
}
