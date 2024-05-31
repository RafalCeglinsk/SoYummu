import React from "react";

import { RenderFacebook } from "../../RenderSvg/RenderSvg";
import {
  ImageUploadContainer,
  ImageUploadButton,
} from "./ImageUploadField.styled";

const ImageUploadField = ({ onImageUpload }) => {
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      onImageUpload(event.target.files[0]);
    }
  };
  return (
    <ImageUploadContainer>
      <ImageUploadButton type="button">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <RenderFacebook />
        </svg>
      </ImageUploadButton>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </ImageUploadContainer>
  );
};

export default ImageUploadField;
