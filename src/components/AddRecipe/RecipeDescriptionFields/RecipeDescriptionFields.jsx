import React, { useRef, useEffect, useState } from "react";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { CameraIcon } from "../../RenderSvg/RenderSvg";
import { getCategories } from "#redux/categories/operations";
import { updateField } from "#redux/recipes/addRecipe/addRecipeSlice.js";
import { selectCategories } from "#redux/categories/selectors";
import { addRecipe } from "#redux/recipes/addRecipe/operations";
import {
  FieldContainer,
  Input,
  DisabledInput,
  customSelectStyles,
  SelectContainer,
  ImageUploadContainer,
  ImageUploadButton,
  Form,
  ImagePreview,
} from "./RecipeDescriptionFields.styled";

const ImageUploadField = ({ setRecipeData }) => {
  const fileInputRef = useRef(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        setImagePreviewUrl(fileReader.result);
        setRecipeData((prevRecipeData) => ({
          ...prevRecipeData,
          recipeImg: e.target.files[0],
        }));
      };

      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    return () => {
      imagePreviewUrl && URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [imagePreviewUrl]);

  return (
    <ImageUploadContainer
      onClick={handleContainerClick}
      $isImageUploaded={!!imagePreviewUrl}
    >
      {imagePreviewUrl ? (
        <ImagePreview src={imagePreviewUrl} alt="Recipe" />
      ) : (
        <label htmlFor="recipeImg" style={{ cursor: "pointer" }}>
          <ImageUploadButton type="button">
            <CameraIcon />
          </ImageUploadButton>
        </label>
      )}
      <input
        ref={fileInputRef}
        id="recipeImg"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        name="recipeImg"
      />
    </ImageUploadContainer>
  );
};

const RecipeDescriptionFields = ({ recipeData, setRecipeData }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const [timeOptions] = useState(
    Array.from({ length: 24 }, (_, index) => (index + 1) * 5).map((time) => ({
      label: `${time} min`,
      value: time,
    }))
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleImageUpload = (file) => {
    console.log(file);

    dispatch(updateField({ name: "recipeImg", value: file }));
  };

  const handleChange = (name, value) => {
    setRecipeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!recipeData.title.trim()) {
      Notiflix.Notify.failure("Title is required.");
      return;
    }

    if (!recipeData.description.trim()) {
      Notiflix.Notify.failure("Description is required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", recipeData.title);
    formData.append("description", recipeData.description);

    const imageInput = document.getElementById("image-upload");
    if (imageInput.files[0]) {
      formData.append("recipeImg", imageInput.files[0]);
    }
    dispatch(addRecipe(formData), [dispatch]);
  };

  const titleValue = recipeData ? recipeData.title : "";
  const descriptionValue = recipeData ? recipeData.description : "";
  const selectedCategory = categories.map((item) => ({
    value: item,
    label: item,
  }));
  const selectedCategoryValue = selectedCategory.find(
    (item) => item.value === recipeData?.category
  );

  return (
    <FieldContainer>
      <ImageUploadField
        type="button"
        onImageUpload={handleImageUpload}
        setRecipeData={setRecipeData}
      />
      <Form onSubmit={handleFormSubmit}>
        <Input
          id="title"
          type="text"
          name="title"
          placeholder="Enter item title"
          value={titleValue}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          id="about"
          type="text"
          name="description"
          placeholder="Enter about recipe"
          value={descriptionValue}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <SelectContainer>
          <DisabledInput placeholder="Category" disabled />
          <Select
            id="category"
            styles={customSelectStyles}
            options={selectedCategory}
            placeholder="Select..."
            value={selectedCategoryValue}
            onChange={(item) => handleChange("category", item.value)}
          />
        </SelectContainer>
        <SelectContainer>
          <DisabledInput placeholder="Cooking time" disabled />
          <Select
            id="time"
            styles={customSelectStyles}
            options={timeOptions}
            placeholder="Select..."
            value={timeOptions.find((item) => item.value === recipeData?.time)}
            onChange={(option) => handleChange("time", option.value)}
          />
        </SelectContainer>
      </Form>
    </FieldContainer>
  );
};

export { RecipeDescriptionFields, ImageUploadField };
