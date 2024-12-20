import { useParams } from "react-router-dom";

function User() {
  // Retrieve the `id` parameter from the URL
  const { name } = useParams();

  return (
    <div>
      <h2>User Page</h2>
      <p>Name: {name}</p>
    </div>
  );
}

export default User;
