import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/user";

export const useDragFile = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState();
  const inputRef = useRef(null);
  const { getData, setError } = useContext(UserContext);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const fileCSV = e.dataTransfer.files[0];
    setFile(fileCSV);
  };

  const handleFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("csvFile", file);
      try {
        await fetch("http://localhost:3001/api/files", {
          method: "POST",
          body: formData,
        });
        getData();
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const fileCSV = e.target.files[0];
    setFile(fileCSV);
  };

  return {
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
  };
};
