import React from 'react'
import Button from '../../../../components/buttons/button'
import Flex from '../../../../components/containers/flexi'
import Input from '../../../../components/inputs/input'
import { GrTextAlignCenter, GrTextAlignLeft, GrTextAlignRight } from 'react-icons/gr'
import { Clickable } from '../../text.styles'
import Switch from '../../../../components/inputs/switch'
import ColorBox from '../../../../components/containers/colorBox'
import { ColorContainer } from './settings.styles'
import Slider from '../../../../components/inputs/slider'

export default function Style({style, setStyle}) {
 
  const onUpdateStyle = (value,key) => {
    setStyle(style => ({ ...style, [key]: value }))
    console.log(style)
  }
  return (
    <Flex direction='column'>
{/*  ------------------------------------ First Row -------------------------------- */}
      <Flex gap={'3px'} wrap={false}>
        <Input onChange={(event)=>{onUpdateStyle(event.target.value,'type')}} width='144px' variant='hover' borderRadius='left'  placeholder='Font Type' />
        <Input onChange={(event)=>{onUpdateStyle(event.target.value,'color')}} width='101px' variant='hover' borderRadius='none' placeholder='Color' />
        <Input onChange={(event)=>{onUpdateStyle(event.target.value,'size')}} width='99px' variant='hover' type='number' borderRadius='none' placeholder='Size' />
        <Button onPress={() => { onUpdateStyle(!style.italic, 'italic') }} borderRadius='none'  variant={style.italic ? 'secondary' : 'neutral'}>
          <i> I</i>
        </Button>
        <Button onPress={() => { onUpdateStyle(!style.underline, 'underline') }} borderRadius='right' variant={style.underline ? 'secondary' : 'neutral'}>
          <u>U</u> 
        </Button>
      </Flex>
{/*  ------------------------------------ Second Row -------------------------------- */}
      <Flex wrap={false}>
        <Flex direction='column'>
          <Flex>
            Font color
            <Switch variant='secondary' checked={style.fontColor.status} onChange={(event) => { setStyle({ ...style, fontColor: { ...style.fontColor, status: event.target.checked } })}} />
          </Flex>
          <ColorContainer>
            <Flex>
              <ColorBox color={style.fontColor.color} />
              <Input onChange={(event)=>{setStyle({ ...style, fontColor: { ...style.fontColor, color: event.target.value } })}} height="25px" width='100px' variant='hover'  placeholder='# color' />
            </Flex> 
          </ColorContainer>
          
        </Flex>
     
        <Flex> {/*  -------------- aligning -------------------------------- */}
          <Flex>
            <Clickable onClick={()=> setStyle({ ...style, position:'left' })}>
              <GrTextAlignLeft size={22} />
            </Clickable>
            <Clickable  onClick={()=> setStyle({ ...style, position:'mid' })}>
              <GrTextAlignCenter size={22}/>
            </Clickable>
            <Clickable  onClick={()=> setStyle({ ...style, position:'right' })}>
              <GrTextAlignRight size={22} />
            </Clickable>
          </Flex>
          <Flex>
            <Clickable>
              <GrTextAlignLeft size={22}  onClick={()=> setStyle({ ...style, position:'left' })} />
            </Clickable>
            <Clickable>
              <GrTextAlignCenter size={22}  onClick={()=> setStyle({ ...style, position:'mid' })}/>
            </Clickable>
            <Clickable>
              <GrTextAlignRight size={22}  onClick={()=> setStyle({ ...style, position:'right' })} />
            </Clickable>
          </Flex>
          
        </Flex>
      </Flex>
{/*  ------------------------------------ Third Row -------------------------------- */}
      <Flex wrap={false}>
        <Flex direction='column'>  {/*  -------------- Stroke font -------------------------------- */}
          <Flex>
            Font stroke
            <Switch variant='secondary' checked={style.fontStroke.status} onChange={(event) => { setStyle({ ...style, fontStroke: { ...style.fontStroke, status: event.target.checked } })}} />
          </Flex>
          <ColorContainer>
            <Flex>
              <ColorBox color={style.fontStroke.color} />
              <Input onChange={(event)=>{setStyle({ ...style, fontStroke: { ...style.fontStroke, color: event.target.value } })}} height="25px" width='100px' variant='hover'  placeholder='# color' />
            </Flex>
            <Slider />
          </ColorContainer>
        </Flex>
        <Flex direction='column'>  {/*  -------------- shadow font -------------------------------- */}
          <Flex>
            Font Shadow
            <Switch variant='secondary' checked={style.fontShadow.status} onChange={(event) => { setStyle({ ...style, fontShadow: { ...style.fontShadow, status: event.target.checked } })}} />
          </Flex>
          <ColorContainer>
            <Flex>
              <ColorBox color={style.fontShadow.color} />
              <Input onChange={(event)=>{setStyle({ ...style, fontShadow: { ...style.fontShadow, color: event.target.value } })}} height="25px" width='100px' variant='hover'  placeholder='# color' />
            </Flex> 
            <Slider />
          </ColorContainer>
        </Flex>
      </Flex>
{/*  ------------------------------------ Fourth Row -------------------------------- */}

        <Flex direction='column'>  
          <Flex >
            Animated
            <Switch variant='secondary' checked={style.animated.status} onChange={(event) => { setStyle({ ...style, animated: { ...style.animated, status: event.target.checked } })}} />
          </Flex>
          <ColorContainer>
            <Flex>
              <ColorBox color={style.animated.color1} />
              <Input onChange={(event)=>{setStyle({ ...style, animated: { ...style.animated, color1: event.target.value } })}} height="25px" width='100px' variant='hover'  placeholder='# color' />
            </Flex>
          </ColorContainer>
          <ColorContainer>
              <Flex>
                <ColorBox color={style.animated.color2} />
                <Input onChange={(event)=>{setStyle({ ...style, animated: { ...style.animated, color2: event.target.value } })}} height="25px" width='100px' variant='hover'  placeholder='# color' />
              </Flex>
          </ColorContainer>
        </Flex>
       
      </Flex>
  )
}
