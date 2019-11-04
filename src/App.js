import React from 'react';

class App extends React.Component {

  state = {
    user: null
  }

  componentDidMount() {
    fetch("http://localhost:4001/users/1")
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          user: user
        })
      })
  }

  render() {
    console.log("I AM THE COMPONENT STATE", this.state)
    return (
      <div>
        <h1>{this.state.user ? this.state.user.name : "HEY, I'M STILL WAITING FOR THE ASYNCHRONOUS ACTIONS TO FINISH!"}</h1>
        <h2>Favorite Food: {this.state.user ? this.state.user.favorite_food : "HEY, I'M STILL WAITING FOR THE ASYNCHRONOUS ACTIONS TO FINISH!"}</h2>
        <h2>Hobbies: {this.state.user ? this.state.user.hobbies : "HEY, I'M STILL WAITING FOR THE ASYNCHRONOUS ACTIONS TO FINISH!"}</h2>
      </div>
    );
  }
}

export default App;
