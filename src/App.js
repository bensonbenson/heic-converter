import React from 'react';
import './App.css';
const heic2any = require("heic2any");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {}
    }
    this.uploadHandler = this.uploadHandler.bind(this);
  }

  uploadHandler = (event) => {
    const uploadedFile = event.target.files[0];
    console.log(uploadedFile);

    const blob = new Blob(event.target.files)
    console.log(blob)
    heic2any({
      blob,
      toType: "image/jpeg",
      quality: 0.9
    })
    .then((conversionResult) => {
      console.log(conversionResult)
      let url = URL.createObjectURL(conversionResult);
      document.getElementById("target").innerHTML = `<a target="_blank" href="${url}"><img src="${url}"></a>`;
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <input type="file" name="file" onChange={this.uploadHandler} />
        <div id="target"></div>
      </div>
    );
  }
}

export default App;
