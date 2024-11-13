import React, { useState } from "react";
import "../src/css/projectModal.css";

function ModalForm({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: ""
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file
      });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to parent component or server
    onSubmit(formData);
    onClose(); // Close modal after submission
  };

  return (
    <div className={`modal ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Upload Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
          </div>

          <div className="form-group">
            <label>Project Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Project Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
