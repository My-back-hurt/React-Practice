import { useParams, Link } from "react-router-dom";

const users = [
  { id: 1, name: "Alice", bio: "Loves React and cats" },
  { id: 2, name: "Bob", bio: "Enjoys hiking and TypeScript" },
  { id: 3, name: "Charlie", bio: "Frontend dev and gamer" },
];

export default function UserDetail() {
  const {id} = useParams();
  const user = users.find(u => u.id === Number(id));
  if(!user) {
    return (
      <div>
        <p>User not found</p>
        <Link to="/" className="text-blue-600 hover:underline">Back</Link>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600 mb-4">{user.bio}</p>
      <Link to="/" className="text-blue-600 hover:underline">Back to Usersd</Link>
    </div>
  );
}