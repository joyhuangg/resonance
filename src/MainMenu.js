import React, {Component} from 'react'
import MainMenuItem from './MainMenuItem'
import {Navbar, Nav} from 'react-bootstrap'

export default class MainMenu extends Component {

  // convert records into a nested hash with keys of the main menu names
  getMenuItems = () => {
    let mainMenuItems = {}
    // for each Item
    this.props.records[0].forEach(function(record) {

        // if main menu string does not exist yet as a key in my object of main menu items
        if (!Object.keys(mainMenuItems).includes(record.get('Main Menu'))) {
          // add key pointing to empty object
          mainMenuItems[`${record.get('Main Menu')}`] = {}
        }


        let mainMenuItem = mainMenuItems[`${record.get('Main Menu')}`]
        // if just a regular item push to main menu items value with key of 'Empty'
        if (!record.get(`Sub-menu`)){
          mainMenuItem['Empty'] = record
        }
        // else if submenu item append it to the right submenu
        else{
          // if submenu string does not exist yet as a key in main menu item
          if (!Object.keys(mainMenuItem).includes(record.get('Sub-menu'))) {
            // add key pointing to empty object
            mainMenuItem[`${record.get('Sub-menu')}`] = {}
          }
          let subMenuItem = mainMenuItem[`${record.get('Sub-menu')}`]
          subMenuItem[`${record.get('Name')}`] = record
        }
    });
    return mainMenuItems
  }

  // render main menu items
  mainMenuItems = () => {
    const menuItems = this.getMenuItems()
    return Object.keys(menuItems).map((item, i) => {
      return <MainMenuItem mainMenuItem={{[item]: menuItems[item]}} key={i}/>
    })
  }

  render(){
    return(
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Resonance</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.mainMenuItems()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
