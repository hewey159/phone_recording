import React, { useRef } from "react";
import styled from "styled-components";

const FileInput = styled.input.attrs({
    type: "file",
})`
  opacity: 0;
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Button = styled.label`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  /* Add hover effect */
  &:hover {
    background-color: #45a049;
  }
`;

type FileChangeHandler = (file: File) => void;

const NiceFileInputButton = ({ onFileChange }: { onFileChange: FileChangeHandler }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        // Do something with the selected file (e.g., upload, read, etc.)
        console.log(file);
        console.log(onFileChange)
        onFileChange(file)
    };

    return (
        <>
            <FileInput
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".mp3, .wav, m4a"
            />
            <Button onClick={() => fileInputRef.current?.click()}>Choose File</Button>
        </>
    );
};

export default NiceFileInputButton;

