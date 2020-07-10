import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.uploadHandler = this.uploadHandler.bind(this);
  }

  uploadHandler = (event) => {
    console.log(event.target.files[0])
  }

  render() {
    return (
      <div>
        <input type="file" name="file" onChange={this.uploadHandler} />
      </div>
    );
  }
}

export default App;
