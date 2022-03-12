import { React, useState } from "react";
import "./App.css";
import Select from "react-select";
import { options } from "./SelectOptions.js";
const heic2any = require("heic2any");
const FileSaver = require("file-saver");

const App = () => {
  const [uploadedBlob, setUploadedBlob] = useState("");
  const [isLoading, setIsLoading] = useState(false); // display spinner when converting
  const [isFileTypeError, setIsFileTypeError] = useState(false);
  const [selectedFileType, setSelectedFileType] = useState(options[0]);

  // Remove file error css
  const resetFileErrorState = () => {
    setIsFileTypeError(false);
  };

  // Clear input element
  const clearUpload = () => {
    document.getElementById("upload").value = "";
  };

  const convertFile = (blob) => {
    const fileType = selectedFileType.value;

    // Clear state and form
    const resetPage = () => {
      setIsLoading(false);
      clearUpload();
    };

    // Convert to desired file type
    switch (fileType) {
      case "jpg":
        heic2any({
          blob,
          toType: "image/jpeg",
          quality: 0.9,
        })
          .then((conversionResult) => {
            FileSaver.saveAs(conversionResult, "conversion.jpg");
            resetPage();
          })
          .catch((error) => console.log(error));
        break;
      case "png":
        heic2any({
          blob,
          toType: "image/png",
        })
          .then((conversionResult) => {
            FileSaver.saveAs(conversionResult, "conversion.png");
            resetPage();
          })
          .catch((error) => console.log(error));
        break;
      default:
        break;
    }
  };

  const uploadHandler = (event) => {
    // Remove file error if it's there
    if (isFileTypeError) {
      resetFileErrorState();
    }

    // Check if file is of heic type
    if (event.target.files[0].type !== "image/heic") {
      setIsLoading(false);
      setIsFileTypeError(true);
      // Clear upload input
      clearUpload();
      return;
    }

    setUploadedBlob(event.target.files);
  };

  // Submit button
  const convertHandler = () => {
    const uploadedBlobObj = uploadedBlob;
    // Don't submit if there's no file
    if (!uploadedBlob) {
      window.alert("Please select a HEIC file.");
      return;
    }

    // Loader
    setIsLoading(true);

    // Convert file stream to blob and convert
    const blob = new Blob(uploadedBlobObj);
    convertFile(blob);
  };

  const selectHandler = (event) => {
    setSelectedFileType(event);
  };

  const loader = isLoading ? "loader" : "";
  const fileError = isFileTypeError ? "file-error" : "dont-show-error";
  return (
    <div className="page">
      <div className="header-container">
        <div className="header">HEIC Converter</div>
      </div>
      <div className="box">
        <div className="box-header">Upload your HEIC file</div>
        <input
          id="upload"
          type="file"
          name="file"
          onChange={uploadHandler}
          className="upload"
        />
        <button onClick={convertHandler} className="submit-button">
          Convert
        </button>
        <div>Select an output format:</div>
        <Select
          options={options}
          defaultValue={options[0]}
          onChange={selectHandler}
          className={"select"}
        />
        <div className={loader}></div>
        <div className={fileError}>Error: wrong file type</div>
      </div>
    </div>
  );
};

export default App;
