import React, {Component} from 'react'
import SubMenuItem from './SubMenuItem'
import MenuItem from './MenuItem'
import {NavDropdown} from 'react-bootstrap'
export default class MainMenuItem extends Component {

  // render sub menus or menu items depending on name
  subItems = () => {
    const mainMenuName = Object.keys(this.props.mainMenuItem)[0]
    return Object.keys(this.props.mainMenuItem[mainMenuName]).map((name)=> {
      // Empty key signifies that we need to make a menu item
      if (name === 'Empty'){
        return < MenuItem menuItem={this.props.mainMenuItem[mainMenuName][name]} key={name} />
      }
      // Else we make a SubMenuItem
      else{
        return < SubMenuItem subMenuItem={{[name]:this.props.mainMenuItem[mainMenuName][name]}} key={name} />
      }
    })
  }

  render(){
    return(
      <NavDropdown collapseOnSelect eventKey={Object.keys(this.props.mainMenuItem)[0]} title={Object.keys(this.props.mainMenuItem)[0]} id="basic-nav-dropdown">
        {this.subItems()}
      </NavDropdown>
    )
  }
}
