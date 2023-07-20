import React from "react";
import { useDragFile } from "../hooks/useDragFile";

export const CsvButton = () =>{
  const {
		file,
		handleButtonClick,
		handleDragEnter,
		handleDragLeave,
		handleDragOver,
		handleDrop,
		handleFileInputChange,
		handleFileUpload,
		inputRef,
		isDragging,
	} = useDragFile()
  
  return (
      <div className="container">
        <div className="load-file-container">
            <div
            className={`drag-drop-container ${isDragging ? 'dragging' : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleButtonClick} 
            >
            <h4>{file ? file.name : 'Drag&Drop CSV files here'}</h4>
            <button className="file-upload-label">
                Browse Files
            </button>
            <input
              ref={inputRef}
              type="file"
              accept=".csv"
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
            </div>
        </div>
        {file && <div className="button-load-container">
            <button className="file-upload-label" onClick={handleFileUpload}>Save data</button>
        </div>}
      </div>
  );
}