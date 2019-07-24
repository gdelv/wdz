import React from 'react'
import home from '../../../assets/img/home.png'
import search from '../../../assets/img/search.png'
import notes from '../../../assets/img/notes.png'
import profile from '../../../assets/img/profile.png'
import notesHighlighted from '../../../assets/img/notesHighlighted.png'
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
