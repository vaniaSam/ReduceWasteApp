import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function EligibilityForm() {
  const [householdSize, setHouseholdSize] = useState(1);
  const history = useHistory();

  const handleEligibilitySubmit = () => {
    // Logic to verify eligibility based on household size
    // You can integrate a function to check against a pre-defined cap.
    history.push('/receiver'); // Redirect after verification
  };

  return (
    <div>
      <h2>Eligibility Form</h2>
      <input type="number" value={householdSize} onChange={(e) => setHouseholdSize(e.target.value)} />
      <button onClick={handleEligibilitySubmit}>Submit</button>
    </div>
  );
}
