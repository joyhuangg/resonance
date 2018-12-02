import React, {Component} from 'react'
import MenuItem from './MenuItem'

export default class SubMenuItem extends Component {

  // render menu items with actual links
  menuItems = () => {
    const subMenuName = Object.keys(this.props.subMenuItem)[0]
    return Object.keys(this.props.subMenuItem[subMenuName]).map(
      (name)=> < MenuItem menuItem={this.props.subMenuItem[subMenuName][name]} key={name} />)

  }
  render(){
    return(
      <div>
        <h2>{Object.keys(this.props.subMenuItem)[0]}</h2>
        <ul>
          {this.menuItems()}
        </ul>
      </div>
    )
  }
}
