import React, {Component} from 'react'
import MenuItem from './MenuItem'
import {NavDropdown} from 'react-bootstrap'

export default class SubMenuItem extends Component {

  // render menu items with actual links
  menuItems = () => {
    const subMenuName = Object.keys(this.props.subMenuItem)[0]
    return Object.keys(this.props.subMenuItem[subMenuName]).map(
      (name)=> < MenuItem menuItem={this.props.subMenuItem[subMenuName][name]} key={name} />)
  }

  render(){
    return(
      <NavDropdown stacked eventKey={Object.keys(this.props.subMenuItem)[0]} title={Object.keys(this.props.subMenuItem)[0]} id="basic-nav-dropdown">
        {this.menuItems()}
      </NavDropdown>
    )
  }
}
