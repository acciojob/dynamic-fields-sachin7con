import React, { useState } from 'react';

const Form = ({ id, onRemove, onChange }) => {
  const [formData, setFormData] = useState({ name: '', age: '' });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    onChange(id, newFormData); // Pass data to parent
  };

  // Handle remove button click
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div>
      <input
        name="name"
        type='text'
        placeholder='Name'
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name='age'
        type='number'
        placeholder='Age'
        value={formData.age}
        onChange={handleChange}
      />
      <button name="Remove" onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default Form;
