import React, {Component} from 'react'
export default class MenuItem extends Component {

  render(){
    return(
      <li><a href={this.props.menuItem.fields.URL}>{this.props.menuItem.fields.Name}</a></li>
    )
  }
}
