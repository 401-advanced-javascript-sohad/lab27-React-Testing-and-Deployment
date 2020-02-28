import React from 'react';
import '../src/style/app.css';

// import Header from './components/header/header.js';
// import Footer from './components/footer/footer.js';
// import Counter from './components/counter/main.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;



