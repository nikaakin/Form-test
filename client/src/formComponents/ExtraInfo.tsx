import React, { useState } from "react";

function ExtraInfo() {
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [pictureType, setPictureType] = useState("file");

  return (
    <div>
      {" "}
      <div className="picture-input-wrapper">
        <div className="picture-picker-wrapper">
          <label htmlFor="picture">Picture: </label>
          <select
            className="picker"
            id="picturePicker"
            name="pictureTypePicker"
            onChange={(e) => setPictureType(e.target.value)}
          >
            <option value={"file"}>Upload image from drive</option>
            <option value={"text"}>Upload url of an image</option>
          </select>
        </div>
        <input
          id="picture"
          type={pictureType}
          name="picture"
          placeholder="Type picture url in here..."
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Tell us about you:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Type here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={250}
        />
      </div>
      <div className="form-button" id="login-button">
        <button className="btn btn-blue" type="submit">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default ExtraInfo;
