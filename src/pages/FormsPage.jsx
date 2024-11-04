import { useState } from "react";

export default function FormsPage() {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Extract input value and set state
    // TODO: Reset input value
  };

  const handleReset = () => {
    // Handle reset of state
  };

  return (
    <div className="container">
      <h1>Forms Page</h1>
      {/* TODO: Handle the form submission. */}
      <form>
        <input type="text" name="inputName" placeholder="Name" />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {name && <p>Hello {name}</p>}
    </div>
  );
}
