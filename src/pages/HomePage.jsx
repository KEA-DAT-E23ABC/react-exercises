export default function Home() {
  return (
    <div>
      <h1>React exercises</h1>
      <p
        style={{
          backgroundColor: "#eaeaea",
          padding: "1em",
          borderRadius: "0.3em",
          // color: "white",
        }}
      >
        This is a collection of exercises to help you learn React. Each page
        focuses on a different aspect of React. You can navigate through the
        exercises using the links in the header.
      </p>
      <ul style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <li>
          <strong>Props:</strong> Learn how to pass data to components.
        </li>
        <li>
          <strong>State:</strong> Learn how to manage state in a component.
        </li>
        <li>
          <strong>Conditional Render:</strong> Learn how to conditionally render
          components.
        </li>
        <li>
          <strong>Lists:</strong> Learn how to display lists of data, using
          .map().
        </li>
        <li>
          <strong>Fetch:</strong> Learn how to fetch data from an API, and
          display it to the user.
        </li>
        <li>
          <strong>Todos:</strong> Build a todo app with CRUD functionality.
        </li>
      </ul>
    </div>
  );
}
