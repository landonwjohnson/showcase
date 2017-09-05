import React, { Component } from 'react';

export default class FilterObject extends Component {

constructor() {
    super();

    this.state = {
      users: [
        {
          name: 'Landon Johnson',
          twitter: '@landonwjohnson',
          behance: 'landonwjohnson',
          linkedIn: 'landonwjohnson',
          YouTube: 'landonjohnsondesign', 
          age: 26,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredUsers: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterUsers(prop) {
    var users = this.state.users;
    var filteredUsers = [];
    
    for ( var i = 0; i < users.length; i++ ) {
      if ( users[i].hasOwnProperty(prop) ) {
        filteredUsers.push(users[i]);
      }
    }

    this.setState({ filteredUsers: filteredUsers });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.users, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } type="text" placeholder="Type Here (name)"></input>
        <button className="confirmationButton" onClick={ () => this.filterUsers(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredUsers, null, 10) } </span>
      </div>
    )
  }
}




