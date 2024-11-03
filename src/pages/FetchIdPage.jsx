import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/fetch.css";
import LoadingSpinner from "../components/LoadingSpinner";

export default function FetchIdPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);

  return (
    <>
      {user ? (
        <div className="userCard">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
