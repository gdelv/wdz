import React from 'react'
import home from '../../../assets/img/navIcons/home.png'
import search from '../../../assets/img/navIcons/search.png'
import notes from '../../../assets/img/navIcons/notes.png'
import profile from '../../../assets/img/navIcons/profile.png'
import {
  Wrapper,
  IconContainer,
  NavIcon
} from './styled'

const NavBar = () => {
  return (
    <Wrapper>
      <IconContainer>
        <NavIcon source={home} />
      </IconContainer>
      <IconContainer>
        <NavIcon source={search} />
      </IconContainer>
      <IconContainer>
        <NavIcon source={notes} />
      </IconContainer>
      <IconContainer>
        <NavIcon source={profile} />
      </IconContainer>
    </Wrapper>
  )
}

export { NavBar }
