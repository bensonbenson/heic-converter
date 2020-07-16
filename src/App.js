import React from 'react';
import './App.css';
const heic2any = require("heic2any");
const FileSaver = require('file-saver');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false // Display loader when converting
    }
    this.uploadHandler = this.uploadHandler.bind(this);
  }

  uploadHandler = (event) => {
    this.setState({ isLoading: true })
    const uploadedBlob = event.target.files;

    const blob = new Blob(uploadedBlob)
    heic2any({
      blob,
      toType: "image/jpeg",
      quality: 0.9
    })
    .then((conversionResult) => {
      this.setState({ isLoading: false })
      console.log(conversionResult)
      FileSaver.saveAs(conversionResult, 'conversion.jpg')
    })
    .catch(error => console.log(error))
  }

  render() {
    const loader = this.state.isLoading ? "loader" : "";
    return (
      <div>
        <input type="file" name="file" onChange={this.uploadHandler} />
        <div id="target"></div>
        <div className={loader}></div>
      </div>
    );
  }
}

export default App;
