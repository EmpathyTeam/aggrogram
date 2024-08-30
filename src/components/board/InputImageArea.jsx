import React from "react";

const InputImageArea = ({ setUploadImage }) => {
  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          setUploadImage(e.target.files[0]);
        }}
      />
    </>
  );
};

export default InputImageArea;
