import React, { Component } from 'react';
import './App.css';
import MainMenu from './MainMenu'
import {AIR_TABLE_API_KEY, BASE} from './.key'


class App extends Component {

  state = {
    records: []
  }

  componentDidMount() {
    // fetch all data from airtable
    let Airtable = require('airtable');
    let base = new Airtable({apiKey: AIR_TABLE_API_KEY}).base(BASE);
    base('Config')
    // filter out instances without a name and those that are not live
    .select({
      filterByFormula: "AND(NOT({Name} = ''), Live)"
    })
    .all().then((records, fetchNextPage) => {
        this.setState({records: [...this.state.records, records]})
    });

  }

  render() {
    if (this.state.records.length > 0){
      return (
        < MainMenu records={this.state.records} />
      );
    }
    else{
      return null
    }

  }
}

export default App;
