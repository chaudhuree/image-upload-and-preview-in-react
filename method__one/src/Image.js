import React, { useState } from 'react';

function Image() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageSelect = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    if (typeof selectedFile === 'object' && selectedFile instanceof Blob) {
      reader.readAsDataURL(selectedFile);
    }
    
  };
  console.log(selectedImage)
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageSelect} />
      {previewImage && (
        <img src={previewImage} alt="Preview" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
}

export default Image;
