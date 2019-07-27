import React from 'react'
import BaristaCard from '../BaristaCard'
import {
  Wrapper
} from './styled'

class BaristaList extends React.Component {
  renderList = () => {
    return <FlatList />
  }
  render() {
    console.log(this.props)
    return (
      <Wrapper>
        <BaristaCard />
        <BaristaCard />
        <BaristaCard />
      </Wrapper>
    )
  }
}

export default BaristaList
