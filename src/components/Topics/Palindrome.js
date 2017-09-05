import React, { Component } from 'react';

class Palindrome extends Component {

    constructor() {
        super();

        this.state = {
            palindrome: "",
            userInput: ""

        }
    }

    handleChange(val) {
        this.setState( { userInput: val })
    }

    isPalindrom(userInput) {
        var forwards = userInput;
        var backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if ( forwards === backwards ) {
            this.setState({ palindrom: 'true' });
        } else {
            this.setState({ palindrom: 'false' });
        }
    }


    render() {
        return (
            <div className="puzzleBox palindromePB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } type="text" placeholder="Type Here (tacocat)"/>
            <button className="confirmationButton" onClick={ () => this.isPalindrom(this.state.userInput)}> Check </button>
            <span className="resultsBox"> True or False? { JSON.stringify(this.state.palindrom) } </span>
            </div>
        )
    }
}

export default Palindrome;