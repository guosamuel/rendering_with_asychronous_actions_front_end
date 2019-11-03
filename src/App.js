import React from 'react';

class App extends React.Component {

  state = {
    user: null
  }

  componentDidMount() {
    fetch("http://localhost:4001/users/1")
      .then(resp => resp.json())
      .then(user => {
        // let name, favorite_food, hobbies
        // ({ name, favorite_food, hobbies } = user )
        this.setState({
          user: user
        })
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <h2>Favorite Food: {this.state.user.favorite_food}</h2>
        <h2>Hobbies: {this.state.user.hobbies}</h2>
      </div>
    );
  }
}

export default App;

// ? this.state.user.name : "THE ASYNCHRONOUS FETCH HAS NOT BEEN COMPLETED YET"}
