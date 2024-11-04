import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../assets/css/header.css";

const links = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Props", url: "/props" },
  { id: 3, name: "State", url: "/state" },
  { id: 4, name: "Cond. render", url: "/conditionalrender" },
  { id: 5, name: "Lists", url: "/lists" },
  { id: 6, name: "Forms", url: "/forms" },
  { id: 7, name: "Fetch", url: "/fetch" },
  { id: 8, name: "Todos", url: "/todos" },
];

export default function Header() {
  const location = useLocation();
  const currentRoute = location.pathname.split("/")[1];

  return (
    <header className="header">
      <div>
        <Link style={{ fontWeight: "bold" }} to="/">
          React exercises
        </Link>
      </div>
      <ul>
        {links.map(link => (
          <li
            className={
              currentRoute.localeCompare(link.url.split("/")[1]) === 0
                ? "currentRoute"
                : ""
            }
            key={link.id}
          >
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
