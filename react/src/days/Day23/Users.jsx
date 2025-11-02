import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Alice"},
  { id: 2, name: "Bob"},
  { id: 3, name: "Charlie"}
];

export default function Users() {
  return (
    <ul className="space-y-2">
      {users.map(user => (
        <li key={user.id}>
          <Link
            to={`/users/${user.id}`}
            className="text-blue-500 hover:underline"
          >
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}