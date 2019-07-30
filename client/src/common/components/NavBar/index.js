import React from 'react'
import home from '../../../assets/img/navIcons/home.png'
import search from '../../../assets/img/navIcons/search.png'
import notes from '../../../assets/img/navIcons/notes.png'
import profile from '../../../assets/img/navIcons/profile.png'
import { Wrapper, IconContainer, NavIcon } from './styled'

const NavBar = (props) => {
  return (
    <Wrapper>
      <IconContainer onPress={props.navigateHome}>
        <NavIcon source={home} />
      </IconContainer>
      <IconContainer onPress={props.navigateToSearch}>
        <NavIcon source={search} />
      </IconContainer>
      <IconContainer onPress={props.navigateToNotes}>
        <NavIcon source={notes} />
      </IconContainer>
      <IconContainer onPress={props.navigateToProfile}>
        <NavIcon source={profile} />
      </IconContainer>
    </Wrapper>
  )
}

export { NavBar }
