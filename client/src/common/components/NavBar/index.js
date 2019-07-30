import React from 'react'
import { TouchableOpacity } from 'react-native'
import home from '../../../assets/img/navIcons/home.png'
import search from '../../../assets/img/navIcons/search.png'
import notes from '../../../assets/img/navIcons/notes.png'
import profile from '../../../assets/img/navIcons/profile.png'
import { Wrapper, IconContainer, NavIcon } from './styled'

const NavBar = (props) => {
  return (
    <Wrapper>
      <TouchableOpacity onPress={props.navigateHome}>
        <IconContainer>
          <NavIcon source={home} />
        </IconContainer>
      </TouchableOpacity>
      <TouchableOpacity>
        <IconContainer onPress={props.navigateToSearch}>
          <NavIcon source={search} />
        </IconContainer>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.navigateToNotes}>
        <IconContainer>
          <NavIcon source={notes} />
        </IconContainer>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.navigateToProfile}>
        <IconContainer>
          <NavIcon source={profile} />
        </IconContainer>
      </TouchableOpacity>
    </Wrapper>
  )
}

export { NavBar }
