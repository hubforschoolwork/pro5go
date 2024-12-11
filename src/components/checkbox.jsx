import React, { useState } from 'react';


// Reusable Checkbox Component
function Checkbox({ label, onChange }) {
  const [isChecked, setIsChecked] = useState(false);


  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked); // Pass the updated state to the parent component
  };


  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
}


// Using the Reusable Checkbox Component
function App() {
  const handleCheckboxState = (state) => {
    console.log('Checkbox State:', state);
  };


  return (
    <div>
      <Checkbox label="Accept Terms and Conditions" onChange={handleCheckboxState} />

    </div>
  );
}


export default App;