import React, { useState } from "react";

function ImageUploader() {
  const [photo, setPhoto] = useState(null);

  const handlePhotoSelect = (event) => {
    const selectedFile = event.target.files[0];
    setPhoto(selectedFile);
  };
  console.log(photo)

  return (
    <div>
      {photo && (
        <img
          src={URL.createObjectURL(photo)}
          alt="Preview"
          style={{ maxWidth: "100%" }}
        />
      )}
      <label style={{display:"block",padding:"8px",border:"1px solid gray"}}>
        {photo ? photo?.name : "upload"}
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoSelect}
          hidden
        />
      </label>
    </div>
  );
}

export default ImageUploader;
