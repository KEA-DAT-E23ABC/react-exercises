import { PropTypes } from "prop-types";
import "../assets/css/props.css";

export default function PropsPage() {
  const user = {
    name: "John Doe",
    email: "john@doe.com",
  };
  return (
    <div className="container">
      <h1>Props (parent component)</h1>
      <p>
        Props are used to pass data from a parent component to a child
        component.
      </p>
      <ChildComponent user={user} />
    </div>
  );
}

function ChildComponent({ user }) {
  return (
    <div className="child">
      <h3>Props (Child component)</h3>
      <p>
        {user.name} - {user.email}
      </p>
    </div>
  );
}

ChildComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};
