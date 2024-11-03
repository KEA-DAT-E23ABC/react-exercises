import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../assets/css/fetch.css";

export default function FetchPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="usersList">
      <h1>Fetch exercise</h1>
      {users.map(user => (
        <Link key={user.id} to={`/fetch/${user.id}`}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}
