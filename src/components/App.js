// SGN  
import React, { useState } from "react";
import Form from './Form';
import './../styles/App.css';

const App = () => {
  const [formIds, setFormIds] = useState([0]); // Initialize with one form ID
  const [nextId, setNextId] = useState(1); // Track the next ID
  const [formValues, setFormValues] = useState({}); // Store form values

  // Add a new form to the list
  const handleAdd = () => {
    setFormIds([...formIds, nextId]); // Add new form ID
    setNextId(nextId + 1); // Increment next ID
  };

  // Remove a form by its ID
  const handleRemove = (id) => {
    setFormIds(formIds.filter(formId => formId !== id));
    setFormValues(prevValues => {
      const { [id]: removed, ...rest } = prevValues; // Remove the form data
      return rest;
    });
  };

  // Handle form input change
  const handleFormChange = (id, data) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [id]: data
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    // Print all form values as an object
    console.log(formValues);
  };

  return (
    <div id="main-container">
      {/* Render all forms */}
      {formIds.map(id => (
        <Form
          key={id}
          id={id}
          onRemove={handleRemove}
          onChange={handleFormChange}
        />
      ))}

      <button id='Add' onClick={handleAdd}>Add More..</button>  
      <button id='Submit' onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
