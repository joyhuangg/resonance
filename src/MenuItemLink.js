import React, {Component} from 'react'
import {MenuItem} from 'react-bootstrap'


export default class MenuItemLink extends Component {

  render(){
    return(
      <MenuItem href={this.props.menuItem.fields.URL} eventKey={this.props.menuItem.fields.Name}>{this.props.menuItem.fields.Name}</MenuItem>
    )
  }

}
