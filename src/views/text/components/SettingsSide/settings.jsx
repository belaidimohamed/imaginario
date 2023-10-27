import React, { useState } from 'react'
import Button from '../../../../components/buttons/button'
import Flex from '../../../../components/containers/flexi'
import { MainContent } from './settings.styles'
import Style from './style'

export default function Settings({style, setStyle}) {
  const [currentSetting, setCurrentSetting] = useState('style')
  return (
    <div>
      <Flex>
        <Button onPress={() => setCurrentSetting('edit')} variant={currentSetting === 'edit' ? 'secondary' : 'neutral'}>
          Edit
        </Button>
        <Button onPress={() => setCurrentSetting('style')} variant={currentSetting === 'style' ? 'secondary' : 'neutral'}>
          Style
        </Button>
        <Button onPress={() => setCurrentSetting('summarize')} variant={currentSetting === 'summarize' ? 'secondary' : 'neutral'}>
          Summarize
        </Button>
        <Button onPress={() => setCurrentSetting('post')} variant={currentSetting === 'post' ? 'secondary' : 'neutral'}>
          Post
        </Button>
      </Flex>
      <MainContent>
        {currentSetting == 'style' &&
          <Style style={style} setStyle={setStyle} />
        }
      </MainContent>
    </div>
  )
}
