import React from 'react'
import baristaDude
  from '../../../../assets/img/developmentPlaceholders/barista-dude.jpeg'
import baristaFemale
  from '../../../../assets/img/developmentPlaceholders/barista-female.jpeg'
import baristaDev
  from '../../../../assets/img/developmentPlaceholders/barista-dev.jpeg'
import latteArtOne
  from '../../../../assets/img/developmentPlaceholders/latte-art-1.jpeg'
import latteArtTwo
  from '../../../../assets/img/developmentPlaceholders/latte-art-2.jpeg'
import latteArtThree
  from '../../../../assets/img/developmentPlaceholders/latte-art-3.jpeg'
import {
  Wrapper,
  PhotoContainer,
  ProfilePhoto,
  PhotoRight,
  Shader,
  Name
} from './styled'


const BaristaCard = () => {
  return (
    <Wrapper>
      <PhotoContainer>
        <ProfilePhoto source={baristaFemale} />
        <PhotoRight source={latteArtOne}>
          <Shader>
            <Name>Jane Smith</Name>
          </Shader>
        </PhotoRight>
      </PhotoContainer>
    </Wrapper>
  )
}

export default BaristaCard
