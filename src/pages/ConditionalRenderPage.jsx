import { useState } from "react";

export default function ConditionalRenderPage() {
  return (
    <div className="container">
      <h1>Conditional Rendering</h1>
      <p>
        Conditional rendering is used to display different components or
        elements based on certain conditions.
      </p>
      <ConditionalComponent />
    </div>
  );
}

function ConditionalComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>{isLoggedIn ? "Welcome back!" : "Please log in"}</h3>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
}
