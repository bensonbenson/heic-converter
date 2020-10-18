import React from 'react';
import './App.css';
import Select from 'react-select';
import { options } from './SelectOptions.js'
const heic2any = require("heic2any");
const FileSaver = require('file-saver');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedBlob: '',
      isLoading: false, // Display loader when converting
      isFileTypeError: false,
      selectedFileType: options[0]
    }
    this.uploadHandler = this.uploadHandler.bind(this);
    this.convertHandler = this.convertHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
  }

  // Remove file error css
  resetFileErrorState = () => {
    this.setState({isFileTypeError: false});
  }

  // Clear input element
  clearUpload = () => {
    document.getElementById("upload").value = "";
  }

  convertFile = (blob) => {
    const fileType = this.state.selectedFileType.value;

    // Clear state and form
    const resetPage = () => {
      this.setState({ isLoading: false });
      this.clearUpload();
    }

    // Convert to desired file type
    switch (fileType) {
      case "jpg":
        heic2any({
          blob,
          toType: "image/jpeg",
          quality: 0.9
        })
        .then((conversionResult) => {
          FileSaver.saveAs(conversionResult, 'conversion.jpg');
          resetPage();
        })
        .catch(error => console.log(error));
        break;
      case "png":
        heic2any({
          blob,
          toType: "image/png",
        })
        .then((conversionResult) => {
          FileSaver.saveAs(conversionResult, 'conversion.png');
          resetPage();
        })
        .catch(error => console.log(error));
        break;
      default:
        break;
    }
  }

  uploadHandler = (event) => {
    // Remove file error if it's there
    if (this.state.isFileTypeError) {
      this.resetFileErrorState();
    }

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

    this.setState({ uploadedBlob: event.target.files });
  }

  // Submit button
  convertHandler = () => {
    const uploadedBlob = this.state.uploadedBlob;
    // Don't submit if there's no file
    if (!this.state.uploadedBlob) {
      window.alert("Please select a HEIC file.");
      return;
    }

    // Loader
    this.setState({ isLoading: true });

    // Convert file stream to blob and convert
    const blob = new Blob(uploadedBlob);
    this.convertFile(blob);
  }

  selectHandler = (event) => {
    console.log(event);
    this.setState({ selectedFileType: event });
  }

  render() {
    const loader = this.state.isLoading ? "loader" : "";
    const fileError = this.state.isFileTypeError ? "file-error" : "dont-show-error";
    return (
      <div className="page">
        <div className="header-container">
          <div className="header">HEIC Converter</div>
        </div>
        <div className="box">
          <div className="box-header">Upload your HEIC file</div>
          <input id="upload" type="file" name="file" onChange={this.uploadHandler} className="upload" />
          <button onClick={this.convertHandler} className="submit-button">Convert</button>
          <div>Select an output format:</div>
          <Select options={options} defaultValue={options[0]} onChange={this.selectHandler} className={"select"} />
          <div className={loader}></div>
          <div className={fileError}>Error: wrong file type</div>
        </div>
      </div>
    );
  }
}

export default App;
