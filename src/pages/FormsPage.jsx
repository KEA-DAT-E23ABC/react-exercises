import { useState } from "react";

export default function FormsPage() {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const formElement = e.target;
    const form = new FormData(formElement);
    // console.log(form.get("inputName"));
    setName(form.get("inputName"));
    // TODO: Reset input value
    formElement.reset();
  };

  const handleReset = () => {
    // Handle reset of state
    setName("");
  };

  return (
    <div className="container">
      <h1>Forms Page</h1>
      <form onSubmit={handleSubmit}>
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
