import React from 'react';

class App extends React.Component {

  state = {
    user: null
  }

  componentDidMount() {
    fetch("http://localhost:4001/users/")
      .then(resp => resp.json())
      .then(user => {
        this.setState({user: user})
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <label>{this.state.user ? this.state.user.users[0].name : "THE ASYNCHRONOUS FETCH HAS NOT BEEN COMPLETED YET"}</label>
      </div>
    );
  }
}

export default App;
