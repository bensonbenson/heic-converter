import React from 'react';
import './App.css';
const heic2any = require("heic2any");
const FileSaver = require('file-saver');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false, // Display loader when converting
      isFileTypeError: false
    }
    this.uploadHandler = this.uploadHandler.bind(this);
  }

  // Remove file error if it's there
  resetState = () => {
    this.setState({isFileTypeError: false})
  }

  // Clear input element
  clearUpload = () => {
    document.getElementById("upload").value = "";
  }

  convertFile = (blob) => {
    heic2any({
      blob,
      toType: "image/jpeg",
      quality: 0.9
    })
    .then((conversionResult) => {
      this.setState({ isLoading: false });
      FileSaver.saveAs(conversionResult, 'conversion.jpg');
      this.clearUpload();
    })
    .catch(error => console.log(error))
  }

  uploadHandler = (event) => {
    this.resetState();

    // Check if file is of heic type
    if (event.target.files[0].type !== "image/heic") {
      this.setState({
        isLoading: false,
        isFileTypeError: true
      });
      // Clear upload input
      this.clearUpload();
      return;
    }

    // Loader
    this.setState({ isLoading: true })
    const uploadedBlob = event.target.files;

    const blob = new Blob(uploadedBlob)
    this.convertFile(blob);
  }

  render() {
    const loader = this.state.isLoading ? "loader" : "";
    const fileError = this.state.isFileTypeError ? "file-error" : "dont-show-error";
    return (
      <div>
        <input id="upload" type="file" name="file" onChange={this.uploadHandler} />
        <div className={loader}></div>
        <div className={fileError}>Error: wrong file type</div>
      </div>
    );
  }
}

export default App;
