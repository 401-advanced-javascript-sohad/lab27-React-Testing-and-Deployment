import React from 'react';

class Main extends React.Component {
    constructor(props) {
      super(props);
      // initial state
      this.state = {
        counter: 0
      }
    }

    handleClickIncrement = e => {
        e.preventDefault();
        let counter = this.state.counter + 1;
        this.setState({ counter });
    
      }
    
      handleClickDecrement = e => {
        e.preventDefault();
        let counter = this.state.counter - 1;
        this.setState({ counter });
    
      }  
      
  render() {
    return (
      <section>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleClickIncrement}>click for Increment</button>
        <button onClick={this.handleClickDecrement}>click for Decrement</button>
       </section>
    )
  }
}

export default Main;